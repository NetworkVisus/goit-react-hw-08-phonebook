import * as Styled from './App.styled';
import { Routes, Route } from 'react-router-dom';

import HomePage from 'pages/HomePage/HomePage';
import LoginPage from 'pages/AuthPages/LoginPage/LoginPage';
import SignUpPage from 'pages/AuthPages/SignUpPage/SignUpPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';

import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

export const App = () => {
  return (
    <Styled.MainDiv>
      <Routes>
        <Route index element={<HomePage />} />
        <Route
          path="/login"
          element={
            <PublicRoutes>
              <LoginPage />
            </PublicRoutes>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoutes>
              <SignUpPage />
            </PublicRoutes>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoutes>
              <ContactsPage />
            </PrivateRoutes>
          }
        />
      </Routes>
    </Styled.MainDiv>
  );
};

export default App;
