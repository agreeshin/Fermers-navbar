import React, { useState } from "react";

import Hamburger from "./components/HamburgerMenu/Hamburger/Hamburger";
import Logo from "./components/Logo/Logo";
import BreadCrumbs from "./components/BreadCrumbs/BreadCrumbs/BreadCrumbs";
import SearchBar from "./components/SearchBar/SearchBar/SearchBar";
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
      <Bell />
      <Avatar user={props.currentUser} menuItems={props.userMenuItems}/>
    </div>
  );
};

export default TopMenu;
