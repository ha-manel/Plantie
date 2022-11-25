import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../../contexts/userContext';
import Register from '../../components/register/Register';

const Signup = () => {
  const [user] = useContext(UserContext);

  if (user.isLoggedIn) {
    return <Navigate to="/profile" replace />;
  }

  return (
    <Register />
  );
};

export default Signup;
