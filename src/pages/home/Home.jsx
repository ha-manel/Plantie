import React from 'react';
import Discount from '../../components/discount/Discount';
import Hero from '../../components/hero/Hero';
import Products from '../../components/products/Products';
import WhyUs from '../../components/whyUs/WhyUs';

const Home = () => {
  const products = [
    {
      id: 1,
      name: 'Aloe Vera',
      picture: './assets/images/plant1.webp',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam reprehenderit.',
      price: 50.25,
    },
    {
      id: 2,
      name: 'Aloe Vera',
      picture: './assets/images/plant2.webp',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam reprehenderit.',
      price: 50.25,
    },
    {
      id: 3,
      name: 'Aloe Vera',
      picture: './assets/images/plant3.webp',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam reprehenderit.',
      price: 50.25,
    },
    {
      id: 4,
      name: 'Aloe Vera',
      picture: './assets/images/plant4.webp',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam reprehenderit.',
      price: 50.25,
    },
  ];
  return (
    <div className="w-full flex flex-col items-center">
      <Hero />
      <Discount />
      <Products title="New Products" products={products} />
      <WhyUs />
    </div>
  );
};

export default Home;
