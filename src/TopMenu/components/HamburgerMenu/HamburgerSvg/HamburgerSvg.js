import React from 'react';

import styles from './HamburgerSvg.module.css';

const HamburgerSvg = () => {
  return ( 
  <svg className={styles.svg} viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="4.50617" rx="2.25308" fill="var(--text-color)"/>
    <rect y="11.2531" width="36" height="4.50617" rx="2.25308" fill="var(--text-color)"/>
    <rect y="22.5062" width="36" height="4.50617" rx="2.25308" fill="var(--text-color)"/>
  </svg> );
}
 
export default HamburgerSvg;