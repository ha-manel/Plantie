/* eslint-disable react/prop-types */
import React from 'react';
import { useRoutes } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import routes from '../routes';

const Layout = () => {
  const route = useRoutes(routes);
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="w-full flex flex-col items-center pb-36">
        {route}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
