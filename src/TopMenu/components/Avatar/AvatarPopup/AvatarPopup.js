import React from 'react';
import Popup from '../../UI/PopupMenu/Popup/Popup';

import PopupItem from '../PopupItem/PopupItem';

import styles from "./AvatarPopup.module.css";

const AvatarPopup = ({ user, menuItems }) => {
  const [surname, name, patronymic] = user.fio.split(/\s+/);

  return ( <div className={styles.container}>
    <div className={styles.bio}>
      <div className={styles.image} style={{backgroundImage: `url(${user.avatarUrl})`}}></div>
      <div className={styles.labels}>
        <p className={styles["label-post"]}>{user.post + ":"}</p>
        <p className={styles["label-surname"]}>{surname}</p>
        <p className={styles["label-name"]}>{`${name} ${patronymic}`}</p>
      </div>      
    </div>
    <div className={styles.menu}>
      <div className={styles.dummy}></div>
      <ul>
        {menuItems.map(item => {
          return <PopupItem title={item.title} url={item.url} icon={item.icon} key={item.url} />
        })}
      </ul>      
    </div>
  </div> );
}
 
export default AvatarPopup;