import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice';
import { contacsR } from './contacts/slice';
import { rootReducer } from './root/slice';

const reducer = {
  auth: authReducer,
  contactInfo: contacsR,
  root: rootReducer,
};

export const store = configureStore({ reducer });
