import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './config/routes';
import Navbar from './components/navbar/Navbar';

const App = () => {
  const appRoutes = useRoutes(routes);
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="w-full flex flex-col items-center">{appRoutes}</main>
    </div>
  );
};

export default App;
