import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Wishlist from '../../components/wishlist/Wishlist';
import UserContext from '../../contexts/userContext';

const Profile = () => {
  const [user] = useContext(UserContext);

  if (!user.isLoggedIn) {
    return <Navigate to="/signin" replace />;
  }

  return (
    <Wishlist />
  );
};

export default Profile;
