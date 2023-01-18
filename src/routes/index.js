import config from '~/config';
import Contact from '~/pages/Contact';
import Home from '~/pages/Home';
import Products from '~/pages/Products';

const publicRoute = [
  { path: config.routesConfig.home, component: Home },
  { path: config.routesConfig.contact, component: Contact },
  { path: config.routesConfig.products, component: Products },
];

const privateRoute = [];

export { publicRoute, privateRoute };
