import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Button({ children, title, to, href, disabled, className, onClick, ...passProps }) {
  let Comp = 'button';
  const classes = cx('button', {
    [className]: className,
  });
  const props = {
    onClick,
    ...passProps,
  };

  if (disabled) {
  }

  if (to) {
    Comp = Link;
    props.to = to;
  } else if (href) {
    Comp = 'a';
    props.href = href;
  }
  return <Comp {...props}>{title}</Comp>;
}

export default Button;
