import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import UserContext from '../../contexts/userContext';
import WishlistContext from '../../contexts/wishlistContext';

const Login = () => {
  const [, setUser] = useContext(UserContext);
  const [, setWishlist] = useContext(WishlistContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const loginRequest = async () => {
    const user = {
      username,
      password,
    };
    const response = await axios.post(
      'http://localhost:3000/api/v1/login',
      { user },
      { withCredentials: true },
    );
    return response.data;
  };

  const { fetchStatus, refetch } = useQuery({
    queryKey: ['login'],
    queryFn: loginRequest,
    onSuccess: (data) => {
      if (data.logged_in) {
        setUser({
          isLoggedIn: true,
          user: data.user,
        });
        setWishlist(data.wishlist);
      }
    },
    onError: (data) => {
      setError(data.response.data.errors);
    },
    retry: false,
    refetchOnWindowFocus: false,
    enabled: false,
  });

  const handleLogin = (event) => {
    event.preventDefault();
    refetch();
  };

  return (
    <div className="w-full flex justify-center md:mt-7">
      <div className="w-full md:w-3/5 flex flex-col items-center py-10 px-24">
        <h1 className="header">Log In</h1>
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center w-full lg:w-3/5 mt-6"
        >
          <div className="form-control w-full max-w-xs font-inter">
            <label className="label text-md" htmlFor="name">
              <span className="label-text">Username:</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="John"
              value={username}
              onChange={updateUsername}
              className="input rounded-md border border-secondary-200 outline-primary-200 w-full max-w-xs mt-1"
            />
          </div>
          <div className="form-control w-full max-w-xs mt-3 font-inter">
            <label className="label text-md" htmlFor="password">
              <span className="label-text">Password:</span>
            </label>
            <input
              type="password"
              id="password"
              placeholder="****"
              value={password}
              onChange={updatePassword}
              className="input rounded-md border border-secondary-200 outline-primary-200 w-full max-w-xs mt-1"
            />
          </div>
          <button
            type="submit"
            className={
              fetchStatus === 'fetching'
                ? 'w-2/3 max-w-xs mt-6 py-3 rounded-lg bg-secondary-200 text-secondary-400 font-semibold text-md font-inter'
                : 'w-2/3 max-w-xs mt-6 py-3 transition ease-out duration-300 rounded-lg bg-primary-300 hover:bg-primary-200 text-white font-semibold text-md font-inter'
            }
          >
            {fetchStatus === 'fetching' ? (
              <i className="fa-solid fa-spinner fa-spin" />
            ) : (
              'Log in'
            )}
          </button>
          <div className="font-inter text-md font-semibold mt-6">
            or
            <Link
              to="/signup"
              className="ml-2 underline underline-offset-2 hover:text-primary-300 transition ease-out duration-300"
            >
              sign up
            </Link>
          </div>
        </form>
        <p className="mt-6 text-red-600 font-inter font-semibold">{error}</p>
      </div>
      <div className="hidden md:flex w-2/5 justify-center bg-secondary-100 rounded-l-full">
        <img
          src="./assets/images/login-img.png"
          alt="login"
          className="w-3/5 object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
