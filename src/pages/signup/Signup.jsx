/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';

const Signup = ({ user, handleLogin }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      username,
      email,
      password,
      password_confirmation: passwordConfirmation,
    };
    axios
      .post(
        'http://localhost:3000/api/v1/users',
        { user },
        { withCredentials: true },
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.status === 'created') {
          handleLogin(response.data);
        }
      })
      .catch((error) => console.log('api errors:', error));
  };

  if (user.isLoggedIn) {
    return <Navigate to="/profile" replace />;
  }

  return (
    <div className="w-full flex justify-center mt-7 mb-4">
      <div className="hidden md:flex w-2/5 justify-center bg-secondary-100 rounded-r-full">
        <img
          src="./assets/images/signup-img.png"
          alt="signup"
          className="w-3/5 object-contain"
        />
      </div>
      <div className="w-3/5 flex flex-col items-center py-10 px-24">
        <h1 className="header">Sign up</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center w-3/5 mt-6"
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
              type="text"
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
              type="text"
              id="passwordConfirmation"
              placeholder="****"
              value={passwordConfirmation}
              onChange={updatePasswordConfirmation}
              className="input rounded-md border border-secondary-200 outline-primary-200 w-full max-w-xs mt-1"
            />
          </div>
          <button
            type="submit"
            className="w-2/3 mt-6 py-3 transition ease-out duration-300 rounded-lg bg-primary-300 hover:bg-primary-200 text-white font-semibold text-md font-inter"
          >
            Sign up
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
      </div>
    </div>
  );
};

export default Signup;
