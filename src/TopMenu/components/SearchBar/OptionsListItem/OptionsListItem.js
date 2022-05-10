import React from 'react';

import styles from "./OptionsListItem.module.css";

const OptionsListItem = ({ title, url, enteredValue, clickHandler }) => {
  let titleFirstPart = title;
  let titleThirdPart = "";

  if (title.indexOf(enteredValue) !== -1) {
    titleFirstPart = title.substring(0, title.indexOf(enteredValue));
    titleThirdPart = title.substring(title.indexOf(enteredValue) + enteredValue.length)
  }

  const onClickHandler = () => {
    clickHandler(url);
  }

  return <div className={styles["options-list__item"]} onClick={onClickHandler}>
    <b>{titleFirstPart}</b>
    <span>{enteredValue}</span>
    <b>{titleThirdPart}</b>
  </div>
}

export default OptionsListItem;