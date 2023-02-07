import config from '~/config';
import Contact from '~/pages/client/Contact';
import Home from '~/pages/client/Home';
import ProductDetail from '~/pages/client/ProductDetail';
import Products from '~/pages/client/Products';

const publicRoute = [
  { path: config.routesConfig.home, component: Home },
  { path: config.routesConfig.contact, component: Contact },
  { path: config.routesConfig.productDetail, component: ProductDetail },
  { path: config.routesConfig.allItem, component: Products },
  { path: config.routesConfig.accessories, component: Products },
  { path: config.routesConfig.bottom, component: Products },
  { path: config.routesConfig.jacket, component: Products },
  { path: config.routesConfig.shirts, component: Products },
  { path: config.routesConfig.cap, component: Products },
  { path: config.routesConfig.hoodie, component: Products },
  { path: config.routesConfig.sweater, component: Products },
  { path: config.routesConfig.washTieDye, component: Products },
  { path: config.routesConfig.sale, component: Products },
  { path: config.routesConfig.tee, component: Products },
];

const privateRoute = [];

export { publicRoute, privateRoute };
