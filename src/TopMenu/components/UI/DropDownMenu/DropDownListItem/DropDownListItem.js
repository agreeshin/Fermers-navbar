import React from 'react';

import styles from "./DropDownListItem.module.css";

const DropDownListItem = ({ title, url }) => {
  console.log('item');

  return ( 
    <li className={styles['item']}>{title}</li>
   );
}
 
export default DropDownListItem;