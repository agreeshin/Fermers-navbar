import React from 'react';

import styles from "./DropDownListItem.module.css";

const DropDownListItem = ({ title, url, selectHandler }) => {
  const onClickHandler = () => {
    selectHandler(url);
  };

  return ( 
    <li className={styles['item']} onClick={onClickHandler}>{title}</li>
   );
}
 
export default DropDownListItem;