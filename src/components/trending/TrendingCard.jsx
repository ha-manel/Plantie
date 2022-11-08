import React from 'react';
import PropTypes from 'prop-types';

const TrendingCard = ({ product }) => (
  <div className="flex-col md:flex-row flex items-center my-8 sm:my-14 md:my-8 bg-card-100 rounded-2xl mx-5 py-5">
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
      <p className="font-nunito text-md my-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto labore, impedit suscipit, excepturi voluptate, eveniet sint quas in hic consectetur ipsum minima iure placeat praesentium dignissimos ratione maiores quaerat fuga.</p>
      <div className="flex justify-between items-center pb-2 mt-8">
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
);

TrendingCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default TrendingCard;
