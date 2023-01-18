import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigator from '../components/Navigator';
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <Navigator />
      <div className={cx('container')}>
        <div className={cx('content')}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
