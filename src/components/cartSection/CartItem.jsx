import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CartItem = ({
  item,
  quantity,
  setItems,
  items,
  calculateTotal,
}) => {
  const [counter, setCounter] = useState(quantity);

  const updateCounter = (e) => {
    setCounter(e.target.value);
    const newState = items.map((obj) => {
      if (obj.product.id === item.id) {
        return { ...obj, quantity: e.target.value };
      }
      return obj;
    });

    setItems(newState);
    localStorage.setItem('cart', JSON.stringify(newState));

    calculateTotal(newState);
  };

  const removeItem = () => {
    const newState = items.filter((obj) => obj.product.id !== item.id);
    setItems(newState);
    localStorage.setItem('cart', JSON.stringify(newState));
    calculateTotal(newState);
  };

  return (
    <li className="flex justify-between items-center bg-secondary-100 rounded-2xl mb-3">
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
        <input
          type="number"
          min="1"
          className="w-14 md:w-16 font-inter md:text-md font-medium pl-3 py-1 rounded outline-gray-500 border border-secondary-200"
          value={counter}
          onChange={updateCounter}
        />
        <p className="font-nunito text-md md:text-lg font-semibold">
          $
          {item.discount}
        </p>
        <button type="button" onClick={() => removeItem()}>
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

CartItem.propTypes = {
  quantity: PropTypes.string.isRequired,
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    discount: PropTypes.string.isRequired,
  }).isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      quantity: PropTypes.string.isRequired,
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        discount: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
  setItems: PropTypes.func.isRequired,
  calculateTotal: PropTypes.func.isRequired,
};

export default CartItem;
