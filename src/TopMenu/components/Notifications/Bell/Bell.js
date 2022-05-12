import React, { Component } from "react";
import onClickOutside from "react-onclickoutside";

import BellSvg from "../BellSvg/BellSvg";

import styles from "./Bell.module.css";

class Bell extends Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return (
      <div className={styles["image-container"]}>
        <BellSvg notificationsNumber={28}/>
      </div> 
    );
  }
}
 
export default Bell;