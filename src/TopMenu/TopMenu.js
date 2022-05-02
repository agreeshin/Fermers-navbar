import React from 'react';

import Hamburger from './components/HamburgerMenu/Hamburger/Hamburger';
import Logo from './components/Logo/Logo';

import styles from './TopMenu.module.css';

import { hamburgerMenuList, homePageAddress } from './data';

// TODO: создать объект на весь экран для обработки клика вне пунктов меню: https://www.youtube.com/watch?v=N0LWLkaJz1I (11 минута)

const TopMenu = props => {


  return <div className={styles['top-menu']}>
    <Hamburger items={hamburgerMenuList}/>
    <Logo homePageAddress={homePageAddress}/>
  </div>
};

export default TopMenu;