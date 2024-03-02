import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { isAuthSelector } from '../redux/auth/authSelectors';

export default function PrivateRoutes({ children }) {
  const location = useLocation();
  const isAuth = useSelector(isAuthSelector);

  return isAuth ? children : <Navigate to="/login" location={location} />;
}
