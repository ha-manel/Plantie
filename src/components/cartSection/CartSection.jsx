import React, { useEffect, useState } from 'react';
import CardDetails from './CardDetails';
import CartItem from './CartItem';

const CartSection = () => {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotal = (items) => {
    if (items.length > 1) {
      const total = items.reduce(
        (x, y) => x.product.discount * x.quantity + y.product.discount * y.quantity,
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
    return <div>You don&apos;t have any items yet</div>;
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
