import { Outlet } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import { ContainerDiv } from './styled';

function Layout() {
  return (
    <>
      <Header />
      <ContainerDiv>
        <Outlet />
      </ContainerDiv>
      <Footer />
    </>
  );
}

export default Layout;
