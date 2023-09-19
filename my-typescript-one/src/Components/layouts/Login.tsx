import React from 'react';
import { Outlet } from 'react-router-dom';
import FormLoginOne from '../../Components/FormLoginOne/FormLoginOne'

const Login = () => {
    return (
      <div>
        <span> new Login  </span>
        <FormLoginOne></FormLoginOne>
      </div>
    );
  }
  
  export default Login ;