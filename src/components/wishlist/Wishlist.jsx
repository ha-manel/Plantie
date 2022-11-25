import React, { useContext } from 'react';
import UserContext from '../../contexts/userContext';
import WishlistContext from '../../contexts/wishlistContext';
import WishlistItem from './WishlistItem';

const Wishlist = () => {
  const [user] = useContext(UserContext);
  const [wishlist] = useContext(WishlistContext);

  return (
    <div className="w-full flex flex-col px-4 sm:px-10 lg:px-60 py-10">
      <h1 className="header">
        <span>Hello </span>
        <span>{user.user.username}</span>
        <span>,</span>
      </h1>
      <h2
        className={
          wishlist.length > 0
            ? 'font-nunito text-xl md:text-2xl font-semibold text-gray-600 mb-2'
            : 'mt-8 text-center text-xl md:text-2xl font-inter font-bold text-gray-600'
        }
      >
        {wishlist.length > 0
          ? 'Here is your wishlist'
          : 'Your wishlist is empty!'}
      </h2>
      <ul className="w-full md:w-4/5 mt-8 self-center">
        {wishlist.map((item) => (
          <WishlistItem key={item.id} item={item} />
        ))}
      </ul>
      <p className="success invisible mt-6 px-6 py-3 bg-primary-300 text-white font-inter font-semibold text-lg rounded-xl text-center">
        Product added to cart successfully.
      </p>
      <p className="error invisible px-6 py-3 bg-red-600 text-white font-inter font-semibold text-lg rounded-xl text-center">
        This product is already added to your cart.
      </p>
    </div>
  );
};

export default Wishlist;
