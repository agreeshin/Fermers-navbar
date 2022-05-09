import React from 'react';

import OptionsListItem from '../OptionsListItem/OptionsListItem';

import styles from './OptionsList.module.css';

const OptionsList = ({ options, enteredValue }) => {
  return <ul className={styles["options-list"]}>
    {options.map(option => <li key={option.url}>
      <OptionsListItem title={option.title} enteredValue={enteredValue} />    
    </li>)}
  </ul>
};

export default OptionsList;