import styles from './Product.module.scss';
import classNames from 'classnames';
import { useResolvedPath } from 'react-router-dom';
const cx = classNames.bind(styles);
function Products() {
  const { pathname } = useResolvedPath();
  console.log(pathname);
  return <div>{pathname}</div>;
}

export default Products;
