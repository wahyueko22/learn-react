import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export function AuthenticateRoutes() {
  const auth = localStorage.getItem('token');
  console.log("LoginRoutes   sssssss");
  
  return auth ? <Outlet /> : <Navigate to="/" />;
}

export function UnAuthenticateRoutes() {
    const auth = localStorage.getItem('token');
    console.log("masukkkkkkkkkkkkkkkkkkkkk = " + auth);
  
    return !auth ? (
      <Outlet />
    ) : (
      <Navigate to="/admin" />
    );
  }

  // eslint-disable-next-line import/no-anonymous-default-export
  export default { AuthenticateRoutes, UnAuthenticateRoutes };