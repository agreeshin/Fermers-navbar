import React, { Component } from "react";
import onClickOutside from "react-onclickoutside";
import DropDownListItem from "../../../BreadCrumbs/CrumbDropDown/DropDownListItem/DropDownListItem";

import DropDownList from "../DropDownList/DropDownList";
import TriangleSvg from "../TriangleSvg/TriangleSvg";

import styles from "./DropDown.module.css";

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = { isListVisible: false };
    this.selectBarClickHandler = this.selectBarClickHandler.bind(this);
  }

  selectBarClickHandler() {
    this.setState({ isListVisible: !this.state.isListVisible });
  }

  handleClickOutside = (evt) => {
    this.setState({ isListVisible: false });
  };

  render() {
    return (
      <div className={styles["container"]}>
        <div className={styles["label-container"]}>
          <p className={styles.label}>{this.props.labelText}</p>
        </div>
        <div className={this.state.isListVisible ? styles["drop-down-opened"] : styles["drop-down-closed"]}>
          <div className={styles["select-bar"]} onClick={this.selectBarClickHandler}>
            <p>{this.props.list[0].title}</p>
            <TriangleSvg />
          </div>            
          {this.state.isListVisible && <DropDownList list={this.props.list}/>}
        </div>          
      </div>                
     );
  }
}
 
export default onClickOutside(DropDown);