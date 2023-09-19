import React from 'react';
import logo from './logo.svg';
import './App.css';
import BeforeLoginLayout from './Components/layouts/HomeLayout';
import {AuthenticateRoutes, UnAuthenticateRoutes} from './Components/layouts/PrivateRoute';
import { Route, useLocation, Navigate } from 'react-router-dom';
import Register from './Components/layouts/Register';
import Login from './Components/layouts/Login';
import AfterLoginLayout from './Components/layouts/AfterLoginLayout';
import LandingPage from './Components/layouts/LandingPage';
//

import { BrowserRouter as Router, Routes } from 'react-router-dom';


function App() {
  return (
    <div >
      <Routes>
        <Route element={<UnAuthenticateRoutes />}>
          <Route path="/" element={<BeforeLoginLayout />}>
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Route>
        <Route element={<AuthenticateRoutes />}>
          <Route path="/admin" element={<AfterLoginLayout />} >
            <Route index element={<LandingPage />} />
            <Route path="test" element={<LandingPage />} />
          </Route>
        </Route> 
      </Routes>
      {/* <Greeting name="John" />*/}
    </div>
  );
}

export default App;
