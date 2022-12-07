import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Login from '../../components/login/Login';
import UserContext from '../../contexts/userContext';

const Signin = () => {
  const [user] = useContext(UserContext);

  if (user.isLoggedIn) {
    return <Navigate to="/profile" replace />;
  }

  return <Login />;
};

export default Signin;
