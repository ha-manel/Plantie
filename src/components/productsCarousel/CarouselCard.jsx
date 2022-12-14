import React from 'react';
import { Link } from 'react-router-dom';

const CarouselCard = ({ product, height }) => (
  <div className="flex flex-col overflow-hidden px-10">
    <img
      src={product.picture}
      alt={product.name}
      className="w-48 h-48 sm:w-60 sm:h-60 object-cover self-end -mb-16 z-10 -mr-10"
    />
    <div className="bg-card-100 rounded-2xl">
      <div className="flex flex-col bg-card-200 pt-16 rounded-t-2xl rounded-br-4xl">
        <h3 className="text-card-300 font-inter text-lg sm:text-xl p-4 pt-0 font-semibold">
          {product.name}
        </h3>
      </div>
      <div className={`${height} md:${height} p-4 relative`}>
        <p className="font-nunito text-sm sm:text-md pb-4">
          {product.description}
        </p>
        <div className="flex justify-between items-center pb-2 absolute bottom-2 w-11/12">
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
          <Link to="/plant" state={{ product }}>
            <button type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 sm:w-8 sm:h-8 stroke-primary-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default CarouselCard;
