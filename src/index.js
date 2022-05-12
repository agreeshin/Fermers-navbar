import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import TopMenu from './TopMenu/TopMenu';

// TEST DATA
// TODO: replace with getting from the external environment
import {
  hamburgerMenuTree,
  homePageUrl,
  breadCrumbsTree,
  breadCrumbsCurrentPointUrl,
  userMenuItems,
  currentUser,
  menuItemClickHandler,
  searchBarSubmitHandler,
  searchBarItemClickHandler
} from "./data";

window.topMenuComponent = {};

window.topMenuComponent.createtopMenuComponent = function (
  elementId
) {
  ReactDOM.render(
    <TopMenu 
      hamburgerMenuTree={hamburgerMenuTree}
      homePageUrl={homePageUrl}
      breadCrumbsTree={breadCrumbsTree}
      breadCrumbsCurrentPointUrl={breadCrumbsCurrentPointUrl}
      userMenuItems={userMenuItems}
      currentUser={currentUser}
      menuItemClickHandler={menuItemClickHandler}
      searchBarSubmitHandler={searchBarSubmitHandler}
      searchBarItemClickHandler={searchBarItemClickHandler}
    />,
    document.getElementById(elementId)
  );

  let text = "";

  let component = {};

  // Объявляем свойство text, для синхронизации с Backend свойством (обработка запроса сервера)
  Object.defineProperty(component, "text", {
    get: function () {
      return text;
    },
    set: function (value) {
      text = value;
    },
  });

  return component;
};

// Комментировать перед сборкой. Разкоменнтировать в режиме разработки:
window.topMenuComponent.createtopMenuComponent("root");