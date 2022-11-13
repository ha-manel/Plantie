import './App.css';
import { createContext } from 'react';
import { useRoutes } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import routes from './config/routes';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

const App = () => {
  const appRoutes = useRoutes(routes);
  const queryClient = new QueryClient();

  const fetchPlants = async () => {
    const response = await fetch('http://localhost:3000/api/v1/plants');
    return response.json();
  };

  const query = useQuery('plants', fetchPlants);

  const PlantsContext = createContext([]);

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <header>
          <Navbar />
        </header>
        <PlantsContext.Provider value={query}>
          <main className="w-full flex flex-col items-center">{appRoutes}</main>
        </PlantsContext.Provider>
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

export default App;
