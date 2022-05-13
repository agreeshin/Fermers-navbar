import React from "react";

import DropDownListItem from "../DropDownListItem/DropDownListItem";

import styles from "./DropDownList.module.css";

const DropDownList = ({ list, itemSelectHandler }) => {
  return (
    <ul className={styles.container}>
      {list.map((item) => {
        return (
          <DropDownListItem title={item.title} url={item.url} key={item.url} selectHandler={itemSelectHandler} />
        );
      })}
    </ul>
  );
};

export default DropDownList;
