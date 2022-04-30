import React from 'react';
import BsChevronRight from 'react-icons/bs';


import Popup from '../Popup/Popup';
import styles from './ListItem.module.css';

const ListItem = ({text, link, submenu}) => {   

  return ( 
    submenu === undefined ?
      <li className={styles['popup-list-item']}>
        <a href={link}>{text}</a> 
      </li> 
      :
      <li className={styles['popup-list-item']}>
        <a href={link}>{text}</a>
        <Popup items={submenu} className={styles['secondary-popup']}/>
        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.41 0L6 4.33019L10.59 0L12 1.33962L6 7L0 1.33962L1.41 0Z" fill="#00463B"/>
        </svg>
      </li>   
  );
}
 
export default ListItem;