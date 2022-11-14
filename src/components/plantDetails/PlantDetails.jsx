import React from 'react';
import { useLocation } from 'react-router-dom';

const PlantDetails = () => {
  const location = useLocation();
  const { product } = location.state;
  return (
    <section className="w-9/12 max-w-7xl py-2 mb-16 md:py-10 flex flex-col md:flex-row justify-center items-center">
      <div className="w-full md:w-1/2 md:mb-0">
        <img src={product.picture} alt={product.name} />
      </div>
      <div className="w-full flex flex-col justify-center md:w-1/2 mt-10">
        <h2 className="header">{product.name}</h2>
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
          {product.discount > 0 ? (
            <p>
              <span className="text-2xl md:text-3xl font-semibold font-inter text-gray-800 line-through">
                $
                {product.price}
              </span>
              <span className="text-2xl md:text-3xl font-semibold font-inter text-gray-800 ml-4">
                $
                {(product.price - (product.price * product.discount) / 100).toFixed(2)}
              </span>
            </p>
          ) : (
            <span className="text-2xl md:text-3xl font-semibold font-inter text-gray-800">
              $
              {product.price}
            </span>
          )}
          <button
            type="button"
            className="flex px-3 py-2 bg-primary-400 hover:bg-primary-300 transition ease-out duration-300 w-fit rounded-lg text-white font-semibold"
          >
            Add to cart
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-2 stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlantDetails;
