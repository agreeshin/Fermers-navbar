import React from "react";

import styles from "./PopupItem.module.css";

const PopupItem = ({ title, url, icon }) => {
  const onClickHandler = () => {
    console.log('Муляжный пункт. Требуется добавить обработчик');
  };

  return (
    <li className={styles["list-item"]}>
      <div className={styles.icon}>{icon}</div>
      <p onClick={onClickHandler}>{title}</p>
    </li>
  );
};

export default PopupItem;