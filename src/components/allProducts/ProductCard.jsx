import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <div data-aos="fade-right" className="flex-col md:flex-row flex items-center my-10 sm:my-16 md:my-10 bg-card-100 rounded-2xl mx-5 py-5">
    <div className="relative w-48 h-48">
      <img
        src={product.picture}
        alt={product.name}
        className="w-48 h-48 sm:w-80 sm:h-80 object-cover absolute bottom-0 left-0"
      />
    </div>
    <div className="w-96 pr-10 pl-6">
      <h3 className="text-card-300 font-inter text-lg sm:text-2xl pt-0 font-semibold">
        {product.name}
      </h3>
      <p className="font-nunito text-md my-4">{product.description}</p>
      <div className="flex justify-between items-center pb-2 mt-8">
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
              className="w-6 h-6 sm:w-9 sm:h-9 stroke-primary-400"
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
);

export default ProductCard;
