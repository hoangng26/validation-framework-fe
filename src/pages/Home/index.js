import React from 'react';
import className from 'classnames/bind';

import styles from './HomePage.module.scss';

const cx = className.bind(styles);

function HomePage() {
  return <div className={cx('container')}>HomePage</div>;
}

export default HomePage;
