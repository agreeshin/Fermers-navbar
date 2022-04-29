import React from   'react';

import HamburgerSvg from '../HamburgerSvg/HamburgerSvg';
import styles from './Hamburger.module.css';

const Hamburger = () => {
  return ( <div className={styles.hamburger}>
    <div className={styles['hamburger-cursor-area']}>
      <HamburgerSvg />
    </div>
  </div> );
}
 
export default Hamburger;<div>
</div>