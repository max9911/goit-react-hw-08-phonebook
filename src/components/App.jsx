import { Suspense, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import Layout from 'layout/layout';

import RegistrationPage from 'pages/register';
import ContactsPage from 'pages/contacts';
import LoginPage from 'pages/login';
import HomePage from 'pages/home';
import PrivateRoute from 'guards/privateGuard';
import { useDispatch, useSelector } from 'react-redux';
import { userRefreshThunk } from 'reduxstore/auth/authThunks';
import { profileselec } from 'reduxstore/auth/selectors';
import PublicRoute from 'guards/publicGuard';

const App = () => {
  const userdata = useSelector(profileselec);
  const dispatch = useDispatch();

  useEffect(() => {
    !userdata && dispatch(userRefreshThunk);
  }, [dispatch, userdata]);

  return (
    <>
      <Suspense fallback={'LOADING.....'}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />

            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route path="/auth" element={<LoginPage />} />
            <Route path="/registr" element={<RegistrationPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
