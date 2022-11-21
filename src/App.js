import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import Contact from './pages/contact/Contact';
import PlantDetails from './components/plantDetails/PlantDetails';
import Cart from './pages/cart/Cart';
import Profile from './pages/profile/Profile';
import Signup from './pages/signup/Signup';

const App = () => {
  const [user, setUser] = useState({
    isLoggedIn: false,
    user: {},
  });

  const handleLogin = (data) => {
    setUser({
      isLoggedIn: true,
      user: data.user,
    });
  };

  const handleLogout = () => {
    setUser({
      isLoggedIn: false,
      user: {},
    });
  };

  const loginStatus = () => {
    axios
      .get('http://localhost:3000/api/v1/logged_in', { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in) {
          console.log(response.data);
          handleLogin(response.data);
        } else {
          handleLogout();
        }
      })
      .catch((error) => console.log('api errors:', error));
  };

  useEffect(() => {
    loginStatus();
  }, []);

  const fetchPlants = async () => {
    const response = await axios.get('http://localhost:3000/api/v1/plants', { withCredentials: true });
    return response.data;
  };

  const { data, status } = useQuery({ queryKey: ['plants'], queryFn: fetchPlants });

  return (
    <>
      <header>
        <Navbar user={user} handleLogout={handleLogout} />
      </header>
      <main className="w-full flex flex-col items-center pb-36">
        <Routes>
          <Route path="/" element={<Home data={data} status={status} />} />
          <Route path="/shop" element={<Shop data={data} status={status} />} />
          <Route path="/plant" element={<PlantDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile user={user} handleLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup handleLogin={handleLogin} user={user} />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
