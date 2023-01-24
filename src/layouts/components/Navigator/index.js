import styles from './Navigator.module.scss';
import classNames from 'classnames/bind';
import MenuList from './menu';
import MenuItem from './menu/NavigatorItem';
import config from '~/config';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Search from '../Search';
import CartShop from '../Cart';
const cx = classNames.bind(styles);
const MenuNav = [
  {
    title: 'HOME',
    to: config.routesConfig.home,
  },
  {
    title: 'CLOTHING',
    to: '/collection/all',
    icon: faCaretDown,
  },
  {
    title: 'CONTACT',
    to: config.routesConfig.contact,
  },
  {
    title: 'COMBO DEAL ⭐️',
    to: '/combo',
  },
  {
    title: 'CLEARANCE SALE',
    to: '/clearance-sale',
  },
];
function Navigator() {
  const renderNav = () => {
    return MenuNav.map((item, index) => {
      return <MenuItem key={index} title={item.title} icon={item.icon} to={item.to} />;
    });
  };
  return (
    <>
      <div className={cx('nav')}>
        <div className={cx('nav-container')}>
          <div className={cx('row')}>
            <div className={cx('col-11')}>
              <div className={cx('nav-menu')}>
                <MenuList>{renderNav()}</MenuList>
              </div>
            </div>
            <div className={cx('col-1')}>
              <Search />
              <CartShop />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigator;
