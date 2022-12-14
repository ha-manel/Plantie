import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Discount from '../../components/discount/Discount';
import ProductsCarousel from '../../components/productsCarousel/ProductsCarousel';
import AllProducts from '../../components/allProducts/AllProducts';
import PlantsContext from '../../contexts/plantsContext';

const Shop = () => {
  const plantsData = useContext(PlantsContext);
  const [filterOption, setFilterOption] = useState('new');
  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    if (state) {
      setFilterOption('discount');
    }
  }, [state]);

  if (plantsData.status === 'loading') {
    return <div>Loading...</div>;
  }

  const changeFilter = (option) => {
    setFilterOption(option);
  };

  return (
    <div className="w-full flex flex-col items-center bg-secondary-100">
      <Discount />
      <h2 className="header">Shop now</h2>
      <div className="flex flex-wrap justify-center my-10 px-8 py-6 rounded-2xl bg-secondary-200">
        <button
          type="button"
          className={
            filterOption === 'new'
              ? 'mx-2 rounded-full px-3 py-1 bg-primary-400 text-lg font-inter text-white hover:bg-primary-200/50 hover:text-primary-500 transition ease-out duration-300 my-2'
              : 'mx-2 rounded-full px-3 py-1 bg-primary-100/50 text-lg font-inter text-primary-500 hover:bg-primary-200/50 transition ease-out duration-300 my-2'
          }
          onClick={() => changeFilter('new')}
        >
          New
        </button>
        <button
          type="button"
          className={
            filterOption === 'discount'
              ? 'mx-2 rounded-full px-3 py-1 bg-primary-400 text-lg font-inter text-white hover:bg-primary-200/50 hover:text-primary-500 transition ease-out duration-300 my-2'
              : 'mx-2 rounded-full px-3 py-1 bg-primary-100/50 text-lg font-inter text-primary-500 hover:bg-primary-200/50 transition ease-out duration-300 my-2'
          }
          onClick={() => changeFilter('discount')}
        >
          Discount
        </button>
        <button
          type="button"
          className={
            filterOption === 'indoor'
              ? 'mx-2 rounded-full px-3 py-1 bg-primary-400 text-lg font-inter text-white hover:bg-primary-200/50 hover:text-primary-500 transition ease-out duration-300 my-2'
              : 'mx-2 rounded-full px-3 py-1 bg-primary-100/50 text-lg font-inter text-primary-500 hover:bg-primary-200/50 transition ease-out duration-300 my-2'
          }
          onClick={() => changeFilter('indoor')}
        >
          Indoor
        </button>
        <button
          type="button"
          className={
            filterOption === 'outdoor'
              ? 'mx-2 rounded-full px-3 py-1 bg-primary-400 text-lg font-inter text-white hover:bg-primary-200/50 hover:text-primary-500 transition ease-out duration-300 my-2'
              : 'mx-2 rounded-full px-3 py-1 bg-primary-100/50 text-lg font-inter text-primary-500 hover:bg-primary-200/50 transition ease-out duration-300 my-2'
          }
          onClick={() => changeFilter('outdoor')}
        >
          Outdoor
        </button>
      </div>
      <ProductsCarousel
        title="Trending Products"
        products={plantsData.data[filterOption].filter((plant) => plant.trending === true)}
      />
      <AllProducts
        title={filterOption}
        products={plantsData.data[filterOption]}
      />
    </div>
  );
};

export default Shop;
