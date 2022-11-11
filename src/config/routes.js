import Contact from '../pages/contact/Contact';
import Home from '../pages/home/Home';
import Shop from '../pages/shop/Shop';

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
];
export default routes;
