import './App.css';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import UserContext from './contexts/userContext';
import PlantsContext from './contexts/plantsContext';
import WishlistContext from './contexts/wishlistContext';
import Layout from './config/layout/Layout';

const App = () => {
  AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  const [wishlist, setWishlist] = useState([]);
  const [user, setUser] = useState({
    isLoggedIn: false,
    user: {},
  });

  const loginStatus = async () => {
    const response = await axios.get('https://plantie.onrender.com/api/v1/logged_in', {
      withCredentials: true,
    });
    return response.data;
  };

  useQuery({
    queryKey: ['loginStatus'],
    queryFn: loginStatus,
    onSuccess: (data) => {
      if (data.logged_in) {
        setUser({
          isLoggedIn: true,
          user: data.user,
        });
        setWishlist(data.wishlist);
      }
    },
    retry: false,
    refetchOnWindowFocus: false,
  });

  const fetchPlants = async () => {
    const response = await axios.get('https://plantie.onrender.com/api/v1/plants', {
      withCredentials: true,
    });
    return response.data;
  };

  const plantsData = useQuery({
    queryKey: ['plants'],
    queryFn: fetchPlants,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <UserContext.Provider value={[user, setUser]}>
        <PlantsContext.Provider value={plantsData}>
          <WishlistContext.Provider value={[wishlist, setWishlist]}>
            <Layout />
          </WishlistContext.Provider>
        </PlantsContext.Provider>
      </UserContext.Provider>
    </>
  );
};

export default App;
