import React, { useState } from "react";

import Hamburger from "./components/HamburgerMenu/Hamburger/Hamburger";
import Logo from "./components/Logo/Logo";
import BreadCrumbs from "./components/BreadCrumbs/BreadCrumbs/BreadCrumbs";
import SearchBar from "./components/SearchBar/SearchBar/SearchBar";
import DropDown from "./components/UI/DropDownMenu/DropDown/DropDown";
import Bell from "./components/Notifications/Bell/Bell";
import Avatar from "./components/Avatar/Avatar/Avatar";

import styles from "./TopMenu.module.css";

const TopMenu = (props) => {

  const [searchBarOptions, setSearchBarOptions] = useState([
    {title: "опция 1 Яндекс", url: "https://yandex.ru/"},
    {title: "опция 2 ВК", url: "https://vk.com/al_feed.php"},
    {title: "опция 3 РИА новости", url: "https://ria.ru/"},
    {title: "опция 4 Mail.ru", url: "https://mail.ru/"}
  ]);

  const searchBarInputChangeHandler = value => {
    setSearchBarOptions([
      {title: `${value} опция 1 Яндекс`, url: "https://yandex.ru/"},
      {title: `опция 2 ${value} ВК`, url: "https://vk.com/al_feed.php"},
      {title: `опция 3 РИА ${value} новости`, url: "https://ria.ru/"},
      {title: `опция 4 Mail.ru ${value}`, url: "https://mail.ru/"}
    ]);
  };

  return (
    <div className={styles["top-menu"]}>
      <div className={styles.container}>
        <Hamburger
          items={props.hamburgerMenuTree}
          menuItemClickHandler={props.menuItemClickHandler}
        />
        <Logo homePageUrl={props.homePageUrl} />
        <BreadCrumbs
          list={props.breadCrumbsTree}
          currentPointUrl={props.breadCrumbsCurrentPointUrl}
          menuItemClickHandler={props.menuItemClickHandler}
        />
        <SearchBar 
          inputChangeHandler={searchBarInputChangeHandler}
          submitHandler={props.searchBarSubmitHandler}
          itemClickHandler={props.searchBarItemClickHandler}
          options={searchBarOptions}
        />
        <DropDown list={props.farmsList} itemSelectHandler={props.farmSelectHandler} labelText="Ферма:" />
        <Bell />
        <Avatar user={props.currentUser} menuItems={props.userMenuItems}/>
      </div>      
    </div>
  );
};

export default TopMenu;
