import * as Styled from './App.styled';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import Loader from './Loader/Loader';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('pages/AuthPages/LoginPage/LoginPage'));
const SignUpPage = lazy(() => import('pages/AuthPages/SignUpPage/SignUpPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));

export const App = () => {
  return (
    <Styled.MainDiv>
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </Styled.MainDiv>
  );
};

export default App;
