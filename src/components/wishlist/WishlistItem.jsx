import React, { useContext, useState } from 'react';
import axios from 'axios';
import AddToCartBtn from '../addToCartBtn/AddToCartBtn';
import WishlistContext from '../../contexts/wishlistContext';
import UserContext from '../../contexts/userContext';

const WishlistItem = ({ item }) => {
  const [counter, setCounter] = useState('1');
  const [wishlist, setWishlist] = useContext(WishlistContext);
  const [user] = useContext(UserContext);

  const updateCounter = (e) => {
    setCounter(e.target.value);
  };

  const deleteItem = (id) => {
    axios
      .delete(`https://plantie.onrender.com/api/v1/wishlist/${user.user.id}/${id}`, {
        withCredentials: true,
      })
      .then(() => {
        const newState = wishlist.filter((product) => product.id !== id);
        setWishlist(newState);
      });
  };
  return (
    <li
      data-aos="fade-right"
      key={item.id}
      className="w-full flex justify-between items-center bg-secondary-100 rounded-2xl mb-3"
    >
      <div className="flex w-1/2 items-center">
        <img
          src={item.picture}
          alt="plant"
          className="w-28 h-28 md:w-40 md:h-40 object-cover"
        />
        <h3 className="font-inter font-medium text-md md:text-xl text-gray-700">
          {item.name}
        </h3>
      </div>
      <div className="flex w-1/2 justify-around items-center">
        <p className="font-nunito text-md md:text-lg font-semibold">
          $
          {item.discount}
        </p>
        <input
          type="number"
          min="1"
          className="w-14 md:w-16 font-inter md:text-md font-medium pl-3 py-1 rounded outline-gray-500 border border-secondary-200"
          value={counter}
          onChange={updateCounter}
        />
        <AddToCartBtn product={item} counter={counter} />
        <button type="button" onClick={() => deleteItem(item.id)}>
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

export default WishlistItem;
