import React from 'react';
import { NavLink } from 'react-router-dom';

const Hero = () => (
  <section className="flex flex-col lg:flex-row justify-center">
    <div className="p-5 sm:p-20 pb-0 lg:w-1/2 lg:pt-20 lg:pl-32 lg:pr-0 lg:pb-0">
      <h1 className="font-inter text-4xl sm:text-6xl leading-normal font-semibold text-primary-500">
        Growing
        <br />
        Beautiful Plants
        <br />
        at Home
      </h1>
      <p className="font-nunito text-lg lg:pr-28 mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error hic
        magnam pariatur, natus esse iusto et libero unde architecto perspiciatis
        rem quas minima facere modi! Molestiae quidem ipsa odit obcaecati!
      </p>
      <div className="mt-8 px-3 py-2 bg-primary-300 hover:bg-primary-200 transition ease-out duration-300 w-fit rounded-lg text-white font-semibold">
        <NavLink to="/shop">
          <span className="">Shop now</span>
        </NavLink>
      </div>
      <div className="flex mt-8 font-inter">
        <div className="mr-10 flex flex-col">
          <span className="text-2xl sm:text-3xl text-primary-500 font-semibold">
            2000+
          </span>
          <span className="font-medium">Delivery</span>
        </div>
        <div className="mr-10 flex flex-col">
          <span className="text-2xl sm:text-3xl text-primary-500 font-semibold">
            1200+
          </span>
          <span className="font-medium">Customer</span>
        </div>
        <div className="flex flex-col">
          <span className=" text-2xl sm:text-3xl text-primary-500 font-semibold">
            1000+
          </span>
          <span className="font-medium">Products</span>
        </div>
      </div>
    </div>
    <div className="lg:w-1/2 lg:pr-20 lg:pt-16 relative flex justify-center">
      <div className="absolute bottom-0 w-2/3 h-3/5 bg-gradient-to-b from-gray-300 to-slate-50 rounded-3xl" />
      <img src="./assets/images/hero-img.png" alt="plant" className="z-10" />
    </div>
  </section>
);

export default Hero;
