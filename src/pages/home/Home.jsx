import React from 'react';
import Discount from '../../components/discount/Discount';
import Hero from '../../components/hero/Hero';
import NewProducts from '../../components/newProducts/NewProducts';

const Home = () => (
  <div className="w-full flex flex-col items-center">
    <Hero />
    <Discount />
    <NewProducts />
  </div>
);

export default Home;
