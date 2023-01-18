import styles from './NaviMenu.module.scss';
import classNames from 'classnames/bind';

import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cx = classNames.bind(styles);
function MenuItem({ title, to, icon, handlerBreadCum }) {
  return (
    <NavLink
      to={to}
      className={(nav) => cx('menu-item', { active: nav.isActive })}
      onClick={() => {
        handlerBreadCum(title);
      }}
    >
      <p className={cx('menu-item-link')}>
        {title}
        <FontAwesomeIcon icon={icon} className={cx('icon')} />
      </p>
    </NavLink>
  );
}

export default MenuItem;
