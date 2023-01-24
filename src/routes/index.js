import config from '~/config';
import Contact from '~/pages/client/Contact';
import Home from '~/pages/client/Home';
import Products from '~/pages/client/Products';

const publicRoute = [
  { path: config.routesConfig.home, component: Home },
  { path: config.routesConfig.contact, component: Contact },
  { path: config.routesConfig.products, component: Products },
];

const privateRoute = [];

export { publicRoute, privateRoute };
