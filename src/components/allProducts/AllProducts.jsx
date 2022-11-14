import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

const AllProducts = ({ title, products }) => (
  <section className="w-full flex flex-col items-center bg-white py-12">
    <h2 className="flex w-2/3 header capitalize">
      All
      <p className="capitalize mx-2">{title}</p>
      Products
    </h2>
    <div className="flex flex-wrap justify-center mt-10">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </section>
);

AllProducts.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default AllProducts;
