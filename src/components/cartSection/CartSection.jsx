import React, { useEffect, useState } from 'react';
import CardDetails from './CardDetails';
import CartItem from './CartItem';

const CartSection = () => {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotal = (items) => {
    if (items.length > 1) {
      const total = items.reduce(
        (sum, currentItem) => sum + currentItem.product.discount * currentItem.quantity,
        0,
      );
      setTotalPrice(total);
    } else if (items.length === 1) {
      const total = items[0].product.discount * items[0].quantity;
      setTotalPrice(total.toFixed(2));
    }
  };

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setItems(cartItems);
    calculateTotal(cartItems);
  }, []);

  if (items.length < 1) {
    return (
      <div className="flex items-center mt-24 text-2xl font-inter font-bold text-gray-600">
        You don&apos;t have any items yet
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 ml-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
          />
        </svg>
      </div>
    );
  }

  return (
    <section className="w-full max-w-7xl py-2 mb-16 mt-10 md:mt-0 md:py-10 p-8">
      <h2 className="header">Shopping Cart</h2>
      <div className="w-full flex flex-col lg:flex-row items-center">
        <div className="w-full md:w-2/3 flex flex-col mt-8">
          <ul className="w-full">
            {items.map((item) => (
              <CartItem
                key={item.product.id}
                item={item.product}
                setItems={setItems}
                quantity={item.quantity}
                items={items}
                calculateTotal={calculateTotal}
              />
            ))}
          </ul>
          <p className="self-end text-lg md:text-2xl font-nunito font-bold mt-3 mr-2 border border-secondary-300 text-gray-900 rounded-md p-4">
            Total Price: $
            {totalPrice}
          </p>
        </div>
        <CardDetails />
      </div>
    </section>
  );
};

export default CartSection;
