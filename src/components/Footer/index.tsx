import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';

import {
  FooterDiv,
  ContainerDiv,
  ChangedDiv,
  FooterContent,
  FooterContentNav,
  FooterForm,
  InputForm,
  SubmitBtn,
  IconsDiv,
  FooterBottom,
} from './styled';
import schema from './validation';

import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as ShortArrow } from '../../assets/images/short-arrow-right.svg';
import { ReactComponent as Mail } from '../../assets/images/letter.svg';
import { ReactComponent as Facebook } from '../../assets/images/fb.svg';
import { ReactComponent as Instagram } from '../../assets/images/inst.svg';

type Inputs = {
  email: string;
};

function Footer() {
  const { register, handleSubmit, reset } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  const { t } = useTranslation();
  const email = register('email');

  return (
    <FooterDiv>
      <ContainerDiv>
        <ChangedDiv padTop={80}>
          <Logo />
        </ChangedDiv>
        <FooterContent>
          <FooterContentNav>
            <ChangedDiv width={123}>
              <Link to="/products">{t('footer.nav_item-1')}</Link>
              <Link to="/products">{t('footer.nav_item-2')}</Link>
              <Link to="/">{t('footer.nav_item-3')}</Link>
            </ChangedDiv>
            <ChangedDiv width={193}>
              <Link to="/">{t('footer.nav_item-4')}</Link>
              <Link to="/">{t('footer.nav_item-5')}</Link>
              <Link to="/">{t('footer.nav_item-6')}</Link>
            </ChangedDiv>
          </FooterContentNav>
          <div>
            <FooterForm onSubmit={handleSubmit(onSubmit)}>
              <InputForm
                onChange={email.onChange}
                onBlur={email.onBlur}
                name={email.name}
                ref={email.ref}
                type="email"
                placeholder={t('footer.email_placeholder')}
              />
              <SubmitBtn type="submit">
                <ShortArrow />
              </SubmitBtn>
            </FooterForm>
            <IconsDiv>
              <Mail />
              <Facebook />
              <Instagram />
            </IconsDiv>
          </div>
        </FooterContent>
        <FooterBottom>{t('footer.watermark')}</FooterBottom>
      </ContainerDiv>
    </FooterDiv>
  );
}

export default Footer;
