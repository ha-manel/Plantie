import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import axios from 'axios';
import UserContext from '../../contexts/userContext';

const Navbar = () => {
  const [user, setUser] = useContext(UserContext);
  const location = useLocation();

  const logout = () => {
    axios.delete('https://plantie.onrender.com/api/v1/logout');
    setUser({
      isLoggedIn: false,
      user: {},
    });
  };

  return (
    <div className="w-screen px-10 pt-2 pb-4 bg-secondary-200">
      <nav className="flex justify-between items-center">
        <div>
          <img
            src="./assets/images/logo.png"
            alt="logo"
            className="hidden sm:block w-40"
          />
        </div>
        <ul className="flex pt-2 font-inter font-medium text-lg">
          <li className="mx-4">
            <NavLink to="/">
              <span
                className={
                  location.pathname === '/'
                    ? 'transition ease-out duration-300 hover:text-primary-300 underline underline-offset-8'
                    : 'transition ease-out duration-300 hover:text-primary-300'
                }
              >
                Home
              </span>
            </NavLink>
          </li>
          <li className="mx-4">
            <NavLink to="/shop">
              <span
                className={
                  location.pathname === '/shop'
                    ? 'transition ease-out duration-300 hover:text-primary-300 underline underline-offset-8'
                    : 'transition ease-out duration-300 hover:text-primary-300'
                }
              >
                Shop
              </span>
            </NavLink>
          </li>
          <li className="mx-4">
            <NavLink to="/contact">
              <span
                className={
                  location.pathname === '/contact'
                    ? 'transition ease-out duration-300 hover:text-primary-300 underline underline-offset-8'
                    : 'transition ease-out duration-300 hover:text-primary-300'
                }
              >
                Contact
              </span>
            </NavLink>
          </li>
        </ul>
        <ul className="flex">
          <li className="mr-3">
            <NavLink to="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 transition ease-out duration-300 hover:text-primary-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </NavLink>
          </li>
          <li className="dropdown dropdown-hover dropdown-bottom dropdown-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              tabIndex={0}
              className="peer cursor-pointer w-10 h-6 transition ease-out duration-300 hover:text-primary-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            <ul
              className="dropdown-content menu p-3 shadow rounded-box w-52 bg-base-100"
              tabIndex={0}
            >
              {user.isLoggedIn ? (
                <>
                  <li className="hover:bg-secondary-100 active:bg-secondary-200 p-2 rounded-md">
                    <NavLink to="/profile">
                      <span className="w-full text-center font-nunito text-lg font-semibold">
                        My wishlist
                      </span>
                    </NavLink>
                  </li>
                  <li className="hover:bg-secondary-100 active:bg-secondary-200 p-2 rounded-md mt-1">
                    <button
                      type="button"
                      className="w-full flex justify-center font-nunito text-lg font-semibold"
                      onClick={() => logout()}
                    >
                      Log out
                    </button>
                  </li>
                </>
              ) : (
                <li className="hover:bg-secondary-100 active:bg-secondary-200 p-2 rounded-md">
                  <NavLink to="/signin">
                    <span className="w-full text-center font-nunito text-lg font-semibold">
                      Log in
                    </span>
                  </NavLink>
                </li>
              )}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
