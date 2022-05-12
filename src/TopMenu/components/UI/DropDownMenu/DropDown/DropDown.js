import React, { Component } from "react";
import onClickOutside from "react-onclickoutside";

import styles from "./DropDown.module.css";

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = { isListVisible: false };
  }

  handleClickOutside = (evt) => {
    this.setState({ isListVisible: false });
  };

  render() { 
    return ( 
      <div className={styles["select-bar"]}></div>
     );
  }
}
 
export default onClickOutside(DropDown);