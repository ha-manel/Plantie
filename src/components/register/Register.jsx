import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import UserContext from '../../contexts/userContext';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState([]);
  const [, setUser] = useContext(UserContext);

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };
  const updatePasswordConfirmation = (e) => {
    setPasswordConfirmation(e.target.value);
  };

  const signupRequest = async () => {
    const user = {
      username,
      email,
      password,
      password_confirmation: passwordConfirmation,
    };
    const response = await axios.post(
      'https://plantie.onrender.com/api/v1/users',
      { user },
      { withCredentials: true },
    );
    return response.data;
  };

  const { fetchStatus, refetch } = useQuery({
    queryKey: ['signup'],
    queryFn: signupRequest,
    onSuccess: (data) => {
      if (data.logged_in) {
        setUser({
          isLoggedIn: true,
          user: data.user,
        });
      }
    },
    onError: (data) => {
      setError(data.response.data.errors);
    },
    retry: false,
    refetchOnWindowFocus: false,
    enabled: false,
  });

  const handleSignup = (event) => {
    event.preventDefault();
    refetch();
  };

  return (
    <div className="w-full flex justify-center md:mt-7 mb-4">
      <div data-aos="fade-right" className="hidden md:flex w-2/5 justify-center bg-secondary-100 rounded-r-full">
        <img
          src="./assets/images/signup-img.png"
          alt="signup"
          className="w-3/5 object-contain"
        />
      </div>
      <div data-aos="fade-left" className="w-full md:w-3/5 flex flex-col items-center py-10 px-16 md:px-24">
        <h1 className="header">Sign up</h1>
        <form
          onSubmit={handleSignup}
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
            <label className="label text-md" htmlFor="email">
              <span className="label-text">Email:</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="john@example.com"
              value={email}
              onChange={updateEmail}
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
          <div className="form-control w-full max-w-xs mt-3 font-inter">
            <label className="label text-md" htmlFor="passwordConfirmation">
              <span className="label-text">Password confirmation:</span>
            </label>
            <input
              type="password"
              id="passwordConfirmation"
              placeholder="****"
              value={passwordConfirmation}
              onChange={updatePasswordConfirmation}
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
              'Sign up'
            )}
          </button>
          <div className="font-inter text-md font-semibold mt-6">
            or
            <Link
              to="/profile"
              className="ml-2 underline underline-offset-2 hover:text-primary-300 transition ease-out duration-300"
            >
              log in
            </Link>
          </div>
        </form>
        {error.map((err) => (
          <p key={err} className="mt-6 text-red-600 font-inter font-semibold">
            {err}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Register;
