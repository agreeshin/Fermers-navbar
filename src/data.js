// Data that the component receives from the external environment

import { BiUser, BiHelpCircle, BiExit } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';

const hamburgerMenuTree = [
  {title: "Главная", url: "http://localhost:3000/"},
  {title: "Мнемосхема", url: "http://tiflografika.com/taktilnye-mnemoshemy"},
  {title: "Видеонаблюдение", url: "https://securityrussia.com/blog/videonablyudenie.html"},
  {title: "Настройка прав", url: "https://burg.1cbit.ru/blog/nastroyka-prav-dostupa-1s-8/"},
  {title: "Распоряжения/задачи", url: "https://www.pragmatist.ru/vlast-i-rukovodstvo/rasporyazhenie-kak-sposob-realizacii-vlasti.html"},
  {title: "Аналитика", url: "https://www.purestorage.com/ru/knowledge/what-is-data-analytics.html"},
  {title: "Процессный профиль", url: "https://habr.com/ru/company/iladaruli24/blog/300994/"},
  {title: "Системный журнал", url: "https://help.ivanti.com/iv/help/ru_RU/isec/94/Topics/Agent-Client-System-Log.htm"},
  {title: "Конфигуратор", url: "https://www.bmw.ru/ru/configurator.html", submenu: [
    {title: "Конфигуратор стеллажей", url: "https://stellazhi-dlya-doma.ru/calculator/"},
    {title: "Конфигуратор камер", url: "https://devline.ru/calc/"},
    {title: "Конфигуратор сетевых адресов", url: "http://www.advanserv.ru/configurator/ip-calc/"}
  ]},
  {title: "Диагностика", url: "https://mcko.ru/diagnostic_requests/new"},
  {title: "Агротехника", url: "https://agtz.ru/"}
];

// let hamburgerMenuTree = [
//   {title: "Главная", url: "http://localhost:3000/"},
//   {title: "Мнемосхема", url: "http://tiflografika.com/taktilnye-mnemoshemy"},
//   {title: "Видеонаблюдение", url: "https://securityrussia.com/blog/videonablyudenie.html", submenu: [
//     {title: "Наблюдение за шмелями", url: "https://www.youtube.com/"},
//     {title: "Фото клубники", url: "https://github.com/"}
//   ]},
//   {title: "Настройка прав", url: "https://burg.1cbit.ru/blog/nastroyka-prav-dostupa-1s-8/"},
//   {title: "Распоряжения/задачи", url: "https://www.pragmatist.ru/vlast-i-rukovodstvo/rasporyazhenie-kak-sposob-realizacii-vlasti.html"},
//   {title: "Аналитика", url: "https://www.purestorage.com/ru/knowledge/what-is-data-analytics.html"},
//   {title: "Процессный профиль", url: "https://habr.com/ru/company/iladaruli24/blog/300994/"},
//   {title: "Системный журнал", url: "https://help.ivanti.com/iv/help/ru_RU/isec/94/Topics/Agent-Client-System-Log.htm"},
//   {title: "Конфигуратор", url: "https://www.bmw.ru/ru/configurator.html", submenu: [
//     {title: "Конфигуратор стеллажей", url: "https://stellazhi-dlya-doma.ru/calculator/"},
//     {title: "Конфигуратор камер", url: "https://devline.ru/calc/", submenu: [
//       {title: "Камера улья", url: "https://webcams-online.ru/rossija/uljanovsk"},
//       {title: "Камера сотрудников", url: "https://www.digibi.ru/cgi-bin/mpcreator?action=web"},
//       {title: "Клубника", url: "https://hi-chef.ru/product/klubnika/"}
//     ]},
//     {title: "Конфигуратор сетевых адресов", url: "http://www.advanserv.ru/configurator/ip-calc/"}
//   ]},
//   {title: "Диагностика", url: "https://mcko.ru/diagnostic_requests/new"},
//   {title: "Агротехника", url: "https://agtz.ru/"}
// ];


const homePageUrl = "http://localhost:3000/";

// Test data
const breadCrumbsTree = [
  {title: "Главная", url: "http://localhost:3000/"},
  {title: "Мнемосхема", url: "http://tiflografika.com/taktilnye-mnemoshemy"},
  {title: "Видеонаблюдение", url: "https://securityrussia.com/blog/videonablyudenie.html", submenu: [
    {title: "Наблюдение за шмелями", url: "https://www.youtube.com/"},
    {title: "Фото клубники", url: "https://github.com/"}
  ]},
  {title: "Настройка прав", url: "https://burg.1cbit.ru/blog/nastroyka-prav-dostupa-1s-8/"},
  {title: "Распоряжения/задачи", url: "https://www.pragmatist.ru/vlast-i-rukovodstvo/rasporyazhenie-kak-sposob-realizacii-vlasti.html"},
  {title: "Аналитика", url: "https://www.purestorage.com/ru/knowledge/what-is-data-analytics.html"},
  {title: "Процессный профиль", url: "https://habr.com/ru/company/iladaruli24/blog/300994/"},
  {title: "Системный журнал", url: "https://help.ivanti.com/iv/help/ru_RU/isec/94/Topics/Agent-Client-System-Log.htm"},
  {title: "Конфигуратор", url: "https://www.bmw.ru/ru/configurator.html", submenu: [
    {title: "Конфигуратор стеллажей", url: "https://stellazhi-dlya-doma.ru/calculator/"},
    {title: "Конфигуратор камер", url: "https://devline.ru/calc/", submenu: [
      {title: "Камера улья", url: "https://webcams-online.ru/rossija/uljanovsk"},
      {title: "Камера сотрудников", url: "https://www.digibi.ru/cgi-bin/mpcreator?action=web"},
      {title: "Клубника", url: "https://hi-chef.ru/product/klubnika/"}
    ]},
    {title: "Конфигуратор сетевых адресов", url: "http://www.advanserv.ru/configurator/ip-calc/"}
  ]},
  {title: "Диагностика", url: "https://mcko.ru/diagnostic_requests/new"},
  {title: "Агротехника", url: "https://agtz.ru/"}
];

const breadCrumbsCurrentPointUrl = "https://webcams-online.ru/rossija/uljanovsk";

const farmsList = [
  {title: "Челябинск 03", url: "https://hi-chef.ru/product/klubnika/"},
  {title: "Екатеринбург 01", url: "https://2gis.ru/ekaterinburg/route/1267242985586852"},
  {title: "Екатеринбург 02", url: "https://ekaterinburg.leroymerlin.ru/product/lestnica-pryamaya-lm-02-12664138/?utm_referrer=https%3A%2F%2Fwww.google.com%2F"},
  {title: "Екатеринбург 03", url: "https://03ekb.ru/"},
  {title: "Каменск-Уральский 01", url: "https://2gis.ru/k_uralskiy/geo/15341021885892091"},
  {title: "Магнитогорск 01", url: "https://2gis.ru/magnitogorsk/route/3659780287627302"},
  {title: "Первоуральск 01", url: "https://2gis.ru/pervouralsk/geo/1267273050516819"},
  {title: "Челябинск 01", url: "https://74.ru/"},
  {title: "Челябинск 02", url: "https://74.ru/text/2022/03/02/"}
];

const userMenuItems = [
  {
    title: "Личный кабинет", 
    url: "https://lkfl2.nalog.ru/lkfl/",
    icon: <BiUser />
  },
  {
    title: "Настройки", 
    url: "https://rg.ru/2021/12/28/kakie-nastrojki-v-android-nuzhno-skoree-vykliuchit.html",
    icon: <FiSettings />
  },
  {
    title: "Помощь", 
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BC%D0%BE%D1%89%D1%8C",
    icon: <BiHelpCircle />
  },
  {
    title: "Выход", 
    url: "https://autism.help/",
    icon: <BiExit />
  }
]

const currentUser = {
  id: "user1",
  fio: "Лукманова Ульяна Михайловна",
  post: "Инженер",
  avatarUrl: "https://img5.goodfon.ru/wallpaper/nbig/6/72/sofiia-zhuravets-fotomodel-devushka-ulybka-portret.jpg"
};

const menuItemClickHandler = url => {
  console.log("Selection of the main menu item or bread crumbs. Url:", url);
};

const searchBarItemClickHandler = url => {
  console.log("Selection of the search bar item. Url:", url);
}

const searchBarSubmitHandler = value => {
  console.log("Search bar text submit. Value:", value);
};

const farmSelectHandler = url => {
  console.log("Farm selection. Url:", url);
};

export { 
  hamburgerMenuTree,
  homePageUrl,
  breadCrumbsTree,
  breadCrumbsCurrentPointUrl,
  farmsList,
  userMenuItems,
  currentUser,
  menuItemClickHandler,
  searchBarItemClickHandler,
  searchBarSubmitHandler,
  farmSelectHandler
};