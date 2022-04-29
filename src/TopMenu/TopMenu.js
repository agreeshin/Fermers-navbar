import React from 'react';

import Hamburger from './components/HamburgerMenu/Hamburger/Hamburger';

import styles from './TopMenu.module.css';

import { hamburgerMenuList } from './data';

// TODO: подключить React-icons и использовать для гамбургер-значка: https://react-icons.github.io/react-icons/ 
// TODO: создать объект на весь экран для обработки клика вне пунктов меню: https://www.youtube.com/watch?v=N0LWLkaJz1I (11 минута)

const TopMenu = props => {
  console.log(hamburgerMenuList);

  return <div className={styles['top-menu']}>
    <Hamburger />
  </div>
};

export default TopMenu;