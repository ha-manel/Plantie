import React, { useContext } from 'react';
import Discount from '../../components/discount/Discount';
import Hero from '../../components/hero/Hero';
import ProductsCarousel from '../../components/productsCarousel/ProductsCarousel';
import WhyUs from '../../components/whyUs/WhyUs';
import PlantsContext from '../../contexts/plantsContext';

const Home = () => {
  const plantsData = useContext(PlantsContext);
  let plants = [];
  if (plantsData.status === 'success') {
    plants = plantsData.data.new;
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

export default Home;
