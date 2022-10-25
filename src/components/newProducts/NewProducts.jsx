import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Carousel from 'nuka-carousel/lib/carousel';
import ProductCard from './ProductCard';

const NewProducts = () => {
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  let SlideToShowNumber = 1;
  if (mdUp) {
    SlideToShowNumber = 3;
  }

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
    <section className="w-full flex flex-col items-center bg-secondary-100 py-10">
      <h2 className="w-2/3 font-inter text-4xl font-semibold text-primary-400 mb-2 pb-2 border-b border-b-gray-200">
        New Products
      </h2>
      <div className="w-full max-w-sm md:max-w-none sm:w-2/3">
        <Carousel
          className="pb-16"
          slidesToShow={SlideToShowNumber}
          slidesToScroll={1}
          swiping={false}
          wrapAround
          autoplay
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
      </div>
    </section>
  );
};

export default NewProducts;
