import React from 'react';
import Discount from '../../components/discount/Discount';
import Hero from '../../components/hero/Hero';
import NewProducts from '../../components/newProducts/NewProducts';
import WhyUs from '../../components/whyUs/WhyUs';

const Home = () => (
  <div className="w-full flex flex-col items-center">
    <Hero />
    <Discount />
    <NewProducts />
    <WhyUs />
  </div>
);

export default Home;
