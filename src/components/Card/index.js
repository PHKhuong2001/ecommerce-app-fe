import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Card.module.scss';
const cx = classNames.bind(styles);
function Card() {
  return (
    <div className={cx('col-3')}>
      <div className={cx('product-box')}>
        <div className={cx('product-thumbnail')}>
          <Link to="/contact" className={cx('image-thumb')} title="FLYING TIC-TAC-TOE TEE - BLACK">
            <div className={cx('product-image')}>
              <img
                src="https://bizweb.dktcdn.net/thumb/grande/100/318/614/products/light-tee-1-compressed.jpg?v=1675048135000"
                alt="FLYING TIC-TAC-TOE TEE - BLACK"
              />
            </div>
            <div className={cx('product-image', { secondImage: 'second-image' })}>
              <img
                src="https://bizweb.dktcdn.net/100/318/614/products/025-compressed.jpg?v=1673587189000"
                alt="FLYING TIC-TAC-TOE TEE - BLACK"
              />
            </div>
          </Link>
        </div>
        <div className={cx('product-info')}>
          <h3 className={cx('product-name')}>
            <Link className={cx('product-link')}>FLYING TIC-TAC-TOE TEE - BLACK</Link>
          </h3>
          <div className={cx('product-item-price')}>
            <span className={cx('special-price')}>
              <span className={cx('product-price')}>339.000₫</span>
            </span>
            <span className={cx('product-item-price-sale')}>
              <span className={cx('compare-price')}>395.000₫</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
