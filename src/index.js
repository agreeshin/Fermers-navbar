import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import TopMenu from './TopMenu/TopMenu';

window.topMenuComponent = {};

window.topMenuComponent.createtopMenuComponent = function (
  elementId
) {
  ReactDOM.render(
    <TopMenu />,
    document.getElementById(elementId)
  );

  let text = "";

  let component = {};

  //Объявляем свойство text, для синхронизации с Backend свойством (обработка запроса сервера)
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