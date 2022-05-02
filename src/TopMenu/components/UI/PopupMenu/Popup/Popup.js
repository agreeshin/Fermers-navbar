import React from 'react';
// import onClickOutside from "react-onclickoutside";

import ListItem from '../ListItem/ListItem';
import styles from './Popup.module.css';

const Popup = ({items, className}) => {

  return ( 
    <div className={`${className} ${styles.popup}`}>
      <ul>
        {items.map(item => {
          return <ListItem text={item.text} link={item.link} submenu={item.submenu} key={item.id} />
        })}
      </ul>
    </div>
   );
}
 
export default Popup;

// class Popup extends React.Component {
//   handleClickOutside = evt => {
//     console.log('Clicked outside!');
//   };

//   render() {
//     return ( 
//       <div className={`${this.props.className} ${styles.popup}`}>
//         <ul>
//           {this.props.items.map(item => {
//             return <ListItem text={item.text} link={item.link} submenu={item.submenu} key={item.id} />
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

// export default onClickOutside(Popup);