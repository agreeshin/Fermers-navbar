const hamburgerMenuList = [
  {id: "main", text: "Главная", link: "#"},
  {id: "mnemonic-scheme", text: "Мнемосхема", link: "#"},
  {id: "video-surveillance", text: "Видеонаблюдение", link: "#"},
  {id: "rights-settings", text: "Настройка прав", link: "#"},
  {id: "tasks", text: "Распоряжения/задачи", link: "#"},
  {id: "analitics", text: "Аналитика", link: "#"},
  {id: "process-profile", text: "Процессный профиль", link: "#"},
  {id: "system journal", text: "Системный журнал", link: "#"},
  {id: "configurator", text: "Конфигуратор", link: "#", submenu: [
    {id: "rack-conf", text: "Конфигуратор стеллажей", link: "#"},
    {id: "cameras-conf", text: "Конфигуратор камер", link: "#"},
    {id: "network-adr-conf", text: "Конфигуратор сетевых адресов", link: "#"}
  ]},
  {id: "diagnostics", text: "Диагностика", link: "#"},
  {id: "agrotechnics", text: "Агротехника", link: "#"}
];

const homePageAddress = "http://localhost:3000/";

// Test data
// let hamburgerMenuList = [
//   {id: "main", text: "Главная", link: "#"},
//   {id: "mnemonic-scheme", text: "Мнемосхема", link: "#"},
//   {id: "video-surveillance", text: "Видеонаблюдение", link: "#"},
//   {id: "rights-settings", text: "Настройка прав", link: "#"},
//   {id: "tasks", text: "Распоряжения/задачи", link: "#", submenu: [
//     {id: "mnemonic-scheme", text: "Мнемосхема", link: "#"},
//   {id: "video-surveillance", text: "Видеонаблюдение", link: "#"}
//   ]},
//   {id: "analitics", text: "Аналитика", link: "#"},
//   {id: "process-profile", text: "Процессный профиль", link: "#"},
//   {id: "system journal", text: "Системный журнал", link: "#"},
//   {id: "configurator", text: "Конфигуратор", link: "#", submenu: [
//     {id: "rack-conf", text: "Конфигуратор стеллажей", link: "#"},
//     {id: "cameras-conf", text: "Конфигуратор камер", link: "#", submenu: [
//       {id: "rights-settings", text: "Настройка прав", link: "#"},
//       {id: "tasks", text: "Распоряжения/задачи", link: "#", submenu: [
//         {id: "rights-settings", text: "Настройка прав", link: "#"}
//       ]},
//       {id: "analitics", text: "Аналитика", link: "#"}
//     ]},
//     {id: "network-adr-conf", text: "Конфигуратор сетевых адресов", link: "#"}
//   ]},
//   {id: "diagnostics", text: "Диагностика", link: "#"},
//   {id: "agrotechnics", text: "Агротехника", link: "#"}
// ];

export { hamburgerMenuList, homePageAddress };