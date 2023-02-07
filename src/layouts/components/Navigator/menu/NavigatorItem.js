import styles from './NaviMenu.module.scss';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import React from 'react';

const cx = classNames.bind(styles);
function MenuItem({ title, to, icon, tippy, list = [] }) {
  const renderList = () => {
    return (
      <div className={cx('nav-wrapper')}>
        <PopperWrapper className={cx('popper-nav')}>
          <ul className={cx('nav-list')}>
            {list.map((item, index) => {
              return (
                <li className={cx('nav-item')} key={index}>
                  <Link to={item.to} className={cx('item-link')}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </PopperWrapper>
      </div>
    );
  };
  if (tippy) {
    return (
      <Tippy interactive placement="bottom-start" offset={[0, 1]} render={renderList}>
        <NavLink to={to} className={(nav) => cx('menu-item', { active: nav.isActive })}>
          <p className={cx('menu-item-link')}>
            {title}
            <FontAwesomeIcon icon={icon} className={cx('icon')} />
          </p>
        </NavLink>
      </Tippy>
    );
  }
  return (
    <NavLink to={to} className={(nav) => cx('menu-item', { active: nav.isActive })}>
      <p className={cx('menu-item-link')}>
        {title}
        <FontAwesomeIcon icon={icon} className={cx('icon')} />
      </p>
    </NavLink>
  );
}

export default MenuItem;
