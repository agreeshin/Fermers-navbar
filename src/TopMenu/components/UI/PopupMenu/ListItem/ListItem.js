import React from "react";
import BsChevronRight from "react-icons/bs";

import Popup from "../Popup/Popup";
import styles from "./ListItem.module.css";

const ListItem = ({ title, url, submenu, isSubmenusVisible, clickHandler }) => {
  const onClickHandler = () => {
    clickHandler(url);
  };

  return submenu === undefined ? (
    <li className={styles["popup-list-item"]}>
      <p onClick={onClickHandler}>{title}</p>
    </li>
  ) : (
    <li className={styles["popup-list-item"]}>
      <p onClick={onClickHandler}>{title}</p>
      {isSubmenusVisible && (
        <Popup
          items={submenu}
          className={styles["secondary-popup"]}
          isSubmenusVisible={isSubmenusVisible}
          itemClickHandler={clickHandler}
        />
      )}
      {isSubmenusVisible && <svg
        width="12"
        height="7"
        viewBox="0 0 12 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.41 0L6 4.33019L10.59 0L12 1.33962L6 7L0 1.33962L1.41 0Z"
          fill="#00463B"
        />
      </svg>}
    </li>
  );
};

export default ListItem;
