import React from "react";
import onClickOutside from "react-onclickoutside";
import { BsChevronRight } from "react-icons/bs";

import Popup from "../../UI/PopupMenu/Popup/Popup";

import styles from "./Crumb.module.css";

class Crumb extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isMenuVisible: false };
    this.onCrumbClickHandler = this.onCrumbClickHandler.bind(this);
    this.onCrumbDoubleClickHandler = this.onCrumbDoubleClickHandler.bind(this);
  }

  onCrumbClickHandler() {
    this.setState({ isMenuVisible: !this.state.isMenuVisible });
  }

  onCrumbDoubleClickHandler() {
    document.location.href = this.props.crumb.link;
  }

  handleClickOutside = evt => {
    this.setState({isMenuVisible: false});
  };

  render() {
    return (
      <div className={styles["crumb-container"]}>
        <p
          className={styles["crumb-content"]}
          onClick={this.onCrumbClickHandler}
          onDoubleClick={this.onCrumbDoubleClickHandler}
        >
          {this.props.crumb.text}&nbsp;
        </p>
        {!this.props.isLast && <BsChevronRight />}
        {!this.props.isLast && <p>&nbsp;</p>}
        {this.props.crumb.submenu !== undefined && this.state.isMenuVisible && (
          <Popup
            items={this.props.crumb.submenu}
            className={styles["crumb-popup"]}
            isSubmenusVisible={false}
          />
        )}
      </div>
    );
  }
}

export default onClickOutside(Crumb);