import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import Tippy from '@tippyjs/react/headless';
const cx = classNames.bind(styles);
function CartShop() {
  const renderCart = () => {
    return (
      <div className={cx('cart-wrapper')}>
        <PopperWrapper className={cx('cart-popper')}>
          <ul className={cx('cart-list')}>
            <div className={cx('cart-no-item')}>
              <p>Không có sản phẩm nào.</p>
            </div>
          </ul>
        </PopperWrapper>
      </div>
    );
  };
  return (
    <div className={cx('cart-shop')}>
      <Tippy
        // delay={[800, 250]}
        // visible
        interactive
        placement="bottom-start"
        offset={[8, 19]}
        render={renderCart}
      >
        <FontAwesomeIcon icon={faShoppingBag} className={cx('icon-cart')} />
      </Tippy>
      <span className={cx('cart-quantity')}>0</span>
    </div>
  );
}

export default CartShop;
