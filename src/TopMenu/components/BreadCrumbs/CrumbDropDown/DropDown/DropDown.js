import React from "react";

import DropDownListItem from "../DropDownListItem/DropDownListItem";
import styles from "./DropDown.module.css";

const DropDown = ({ items, className, isSubmenusVisible, itemClickHandler }) => {
  return (
    <div className={`${styles.dropdown} ${className}`}>
      <ul>
        {items.map((item) => {
          return (
            <DropDownListItem
              title={item.title}
              url={item.url}
              submenu={item.submenu}
              key={item.url}
              isSubmenusVisible={isSubmenusVisible}
              clickHandler={itemClickHandler}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default DropDown;
