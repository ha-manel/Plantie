import React from 'react';
import PropTypes from 'prop-types';
import TrendingCard from './TrendingCard';

const Trending = ({ products }) => (
  <section className="w-full flex flex-col items-center bg-white py-24">
    <h2 className="w-2/3 header">Trending Products</h2>
    <div className="flex flex-wrap justify-center mt-10">
      {products.map((product) => (
        <TrendingCard key={product.name} product={product} />
      ))}
    </div>
  </section>
);

Trending.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Trending;
