import PlantDetails from '../components/plantDetails/PlantDetails';
import Cart from '../pages/cart/Cart';
import Contact from '../pages/contact/Contact';
import Home from '../pages/home/Home';
import Profile from '../pages/profile/Profile';
import Shop from '../pages/shop/Shop';
import Signup from '../pages/signup/Signup';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/shop',
    element: <Shop />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/plant',
    element: <PlantDetails />,
  },
];
export default routes;
