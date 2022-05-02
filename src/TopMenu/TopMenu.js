import React from 'react';

import Hamburger from './components/HamburgerMenu/Hamburger/Hamburger';
import Logo from './components/Logo/Logo';
import BreadCrumbs from './components/BreadCrumbs/BreadCrumbs/BreadCrumbs';

import styles from './TopMenu.module.css';

import { hamburgerMenuTree, homePageAddress, breadCrumbsTree, breadCrumbsCurrentPointId } from './data';

const TopMenu = props => {
  return <div className={styles['top-menu']}>
    <Hamburger items={hamburgerMenuTree}/>
    <Logo homePageAddress={homePageAddress}/>
    <BreadCrumbs list={breadCrumbsTree} currentPointId={breadCrumbsCurrentPointId}/>
  </div>
};

export default TopMenu;