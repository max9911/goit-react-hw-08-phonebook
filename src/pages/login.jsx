import SignIn from 'components/auth/singin';
import React from 'react';
import { useDispatch } from 'react-redux';
import { singInThunk } from 'reduxstore/auth/authThunks';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const input = {
      email: data.get('email'),
      password: data.get('password'),
    };
    dispatch(singInThunk(input));
  };
  return (
    <>
      <SignIn handleSubmit={handleSubmit} />
    </>
  );
};
export default LoginPage;
