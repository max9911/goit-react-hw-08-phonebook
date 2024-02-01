import Header from 'components/header/header';
import UserMenu from 'components/userMenu/usermenu';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Header />
      <UserMenu />
      <Outlet />
    </div>
  );
};

export default Layout;
