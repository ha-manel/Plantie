import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './config/routes';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

const App = () => {
  const appRoutes = useRoutes(routes);
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="w-full flex flex-col items-center">{appRoutes}</main>
      <Footer />
    </div>
  );
};

export default App;
