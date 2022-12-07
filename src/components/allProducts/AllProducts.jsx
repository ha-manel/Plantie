import React from 'react';
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

export default AllProducts;
