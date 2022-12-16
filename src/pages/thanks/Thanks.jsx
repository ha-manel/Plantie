import React from 'react';
import { Link } from 'react-router-dom';

const Thanks = () => (
  <div className="mt-24 px-8">
    <p className="font-inter text-xl font-semibold text-primary-500">Thank you! Your message has been received.</p>
    <Link to="/" className="flex items-center mt-6 text-lg underline underline-offset-4 text-primary-400 hover:text-primary-300">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
      </svg>
      Go back
    </Link>
  </div>
);

export default Thanks;
