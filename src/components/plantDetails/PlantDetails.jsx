import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import UserContext from '../../contexts/userContext';
import WishlistContext from '../../contexts/wishlistContext';
import AddToCartBtn from '../addToCartBtn/AddToCartBtn';

const PlantDetails = () => {
  const location = useLocation();
  const { product } = location.state;

  const [counter, setCounter] = useState('1');
  const [wishlisted, setWishlisted] = useState(false);

  const [user] = useContext(UserContext);
  const [wishlist, setWishlist] = useContext(WishlistContext);

  if (wishlist.some((item) => item.id === product.id) && !wishlisted) {
    setWishlisted(true);
  }

  const updateCounter = (e) => {
    setCounter(e.target.value);
  };

  const addToWishlist = () => {
    if (!wishlisted) {
      axios
        .post(
          'https://plantie.onrender.com/api/v1/wishlist',
          { user_id: user.user.id, plant_id: product.id },
          { withCredentials: true },
        )
        .then(() => {
          setWishlisted(true);
          setWishlist((state) => [...state, product]);
        });
    }
  };

  return (
    <section className="w-9/12 max-w-7xl py-2 mb-16 md:py-10 flex flex-col md:flex-row justify-center items-center">
      <div data-aos="fade-right" className="w-full md:w-1/2 md:mb-0 md:mr-8">
        <img src={product.picture} alt={product.name} />
      </div>
      <div data-aos="fade-left" className="w-full h-full flex flex-col justify-center md:w-1/2 mt-10">
        <h2 className="header flex justify-between items-center">
          {product.name}
          {user.isLoggedIn ? (
            <button type="button" onClick={() => addToWishlist()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className={
                  wishlisted
                    ? 'w-8 h-8 cursor-pointer fill-red-600 stroke-red-600 mt-1'
                    : 'w-8 h-8 cursor-pointer stroke-red-600 mt-1'
                }
                id="heart-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>
          ) : (
            <Link to="/profile">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className={
                  wishlisted
                    ? 'w-8 h-8 cursor-pointer fill-red-600 stroke-red-600 mt-1'
                    : 'w-8 h-8 cursor-pointer stroke-red-600 mt-1'
                }
                id="heart-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </Link>
          )}
        </h2>
        <p className="my-4 font-inter text-lg text-gray-700">
          {product.description}
        </p>
        <ul className="flex justify-around capitalize my-10">
          <li className="flex flex-col items-center font-nunito text-lg font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="w-6 h-6 mb-2 fill-primary-500"
            >
              <path d="M192 496c97.2 0 176-78.8 176-176c0-74.1-102.3-230.6-150.9-300.7c-12.3-17.7-37.8-17.7-50.1 0C118.3 89.4 16 245.9 16 320c0 97.2 78.8 176 176 176zM112 320c0 44.2 35.8 80 80 80c8.8 0 16 7.2 16 16s-7.2 16-16 16c-61.9 0-112-50.1-112-112c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
            </svg>
            <span>{product.water}</span>
          </li>
          <li className="flex flex-col items-center font-nunito text-lg font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-6 h-6 mb-2 fill-primary-500"
            >
              <path d="M344 0H488c13.3 0 24 10.7 24 24V168c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87L327 41c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM184 496H40c-13.3 0-24-10.7-24-24V328c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8z" />
            </svg>
            <span>
              {product.size}
              cm
            </span>
          </li>
          <li className="flex flex-col items-center font-nunito text-lg font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="w-6 h-6 mb-2 fill-primary-500"
            >
              <path d="M384 312.7c-55.1 136.7-187.1 54-187.1 54-40.5 81.8-107.4 134.4-184.6 134.7-16.1 0-16.6-24.4 0-24.4 64.4-.3 120.5-42.7 157.2-110.1-41.1 15.9-118.6 27.9-161.6-82.2 109-44.9 159.1 11.2 178.3 45.5 9.9-24.4 17-50.9 21.6-79.7 0 0-139.7 21.9-149.5-98.1 119.1-47.9 152.6 76.7 152.6 76.7 1.6-16.7 3.3-52.6 3.3-53.4 0 0-106.3-73.7-38.1-165.2 124.6 43 61.4 162.4 61.4 162.4.5 1.6.5 23.8 0 33.4 0 0 45.2-89 136.4-57.5-4.2 134-141.9 106.4-141.9 106.4-4.4 27.4-11.2 53.4-20 77.5 0 0 83-91.8 172-20z" />
            </svg>
            <span>{product.habitat}</span>
          </li>
        </ul>
        <div className="flex justify-between items-center pb-2 mt-10">
          {product.discount === product.price ? (
            <span className="text-lg lg:text-2xl font-semibold font-inter text-gray-800">
              $
              {product.price}
            </span>
          ) : (
            <p>
              <span className="text-lg lg:text-2xl font-semibold font-inter text-gray-800 line-through">
                $
                {product.price}
              </span>
              <span className="text-lg lg:text-2xl font-semibold font-inter text-gray-800 ml-4">
                $
                {product.discount}
              </span>
            </p>
          )}
          <div className="flex">
            <input
              type="number"
              min="1"
              className="w-16 font-inter text-md font-medium pl-3 py-1 rounded outline-primary-400 border border-primary-500 mr-4"
              value={counter}
              onChange={updateCounter}
            />
            <AddToCartBtn product={product} counter={counter} />
          </div>
        </div>
        <p className="success invisible mt-6 px-6 py-3 bg-primary-300 text-white font-inter font-semibold text-lg rounded-xl text-center">
          Product added to cart successfully.
        </p>
        <p className="error invisible px-6 py-3 bg-red-600 text-white font-inter font-semibold text-lg rounded-xl text-center">
          This product is already added to your cart.
        </p>
      </div>
    </section>
  );
};

export default PlantDetails;
