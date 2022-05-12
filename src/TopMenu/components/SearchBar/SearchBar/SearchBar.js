import React from "react";
import onClickOutside from "react-onclickoutside";
import { FiSearch } from 'react-icons/fi';

import OptionsList from "../OptionsList/OptionsList";
import CrossSvg from "../CrossSvg/CrossSvg";

import styles from "./SearchBar.module.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOptionsVisible: false,
      enteredValue: "",
      isInputInFocus: false,
      isMagnifierHovered: false,
      isCrossHovered: false
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onInputFocusHandler = this.onInputFocusHandler.bind(this);
    this.onInputBlurHandler = this.onInputBlurHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onCrossClickHandler = this.onCrossClickHandler.bind(this);
    this.onMagnifierClickHandler = this.onMagnifierClickHandler.bind(this);
    this.onItemClickHandler = this.onItemClickHandler.bind(this);
    this.onInputClickHandler = this.onInputClickHandler.bind(this);
  }

  onChangeHandler(event) {
    this.setState({ enteredValue: event.target.value });
    this.setState({ isOptionsVisible: event.target.value.trim() !== "" });
    this.props.inputChangeHandler(event.target.value);
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.setState({ isOptionsVisible: false });
    if (this.state.enteredValue.trim() !== "") {
      this.props.submitHandler(this.state.enteredValue);
    }
  }

  onMagnifierClickHandler() {
    this.setState({ isOptionsVisible: false });
    if (this.state.enteredValue.trim() !== "") {
      this.props.submitHandler(this.state.enteredValue);
    }
  }

  onCrossClickHandler(event) {
    this.setState({ enteredValue: "" });
    this.setState({ isOptionsVisible: false });
  }

  onInputFocusHandler(event) {
    this.setState({ isInputInFocus: true });
    this.setState({ isOptionsVisible: event.target.value.trim() !== "" });
  }

  onInputClickHandler(event) {
    this.setState({ isInputInFocus: true });
    this.setState({ isOptionsVisible: event.target.value.trim() !== "" });
  }

  onInputBlurHandler() {
    this.setState({ isInputInFocus: false });
  }

  handleClickOutside = (evt) => {
    this.setState({ isOptionsVisible: false });
  };

  onItemClickHandler(url) {
    this.setState({ isOptionsVisible: false });
    this.props.itemClickHandler(url);
  }

  render() {
    return (
      <div className={styles.form}>
        <div className={this.state.isInputInFocus ? styles["container__focus"] : styles["container"]}>
          <form onSubmit={this.onSubmitHandler}>
            <input
              type="text"
              value={this.state.enteredValue}
              placeholder="Поиск"
              className={styles["text-input"]}
              onChange={this.onChangeHandler}
              onFocus={this.onInputFocusHandler}
              onBlur={this.onInputBlurHandler}
              onClick={this.onInputClickHandler}
            ></input>
          </form>          
          {this.state.isOptionsVisible && (
            <OptionsList
              options={this.props.options}
              enteredValue={this.state.enteredValue}
              itemClickHandler={this.onItemClickHandler}
            />
          )}
        </div>
        <div className={styles.buttons}>
          <button 
            onMouseOver={this.onCrossMouseMoveHandler} 
            onMouseLeave={this.onCrossMouseLeaveHandler} 
            onClick={this.onCrossClickHandler}
          >
            <div className={styles["icon-cross"]}>
              <CrossSvg />
            </div>
          </button>
          <div className={styles.pipe}></div>
          <button onClick={this.onMagnifierClickHandler}>
            <div className={styles["icon-search"]}>
              <FiSearch />
            </div>
          </button>
        </div>
      </div>
    );
  }
}

export default onClickOutside(SearchBar);