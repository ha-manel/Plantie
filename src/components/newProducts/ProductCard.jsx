import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => (
  <div className="flex flex-col overflow-hidden px-10">
    <img
      src={product.picture}
      alt={product.name}
      className="w-48 h-48 sm:w-60 sm:h-60 object-cover self-end -mb-16 z-10"
    />
    <div className="bg-card-100 rounded-2xl">
      <div className="flex flex-col bg-card-200 pt-16 rounded-t-2xl rounded-br-4xl">
        <h3 className="text-card-300 font-inter text-lg sm:text-xl p-4 pt-0 font-semibold">
          {product.name}
        </h3>
      </div>
      <div className="p-4">
        <p className="font-nunito text-sm sm:text-md pb-4">{product.description}</p>
        <div className="flex justify-between items-center pb-2">
          <span className="text-lg lg:text-2xl font-semibold font-inter text-gray-800">
            $
            {product.price}
          </span>
          <button type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 sm:w-9 sm:h-9 text-primary-400"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
);

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
