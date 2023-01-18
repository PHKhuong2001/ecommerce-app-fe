import styles from './NaviMenu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function MenuList({ children }) {
  return <nav className={cx('menu-list')}>{children}</nav>;
}

export default MenuList;
