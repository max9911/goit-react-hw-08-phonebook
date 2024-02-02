import React from 'react';
import { useSelector } from 'react-redux';
import { profileselec } from 'reduxstore/auth/selectors';

const UserMenu = ({ handlerLogout }) => {
  const user = useSelector(profileselec);

  return (
    <div>
      <p>{user.email}</p>
      <button onClick={handlerLogout}> Logout</button>
    </div>
  );
};

export default UserMenu;
