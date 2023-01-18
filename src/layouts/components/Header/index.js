import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import config from '~/config';
import images from '~/assets/image';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

function Header() {
  const [width, setWidth] = useState(window.innerWidth);
  const [widthPx, setWidthPx] = useState(width);
  useEffect(() => {
    const handlerResize = () => {
      setWidthPx(width);
    };
    window.addEventListener('resize', handlerResize);
    return () => {
      window.removeEventListener('resize', handlerResize);
    };
  }, [width]);
  console.log(widthPx);
  return (
    <header className={cx('header')}>
      <div className={cx('header-top')}>
        <div className={cx('header-wrapper-top')} style={{}}>
          <div>
            <div className={cx('row')}>
              <div className={cx('number-contact')}>
                <span>
                  Hotline: <a href="tel:0384.757.113">0384.757.113</a>
                </span>
              </div>
              <div className={cx('number-contact')}>
                <ul className={cx('header-list')}>
                  <li className={cx('header-item')}>
                    <span>Đăng ký</span>
                  </li>
                  <li className={cx('header-item')}>
                    <span>Đăng nhập</span>
                  </li>
                  <li className={cx('header-item')}>
                    <Link className={cx('item-link')} to={config.routesConfig.contact}>
                      Liên hệ
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('header-logo')}>
        <div className={cx('header-logo-wrapper')}>
          <div className={cx('logo-wrapper')}>
            <Link to={config.routesConfig.home} className={cx('logo-link')}>
              <img src={images.logo} alt="Logo" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
