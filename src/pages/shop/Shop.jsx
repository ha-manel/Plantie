import React, { useContext, useState } from 'react';
import Discount from '../../components/discount/Discount';
import Products from '../../components/products/Products';
import Trending from '../../components/trending/Trending';

const Shop = () => {
  const [filterOption, setFilterOption] = useState('New Products');
  // eslint-disable-next-line
  const plants = useContext(PlantsContext);
  let products = [];
  const newPlants = plants.filter((plant) => plant.new === true);
  const indoorPlants = plants.filter((plant) => plant.habitat === 'indoor');
  const outdoorPlants = plants.filter((plant) => plant.habitat === 'outdoor');
  const discountPlants = plants.filter((plant) => plant.discount > 0);

  const changeFilter = (option) => {
    setFilterOption(option);
    if (filterOption === 'New Products') {
      products = newPlants;
    } else if (filterOption === 'Discount') {
      products = discountPlants;
    } else if (filterOption === 'Indoor') {
      products = indoorPlants;
    } else if (filterOption === 'Outdoor') {
      products = outdoorPlants;
    }
  };

  return (
    <div className="w-full flex flex-col items-center bg-secondary-100">
      <Discount />
      <h2 className="header">Shop now</h2>
      <div className="flex flex-wrap justify-center my-10 px-8 py-6 rounded-2xl bg-secondary-200">
        <button
          type="button"
          className={
            filterOption === 'New Products'
              ? 'mx-2 rounded-full px-3 py-1 bg-primary-400 text-lg font-inter text-white hover:bg-primary-200/50 hover:text-primary-500 transition ease-out duration-300 my-2'
              : 'mx-2 rounded-full px-3 py-1 bg-primary-100/50 text-lg font-inter text-primary-500 hover:bg-primary-200/50 transition ease-out duration-300 my-2'
          }
          onClick={() => changeFilter('New Products')}
        >
          New
        </button>
        <button
          type="button"
          className={
            filterOption === 'Discount'
              ? 'mx-2 rounded-full px-3 py-1 bg-primary-400 text-lg font-inter text-white hover:bg-primary-200/50 hover:text-primary-500 transition ease-out duration-300 my-2'
              : 'mx-2 rounded-full px-3 py-1 bg-primary-100/50 text-lg font-inter text-primary-500 hover:bg-primary-200/50 transition ease-out duration-300 my-2'
          }
          onClick={() => changeFilter('Discount')}
        >
          Discount
        </button>
        <button
          type="button"
          className={
            filterOption === 'Indoor Products'
              ? 'mx-2 rounded-full px-3 py-1 bg-primary-400 text-lg font-inter text-white hover:bg-primary-200/50 hover:text-primary-500 transition ease-out duration-300 my-2'
              : 'mx-2 rounded-full px-3 py-1 bg-primary-100/50 text-lg font-inter text-primary-500 hover:bg-primary-200/50 transition ease-out duration-300 my-2'
          }
          onClick={() => changeFilter('Indoor Products')}
        >
          Indoor
        </button>
        <button
          type="button"
          className={
            filterOption === 'Outdoor Products'
              ? 'mx-2 rounded-full px-3 py-1 bg-primary-400 text-lg font-inter text-white hover:bg-primary-200/50 hover:text-primary-500 transition ease-out duration-300 my-2'
              : 'mx-2 rounded-full px-3 py-1 bg-primary-100/50 text-lg font-inter text-primary-500 hover:bg-primary-200/50 transition ease-out duration-300 my-2'
          }
          onClick={() => changeFilter('Outdoor Products')}
        >
          Outdoor
        </button>
      </div>
      <Products title={filterOption} products={products} />
      <Trending products={products} />
    </div>
  );
};
export default Shop;
