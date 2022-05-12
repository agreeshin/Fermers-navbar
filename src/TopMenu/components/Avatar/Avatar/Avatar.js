import React, { Component } from "react";
import onClickOutside from "react-onclickoutside";

import AvatarPopup from "../AvatarPopup/AvatarPopup";

import styles from "./Avatar.module.css";

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = { isPopupVisible: false };
    this.onImageClickHandler = this.onImageClickHandler.bind(this);
  }

  onImageClickHandler() {
    this.setState({ isPopupVisible: !this.state.isPopupVisible });
  }

  handleClickOutside = (evt) => {
    this.setState({ isPopupVisible: false });
  };

  render() {
    return (
      <div className={styles.container}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${this.props.user.avatarUrl})` }}
          onClick={this.onImageClickHandler}
        ></div>
        {this.state.isPopupVisible && (
          <AvatarPopup
            user={this.props.user}
            menuItems={this.props.menuItems}
          />
        )}
      </div>
    );
  }
}

export default onClickOutside(Avatar);
