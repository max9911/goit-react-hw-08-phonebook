import { Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';
import Layout from 'layout/layout';

import RegistrationPage from 'pages/register';
import ContactsPage from 'pages/contacts';
import LoginPage from 'pages/login';

const App = () => {
  return (
    <>
      <Suspense fallback={'LOADING.....'}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/auth" element={<RegistrationPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
