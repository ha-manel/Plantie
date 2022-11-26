import PlantDetails from '../components/plantDetails/PlantDetails';
import Cart from '../pages/cart/Cart';
import Contact from '../pages/contact/Contact';
import Home from '../pages/home/Home';
import Profile from '../pages/profile/Profile';
import Shop from '../pages/shop/Shop';
import Signin from '../pages/signIn/Signin';
import Signup from '../pages/signUp/Signup';

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
    path: '/plant',
    element: <PlantDetails />,
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
    path: '/signin',
    element: <Signin />,
  },
];
export default routes;
