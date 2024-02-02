import { apiAuth } from './api';

export const userLogin = async userData => {
  return await apiAuth.post('users/login', userData);
};

export const userRegister = async newUser => {
  return await apiAuth.post('users/signup', newUser);
};

export const userLogout = async token => {
  return await apiAuth.post('users/logout', {
    headers: {
      Authorization: `${token}`,
    },
  });
};

export const userRefresh = async token => {
  return await apiAuth('users/current', token);
};
