import TippyHeadless from '@tippyjs/react/headless';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cx = classNames.bind(styles);
function Search() {
  const renderSearch = () => {
    return (
      <div className={cx('search-wrapper')}>
        <PopperWrapper className={cx('popper-search')}>
          <div className={cx('form')}>
            <form action="" className={cx('search-form')}>
              <input type="search" className={cx('input-inner')} placeholder="Tìm kiếm sản phẩm..." />
            </form>
            <span className={cx('input-button')}>
              <button className={cx('btn')}>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </span>
          </div>
        </PopperWrapper>
      </div>
    );
  };
  return (
    <div className={cx('search')}>
      <TippyHeadless
        // delay={[800, 250]}
        // visible
        interactive
        placement="bottom-start"
        offset={[0, 18]}
        render={renderSearch}
      >
        <FontAwesomeIcon icon={faSearch} className={cx('search-icon')} />
      </TippyHeadless>
    </div>
  );
}

export default Search;
