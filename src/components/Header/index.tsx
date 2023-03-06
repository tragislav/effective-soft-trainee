import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Modal from 'react-modal';

import {
  ContainerDiv,
  HeaderInner,
  HeaderLanguages,
  HeaderContent,
  HeaderButtons,
  LogoutBtn,
} from './styled';

import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as Search } from '../../assets/images/search.svg';
import { ReactComponent as Like } from '../../assets/images/heart.svg';
import { ReactComponent as Cart } from '../../assets/images/cart.svg';

import CartDialog from './CartDialog';
import { useAuth } from '../../hooks/useAuth';

const customStyles = {
  content: {
    top: '50%',
    left: '73.5%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: '95vh',
  },
};

Modal.setAppElement('#root');

function Header() {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const { token, signIn, signOut } = useAuth();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => i18n.changeLanguage(lang);
  const setOpenTrue = () => setIsOpen(true);
  const setOpenFalse = () => setIsOpen(false);
  const logout = () => {
    localStorage.removeItem('token');
    signOut();
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      signIn(localStorage.getItem('token'));
    }
  }, [signIn]);

  return (
    <ContainerDiv>
      <HeaderInner>
        <HeaderLanguages>
          <button type="button" onClick={() => changeLanguage('en')}>
            {t('header.en_lang')}
          </button>
          <button type="button" onClick={() => changeLanguage('ru')}>
            {t('header.ru_lang')}
          </button>
        </HeaderLanguages>
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <HeaderContent>
          <div>
            {token ? (
              <LogoutBtn type="button" onClick={logout}>
                {t('header.logout')}
              </LogoutBtn>
            ) : (
              <Link to="/login">{t('header.login')}</Link>
            )}
          </div>
          <HeaderButtons>
            <Search />
            <Like />
            <Cart onClick={setOpenTrue} />
          </HeaderButtons>
        </HeaderContent>
      </HeaderInner>
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <CartDialog closeModal={setOpenFalse} />
      </Modal>
    </ContainerDiv>
  );
}

export default Header;
