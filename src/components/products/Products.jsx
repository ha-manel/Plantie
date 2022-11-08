import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Carousel from 'nuka-carousel/lib/carousel';
import ProductCard from '../productCard/ProductCard';

const Products = ({ title, products }) => {
  const location = useLocation();
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  let SlideToShowNumber = 1;
  if (mdUp) {
    SlideToShowNumber = 3;
  }

  return (
    <section className="w-full flex flex-col items-center bg-secondary-100 py-10">
      <h2 className="w-2/3 header">{title}</h2>
      <div className="w-full flex flex-col max-w-sm md:max-w-none sm:w-2/3">
        <Carousel
          className="pb-16"
          slidesToShow={SlideToShowNumber}
          slidesToScroll={1}
          swiping={false}
          wrapAround
          defaultControlsConfig={{
            nextButtonText: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            ),
            prevButtonText: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            ),
            nextButtonStyle: {
              backgroundColor: '#9FDEA5',
              borderRadius: '50px',
            },
            prevButtonStyle: {
              backgroundColor: '#9FDEA5',
              borderRadius: '50px',
            },
            pagingDotsStyle: {
              fill: 'gray',
              width: '10px',
            },
          }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel>
        {location.pathname === '/' && (
          <div className="w-fit self-end mt-6">
            <NavLink to="/shop">
              <span className="flex items-center text-md font-inter font-semibold border-b border-b-black">
                View more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 ml-2 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </NavLink>
          </div>
        )}
      </div>
    </section>
  );
};

Products.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Products;
