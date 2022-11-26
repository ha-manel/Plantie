import React from 'react';

const AddToCartBtn = ({ product, counter }) => {
  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    if (
      cartItems.some(
        (item) => item.product.id === product.id && item.quantity === counter,
      )
    ) {
      document.querySelector('.success').classList.add('invisible');
      document.querySelector('.error').classList.remove('invisible');
    } else {
      if (cartItems.some((item) => item.product.id === product.id)) {
        const index = cartItems.findIndex(
          (item) => item.product.id === product.id,
        );
        cartItems[index].quantity = counter;
      } else {
        cartItems.push({ product, quantity: counter });
      }
      document.querySelector('.error').classList.add('invisible');
      document.querySelector('.success').classList.remove('invisible');
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  };

  return (
    <>
      <button
        type="button"
        className="flex button bg-primary-400 hover:bg-primary-300 w-fit"
        onClick={() => addToCart()}
      >
        <span className="hidden md:block">Add to cart</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 md:ml-2 stroke-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </button>
    </>
  );
};

export default AddToCartBtn;
