import React from 'react';

import ListItem from '../ListItem/ListItem';
import styles from './Popup.module.css';

const Popup = ({items, className}) => {

  return ( 
    <div className={`${className} ${styles.popup}`}>
      <ul>
        {items.map(item => {
          return <ListItem text={item.text} link={item.link} submenu={item.submenu} />
        })}
      </ul>
    </div>
   );
}
 
export default Popup;