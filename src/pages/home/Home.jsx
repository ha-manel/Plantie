import React from 'react';
import PropTypes from 'prop-types';
import Discount from '../../components/discount/Discount';
import Hero from '../../components/hero/Hero';
import ProductsCarousel from '../../components/productsCarousel/ProductsCarousel';
import WhyUs from '../../components/whyUs/WhyUs';

const Home = ({ data, status }) => {
  let plants = [];
  if (status === 'success') {
    plants = data.new;
  }
  return (
    <div className="w-full flex flex-col items-center">
      <Hero />
      <Discount />
      <ProductsCarousel title="New Products" products={plants} />
      <WhyUs />
    </div>
  );
};

Home.propTypes = {
  status: PropTypes.string.isRequired,
  data: PropTypes.shape({
    new: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        discount: PropTypes.number.isRequired,
      }),
    ),
    discount: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        discount: PropTypes.number.isRequired,
      }),
    ),
    indoor: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        discount: PropTypes.number.isRequired,
      }),
    ),
    outdoor: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        discount: PropTypes.number.isRequired,
      }),
    ),
  }).isRequired,
};

export default Home;
