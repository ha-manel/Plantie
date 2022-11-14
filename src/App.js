import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import Contact from './pages/contact/Contact';
import PlantDetails from './components/plantDetails/PlantDetails';

const App = () => {
  const fetchPlants = async () => {
    const response = await fetch('http://localhost:3000/api/v1/plants');
    return response.json();
  };

  const { data, status } = useQuery({ queryKey: ['plants'], queryFn: fetchPlants });

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="w-full flex flex-col items-center">
        <Routes>
          <Route path="/" element={<Home data={data} status={status} />} />
          <Route path="/shop" element={<Shop data={data} status={status} />} />
          <Route path="/plant" element={<PlantDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
