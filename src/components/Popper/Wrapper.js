import styles from './Popper.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Wrapper({ children, className }) {
  return (
    <div
      className={cx('wrapper', {
        [className]: className,
      })}
    >
      {children}
    </div>
  );
}

export default Wrapper;
