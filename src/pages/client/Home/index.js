/* eslint-disable jsx-a11y/heading-has-content */
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Home() {
  return (
    <>
      <div className={cx('col-12')}>
        <div className={cx('title-module')}>
          <h2>
            <Link href="#" title=""></Link>
          </h2>
        </div>
      </div>
      <div className={cx('col-12')}></div>
    </>
  );
}

export default Home;
