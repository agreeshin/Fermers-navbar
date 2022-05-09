import React from 'react';

import styles from "./OptionsListItem.module.css";

const OptionsListItem = ({ title, enteredValue }) => {
  let titleFirstPart = title;
  let titleThirdPart = "";

  if (title.indexOf(enteredValue) !== -1) {
    titleFirstPart = title.substring(0, title.indexOf(enteredValue));
    titleThirdPart = title.substring(title.indexOf(enteredValue) + enteredValue.length)
  }

  return <div className={styles["options-list__item"]}>
    <b>{titleFirstPart}</b>
    <span>{enteredValue}</span>
    <b>{titleThirdPart}</b>
  </div>
}

export default OptionsListItem;