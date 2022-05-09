import React, { useState } from "react";

import Hamburger from "./components/HamburgerMenu/Hamburger/Hamburger";
import Logo from "./components/Logo/Logo";
import BreadCrumbs from "./components/BreadCrumbs/BreadCrumbs/BreadCrumbs";
import SearchBar from "./components/SearchBar/SearchBar/SearchBar";

import styles from "./TopMenu.module.css";

import {
  hamburgerMenuTree,
  homePageUrl,
  breadCrumbsTree,
  breadCrumbsCurrentPointUrl,
  menuItemClickHandler
} from "./data";

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
        items={hamburgerMenuTree}
        menuItemClickHandler={menuItemClickHandler}
      />
      <Logo homePageUrl={homePageUrl} />
      <BreadCrumbs
        list={breadCrumbsTree}
        currentPointUrl={breadCrumbsCurrentPointUrl}
        menuItemClickHandler={menuItemClickHandler}
      />
      <SearchBar 
        inputChangeHandler={searchBarInputChangeHandler}
        options={searchBarOptions}
      />
    </div>
  );
};

export default TopMenu;
