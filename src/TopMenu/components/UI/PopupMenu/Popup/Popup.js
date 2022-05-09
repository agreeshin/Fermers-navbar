import React from "react";

import ListItem from "../ListItem/ListItem";
import styles from "./Popup.module.css";

const Popup = ({ items, className, isSubmenusVisible, itemClickHandler }) => {
  return (
    <div className={`${styles.popup} ${className}`}>
      <ul>
        {items.map((item) => {
          return (
            <ListItem
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

export default Popup;
