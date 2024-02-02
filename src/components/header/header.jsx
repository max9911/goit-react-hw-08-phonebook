import Breadcrumbs from '@mui/material/Breadcrumbs';
import UserMenu from 'components/userMenu/usermenu';
import { useDispatch, useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { logOutThunk } from 'reduxstore/auth/authThunks';
import { isAuthSelec } from 'reduxstore/auth/selectors';

const Header = () => {
  const isAuth = useSelector(isAuthSelec);
  const dispatch = useDispatch();

  const handlerLogout = () => {
    console.log(isAuth);
    dispatch(logOutThunk(isAuth));
  };

  return (
    <>
      <div role="presentation" display="flex">
        <Breadcrumbs aria-label="breadcrumb">
          <NavLink to={'/'} underline="hover" color="inherit">
            HOME
          </NavLink>
          <NavLink to={'/contacts'} underline="hover" color="inherit">
            CONTACTS
          </NavLink>
          {!isAuth && (
            <NavLink to={'/login'} underline="hover" color="inherit">
              SING IN / SING UP
            </NavLink>
          )}
        </Breadcrumbs>
      </div>
      {isAuth && <UserMenu handlerLogout={handlerLogout} />}
    </>
  );
};

export default Header;
