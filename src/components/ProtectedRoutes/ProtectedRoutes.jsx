import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoutes = () => {
  const isLoggedIn = localStorage.getItem('user') !== null;

  if (!isLoggedIn) {
    return <Navigate to='/login' />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;