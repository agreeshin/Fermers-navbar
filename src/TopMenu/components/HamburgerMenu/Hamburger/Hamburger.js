import React from 'react';
import { useState } from 'react';

import HamburgerSvg from '../HamburgerSvg/HamburgerSvg';
import Popup from '../../UI/PopupMenu/Popup/Popup';

import styles from './Hamburger.module.css';

const Hamburger = ({items}) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const hamburgerClickHandler = event => {
    setIsMenuVisible(prevState => !prevState);
  };

  return ( <div className={styles.hamburger}>
    <div className={styles['hamburger-cursor-area']} onClick={hamburgerClickHandler}>
      <HamburgerSvg />
    </div>
    {isMenuVisible && <Popup items={items} className={styles['hamburger-popup']} />}
  </div> );
}
 
export default Hamburger;