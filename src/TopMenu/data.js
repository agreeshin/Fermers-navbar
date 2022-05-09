// Data that the component receives from the external environment

// const hamburgerMenuTree = [
//   {title: "Главная", url: "#"},
//   {title: "Мнемосхема", url: "#"},
//   {title: "Видеонаблюдение", url: "#"},
//   {title: "Настройка прав", url: "#"},
//   {title: "Распоряжения/задачи", url: "#"},
//   {title: "Аналитика", url: "#"},
//   {title: "Процессный профиль", url: "#"},
//   {title: "Системный журнал", url: "#"},
//   {title: "Конфигуратор", url: "#", submenu: [
//     {title: "Конфигуратор стеллажей", url: "#"},
//     {title: "Конфигуратор камер", url: "#"},
//     {title: "Конфигуратор сетевых адресов", url: "#"}
//   ]},
//   {title: "Диагностика", url: "#"},
//   {title: "Агротехника", url: "#"}
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

// Test data
let hamburgerMenuTree = [
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

const menuItemClickHandler = url => {
  console.log(url);
};

const searchBarInputChangeHandler = value => {
  
};

export { 
  hamburgerMenuTree,
  homePageUrl,
  breadCrumbsTree,
  breadCrumbsCurrentPointUrl,
  menuItemClickHandler
};