import Header from 'components/header/header';
import UserMenu from 'components/userMenu/usermenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { isAuthSelec } from 'reduxstore/auth/selectors';

const Layout = () => {
  return (
    <div>
      <Header />

      <Outlet />
    </div>
  );
};

export default Layout;
