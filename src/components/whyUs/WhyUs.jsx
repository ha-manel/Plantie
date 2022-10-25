import React from 'react';
import { NavLink } from 'react-router-dom';

const WhyUs = () => (
  <section className="w-full flex justify-center mt-10 bg-secondary-100">
    <div className="hidden md:flex w-2/5 justify-center bg-white rounded-r-full">
      <img
        src="./assets/images/plant5.png"
        alt="plant"
        className="w-3/5 object-contain"
      />
    </div>
    <div className="w-full flex flex-col p-10 sm:py-10 sm:px-28 md:w-3/5 md:py-10 md:px-10 lg:pl-32 lg:pr-28">
      <h3 className="header">Why Choose Us?</h3>
      <p className="text-sm sm:text-base font-nunito font-medium text-primary-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        corporis quo consequatur earum, reiciendis perspiciatis nemo animi
        aperiam optio libero nobis.
      </p>
      <ul className="mt-6 text-primary-500 font-nunito">
        <li className="mt-2">
          <h4 className="pl-9 sm:pl-12 font-bold">High Quality Plants</h4>
          <div className="flex items-center mt-1">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-6 h-6 sm:w-9 sm:h-9 mr-3 fill-primary-400"
              >
                <path d="M512 64c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 78.3 364 32 448 32h32c17.7 0 32 14.3 32 32zM0 128c0-17.7 14.3-32 32-32H64c123.7 0 224 100.3 224 224v32 96c0 17.7-14.3 32-32 32s-32-14.3-32-32V352C100.3 352 0 251.7 0 128z" />
              </svg>
            </div>
            <p className="sm:pr-16 lg:pr-32 text-slate-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              consectetur adipisicing elit.
            </p>
          </div>
        </li>
        <li className="mt-3">
          <h4 className="pl-9 sm:pl-12 font-bold">Fast Delivery</h4>
          <div className="flex items-center mt-1">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="w-6 h-6 sm:w-9 sm:h-9 mr-3 fill-primary-400"
              >
                <path d="M32 32C32 14.3 46.3 0 64 0h72.9c27.5 0 52 17.6 60.7 43.8L289.7 320c30.1 .5 56.8 14.9 74 37l202.1-67.4c16.8-5.6 34.9 3.5 40.5 20.2s-3.5 34.9-20.2 40.5L384 417.7c-.9 52.2-43.5 94.3-96 94.3c-53 0-96-43-96-96c0-30.8 14.5-58.2 37-75.8L136.9 64H64C46.3 64 32 49.7 32 32zM276.8 134.5c-5.5-16.8 3.7-34.9 20.5-40.3L343 79.4l19.8 60.9 60.9-19.8L403.8 59.6l45.7-14.8c16.8-5.5 34.9 3.7 40.3 20.5l49.4 152.2c5.5 16.8-3.7 34.9-20.5 40.3L366.5 307.2c-16.8 5.5-34.9-3.7-40.3-20.5L276.8 134.5z" />
              </svg>
            </div>
            <p className="sm:pr-16 lg:pr-32 text-slate-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              consectetur adipisicing elit.
            </p>
          </div>
        </li>
        <li className="mt-3">
          <h4 className="pl-9 sm:pl-12 font-bold">24/7 Customer Support</h4>
          <div className="flex items-center mt-1">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-6 h-6 sm:w-9 sm:h-9 mr-3 fill-primary-400"
              >
                <path d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z" />
              </svg>
            </div>
            <p className="sm:pr-16 lg:pr-32 text-slate-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              consectetur adipisicing elit.
            </p>
          </div>
        </li>
      </ul>
      <div className="mt-8 px-3 py-2 bg-primary-400 hover:bg-primary-300 transition ease-out duration-300 w-fit rounded-lg text-white font-semibold self-center cursor-pointer">
        <NavLink to="/shop">
          <span className="">Shop now</span>
        </NavLink>
      </div>
    </div>
  </section>
);
export default WhyUs;
