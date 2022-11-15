import React, { useState } from 'react';

const CartItem = () => {
  const [counter, setCounter] = useState('0');

  const updateCounter = (e) => {
    setCounter(e.target.value);
  };

  return (
    <li className="flex justify-between items-center bg-secondary-100 rounded-2xl mb-3">
      <div className="flex w-1/2 items-center">
        <img
          src="/assets/images/plant1.webp"
          alt="plant"
          className="w-40 object-cover -mt-6"
        />
        <h3 className="font-inter font-medium text-xl text-gray-700">
          Aloe Vera
        </h3>
      </div>
      <div className="flex w-1/2 justify-around items-center">
        <input
          type="number"
          className="w-16 font-inter text-md font-medium pl-3 py-1 rounded outline-gray-500 border border-secondary-200"
          value={counter}
          onChange={updateCounter}
        />
        <p className="font-nunito text-lg font-semibold">$25.30</p>
        <button type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </li>
  );
};

export default CartItem;
