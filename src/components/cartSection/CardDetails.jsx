import React from 'react';
import { Link } from 'react-router-dom';

const CardDetails = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div data-aos="fade-left" className="w-full max-w-md lg:w-1/3 h-fit mt-4 md:ml-6 py-10">
      <div className="py-10 px-8 bg-gradient-to-t from-secondary-400 to-secondary-300 text-gray-300 rounded-2xl font-nunito">
        <h4 className="font-inter text-3xl text-white font-semibold">
          Card Details
        </h4>
        <form action="" className="mt-6 flex flex-col text-lg">
          <p>Card Type</p>
          <div className="w-full flex justify-around mb-6">
            <div>
              <label htmlFor="visa" className="flex items-center">
                <span>Visa</span>
                <input
                  type="radio"
                  id="visa"
                  className="ml-2"
                  name="cardType"
                />
              </label>
            </div>
            <div>
              <label htmlFor="mastercard" className="flex items-center">
                <span>Mastercard</span>
                <input
                  type="radio"
                  id="mastercard"
                  className="ml-2"
                  name="cardType"
                />
              </label>
            </div>
            <div>
              <label htmlFor="paypal" className="flex items-center">
                <span>Paypal</span>
                <input
                  type="radio"
                  id="paypal"
                  className="ml-2"
                  name="cardType"
                />
              </label>
            </div>
          </div>
          <label htmlFor="name" className="flex flex-col mb-6">
            <span>Name on card</span>
            <input
              type="text"
              placeholder="John Doe"
              id="name"
              className="mt-1 bg-transparent text-md placeholder:text-white text-white outline-none pb-1 border-b border-b-gray-500"
            />
          </label>
          <label htmlFor="number" className="flex flex-col mb-6">
            <span>Card number</span>
            <input
              type="number"
              placeholder="**** **** **** ****"
              min="111111111111111"
              max="9999999999999999"
              id="number"
              className="mt-1 bg-transparent text-md placeholder:text-white text-white outline-none pb-1 border-b border-b-gray-500"
            />
          </label>
          <div className="flex justify-between mb-4">
            <label htmlFor="date">
              <span>Expiration Date</span>
              <div className="flex">
                <input
                  type="number"
                  min="1"
                  max="12"
                  placeholder="mm"
                  className="w-16 mt-1 bg-transparent text-md placeholder:text-white text-white outline-none pb-1 border-b border-b-gray-500"
                />
                <input
                  type="number"
                  placeholder="yyyy"
                  min={currentYear}
                  className="w-24 mt-1 mx-2 bg-transparent text-md placeholder:text-white text-white outline-none pb-1 border-b border-b-gray-500"
                />
              </div>
            </label>
            <label htmlFor="ccv" className="flex flex-col">
              <span>CCV</span>
              <input
                type="number"
                placeholder="XXX"
                min="111"
                max="999"
                className="w-16 mt-1 mr-8 bg-transparent text-md placeholder:text-white text-white outline-none pb-1 border-b border-b-gray-500"
              />
            </label>
          </div>
          <Link to="/under-construction">
            <input
              type="submit"
              value="Check Out"
              className="bg-gradient-to-r from-gray-500 to-gray-400 text-white text-xl font-semibold w-11/12 py-2 rounded-md mt-8 self-center cursor-pointer hover:scale-105 transition duration-300 ease-out"
            />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default CardDetails;
