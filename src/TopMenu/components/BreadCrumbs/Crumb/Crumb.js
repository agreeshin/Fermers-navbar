import React from "react";

import { BsChevronRight } from "react-icons/bs";

// import Popup from "../../UI/PopupMenu/Popup/Popup";
import DropDown from "../CrumbDropDown/DropDown/DropDown";

import styles from "./Crumb.module.css";

class Crumb extends React.Component {
  constructor(props) {
    super(props);
    this.onCrumbClickHandler = this.onCrumbClickHandler.bind(this);
  }

  onCrumbClickHandler() {
    this.props.crumbClickHandler(this.props.crumb.url);
  }

  render() {
    return (
      <div className={styles["crumb-container"]}>
        <p
          className={styles["crumb-content"]}
          onClick={this.onCrumbClickHandler}
          onDoubleClick={this.onCrumbDoubleClickHandler}
        >
          {this.props.crumb.title}&nbsp;
        </p>
        {!this.props.isLast && <BsChevronRight />}
        {!this.props.isLast && <p>&nbsp;</p>}
        {this.props.crumb.submenu !== undefined && (
          <DropDown
            items={this.props.crumb.submenu}
            className={styles["crumb-drop-down"]}
            isSubmenusVisible={true}
            itemClickHandler={this.props.crumbClickHandler}
          />
        )}
      </div>
    );
  }
}

export default Crumb;

// Old version with the opening of the menu by click:

// class Crumb extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isMenuVisible: false };
//     this.onCrumbClickHandler = this.onCrumbClickHandler.bind(this);
//     this.onCrumbDoubleClickHandler = this.onCrumbDoubleClickHandler.bind(this);
//   }

//   onCrumbClickHandler() {
//     this.setState({ isMenuVisible: !this.state.isMenuVisible });
//   }

//   onCrumbDoubleClickHandler() {
//     document.location.href = this.props.crumb.url;
//   }

//   handleClickOutside = evt => {
//     this.setState({isMenuVisible: false});
//   };

//   render() {
//     return (
//       <div className={styles["crumb-container"]}>
//         <p
//           className={styles["crumb-content"]}
//           onClick={this.onCrumbClickHandler}
//           onDoubleClick={this.onCrumbDoubleClickHandler}
//         >
//           {this.props.crumb.title}&nbsp;
//         </p>
//         {!this.props.isLast && <BsChevronRight />}
//         {!this.props.isLast && <p>&nbsp;</p>}
//         {this.props.crumb.submenu !== undefined && this.state.isMenuVisible && (
//           <Popup
//             items={this.props.crumb.submenu}
//             className={styles["crumb-popup"]}
//             isSubmenusVisible={true}
//           />
//         )}
//       </div>
//     );
//   }
// }

// export default onClickOutside(Crumb);