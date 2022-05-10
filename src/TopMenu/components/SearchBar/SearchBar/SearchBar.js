import React from "react";
import onClickOutside from "react-onclickoutside";
import { FiSearch } from 'react-icons/fi';
import { GiCrossedSabres } from 'react-icons/gi';

import OptionsList from "../OptionsList/OptionsList";

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
    this.onMagnifierMouseMoveHandler = this.onMagnifierMouseMoveHandler.bind(this);
    this.onMagnifierMouseLeaveHandler = this.onMagnifierMouseLeaveHandler.bind(this);
    this.onCrossMouseMoveHandler = this.onCrossMouseMoveHandler.bind(this);
    this.onCrossMouseLeaveHandler = this.onCrossMouseLeaveHandler.bind(this);
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

  onMagnifierMouseMoveHandler() {
    this.setState({ isMagnifierHovered: true })
  }

  onMagnifierMouseLeaveHandler() {
    this.setState({ isMagnifierHovered: false })
  }

  onCrossMouseMoveHandler() {
    this.setState({ isCrossHovered: true })
  }

  onCrossMouseLeaveHandler() {
    this.setState({ isCrossHovered: false })
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
            {/* {this.state.isCrossHovered ? 
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.4428 14.4438L18.9991 19.0001M16.7497 8.875C16.7497 13.2242 13.2239 16.75 8.87466 16.75C4.52542 16.75 0.999664 13.2242 0.999664 8.875C0.999664 4.52576 4.52542 1 8.87466 1C13.2239 1 16.7497 4.52576 16.7497 8.875Z" stroke="var(--text-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              :
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.4428 14.4438L18.9991 19.0001M16.7497 8.875C16.7497 13.2242 13.2239 16.75 8.87466 16.75C4.52542 16.75 0.999664 13.2242 0.999664 8.875C0.999664 4.52576 4.52542 1 8.87466 1C13.2239 1 16.7497 4.52576 16.7497 8.875Z" stroke="#ACACAC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>} */}
              <GiCrossedSabres />
          </button>
          <div className={styles.pipe}></div>
          <button 
            onMouseOver={this.onMagnifierMouseMoveHandler} 
            onMouseLeave={this.onMagnifierMouseLeaveHandler}
            onClick={this.onMagnifierClickHandler}
          >
            {/* {this.state.isMagnifierHovered ? 
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.4428 14.4438L18.9991 19.0001M16.7497 8.875C16.7497 13.2242 13.2239 16.75 8.87466 16.75C4.52542 16.75 0.999664 13.2242 0.999664 8.875C0.999664 4.52576 4.52542 1 8.87466 1C13.2239 1 16.7497 4.52576 16.7497 8.875Z" stroke="var(--text-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            :
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.4428 14.4438L18.9991 19.0001M16.7497 8.875C16.7497 13.2242 13.2239 16.75 8.87466 16.75C4.52542 16.75 0.999664 13.2242 0.999664 8.875C0.999664 4.52576 4.52542 1 8.87466 1C13.2239 1 16.7497 4.52576 16.7497 8.875Z" stroke="#ACACAC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}             */}
              <FiSearch />
          </button>
        </div>
      </div>
    );
  }
}

export default onClickOutside(SearchBar);