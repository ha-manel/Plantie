import React from 'react';
import CardDetails from './CardDetails';
import CartItem from './CartItem';

const CartSection = () => (
  <section className="w-full max-w-7xl py-2 mb-16 md:py-10">
    <h2 className="header">Shopping Cart</h2>
    <div className="w-full flex">
      <div className="w-2/3 flex flex-col mt-8">
        <ul className="w-full">
          <CartItem />
          <CartItem />
          <CartItem />
        </ul>
        <p className="self-end text-2xl font-nunito font-bold mt-3 mr-2 border border-secondary-300 text-gray-900 rounded-md p-4">
          Total Price: $125.90
        </p>
      </div>
      <CardDetails />
    </div>
  </section>
);

export default CartSection;
