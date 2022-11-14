import React from 'react';
import { Link } from 'react-router-dom';

const Discount = () => (
  <div
    className="w-11/12 max-w-5xl sm:mx-0 sm:w-2/3 h-48 my-20 bg-no-repeat bg-center bg-cover rounded-xl overflow-hidden"
    style={{ backgroundImage: 'url("./assets/images/img3.png")' }}
  >
    <div className="w-2/3 sm:w-1/2 h-full px-2 py-7 lg:px-16 lg:py-7 xl:px-20 xl:py-9 bg-primary-500/50 rounded-tr-full">
      <div>
        <span className="block pl-1 mb-2 file:font-inter text-2xl font-bold text-lime-100">
          Special Offer:
        </span>
        <span className="block mb-2 file:font-inter text-lime-100 text-3xl lg:text-4xl xl:text-5xl font-bold">
          Get
          <span className="text-primary-100"> 30% </span>
          OFF
        </span>
        <span className="flex items-center pl-1 font-nunito text-lime-200 text-2xl font-bold">
          02 - 30 October
          <Link to="/shop" state="discount">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 ml-2 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </Link>
        </span>
      </div>
    </div>
  </div>
);

export default Discount;
