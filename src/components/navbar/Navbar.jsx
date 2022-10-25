import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="w-screen px-10 pt-2 pb-4 bg-secondary-200 drop-shadow">
    <nav className="flex justify-between items-center">
      <div>
        <img src="./assets/images/logo.png" alt="logo" className="w-40" />
      </div>
      <ul className="flex pt-2 font-inter font-medium text-lg">
        <li className="mx-4">
          <NavLink to="/home">
            <span className="transition ease-out duration-300 hover:text-primary-300">
              Home
            </span>
          </NavLink>
        </li>
        <li className="mx-4">
          <NavLink to="/shop">
            <span className="transition ease-out duration-300 hover:text-primary-300">
              Shop
            </span>
          </NavLink>
        </li>
        <li className="mx-4">
          <NavLink to="/contact">
            <span className="transition ease-out duration-300 hover:text-primary-300">
              Contact
            </span>
          </NavLink>
        </li>
      </ul>
      <ul className="flex">
        <li className="mr-3">
          <NavLink to="/search">
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
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </NavLink>
        </li>
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
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile">
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
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
