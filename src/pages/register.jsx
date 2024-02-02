import SingUp from 'components/auth/regist';
import React from 'react';
import { useDispatch } from 'react-redux';
import { singUpThunk } from 'reduxstore/auth/authThunks';

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const input = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    };

    dispatch(singUpThunk(input));
  };
  return (
    <>
      <SingUp handleSubmit={handleSubmit} />
    </>
  );
};

export default RegistrationPage;
