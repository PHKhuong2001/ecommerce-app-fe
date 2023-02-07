/* eslint-disable jsx-a11y/heading-has-content */
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Card from '~/components/Card';
const cx = classNames.bind(styles);
function Home() {
  const renderCard = () => {
    return <Card />;
  };
  return (
    <>
      <div className={cx('col-12')}>
        <div className={cx('title-module')}>
          <h2>
            <Link href="#" title=""></Link>
          </h2>
        </div>
      </div>
      <div className={cx('col-12')}>
        <div className={cx('wrap-outstanding')}>
          <div className={cx('row')}>{renderCard()}</div>
        </div>
      </div>
    </>
  );
}

export default Home;
