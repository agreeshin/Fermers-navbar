import React, { useState }  from 'react';
import onClickOutside from "react-onclickoutside";

import HamburgerSvg from '../HamburgerSvg/HamburgerSvg';
import Popup from '../../UI/PopupMenu/Popup/Popup';

import styles from './Hamburger.module.css';

// const Hamburger = ({items}) => {
//   const [isMenuVisible, setIsMenuVisible] = useState(false);

//   const hamburgerClickHandler = () => {
//     setIsMenuVisible(prevState => !prevState);
//   };

//   return ( <div className={styles.hamburger}>
//     <div className={styles['hamburger-cursor-area']} onClick={hamburgerClickHandler}>
//       <HamburgerSvg />
//     </div>
//     {isMenuVisible && <Popup items={items} className={styles['hamburger-popup']} />}
//   </div> );
// }
 
// export default Hamburger;

class Hamburger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isMenuVisible: false};
    this.hamburgerClickHandler = this.hamburgerClickHandler.bind(this);
  }

  hamburgerClickHandler() {
    this.setState({isMenuVisible: !this.state.isMenuVisible});
  }

  handleClickOutside = evt => {
    this.setState({isMenuVisible: false});
  };

  render() {
    return <div className={styles.hamburger}>
      <div className={styles['hamburger-cursor-area']} onClick={this.hamburgerClickHandler}>
        <HamburgerSvg />
      </div>
      {this.state.isMenuVisible && <Popup items={this.props.items} className={styles['hamburger-popup']} />}
    </div>
  }
}


export default onClickOutside(Hamburger);