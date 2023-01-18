import styles from './Navigator.module.scss';
import classNames from 'classnames/bind';
import MenuList from './menu';
import MenuItem from './menu/NavigatorItem';
import config from '~/config';
import { faCaretDown, faL } from '@fortawesome/free-solid-svg-icons';
import Search from '../Search';
import CartShop from '../Cart';
import { useEffect, useState } from 'react';
import { keyboard } from '@testing-library/user-event/dist/keyboard';
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
  const [breadCum, setBreadCum] = useState(false);
  document.onkeydown = (key) => {
    console.log(key.code);
    if (key.code === 'F5') {
      setBreadCum((prev) => prev);
    }
  };
  const handlerBreadCum = (title) => {
    if (title === 'HOME') {
      setBreadCum(true);
    } else {
      setBreadCum(false);
    }
  };
  const renderNav = () => {
    return MenuNav.map((item, index) => {
      return (
        <MenuItem key={index} title={item.title} icon={item.icon} to={item.to} handlerBreadCum={handlerBreadCum} />
      );
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
      {breadCum ? <div>Bread Home</div> : <div>Bread Cum</div>}
    </>
  );
}

export default Navigator;
