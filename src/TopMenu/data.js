let hamburgerMenuList = [
  {id: "main", item: "Главная", link: "#"},
  {id: "mnemonic-scheme", item: "Мнемосхема", link: "#"},
  {id: "video-surveillance", item: "Видеонаблюдение", link: "#"},
  {id: "rights-settings", item: "Настройка прав", link: "#"},
  {id: "tasks", item: "Распоряжения/задачи", link: "#"},
  {id: "analitics", item: "Аналитика", link: "#"},
  {id: "process-profile", item: "Процессный профиль", link: "#"},
  {id: "system journal", item: "Системный журнал", link: "#"},
  {id: "configurator", item: "Конфигуратор", link: "#", submenu: [
    {id: "rack-conf", item: "Конфигуратор стеллажей", link: "#"},
    {id: "cameras-conf", item: "Конфигуратор камер", link: "#"},
    {id: "network-adr-conf", item: "Конфигуратор сетевых адресов", link: "#"}
  ]},
  {id: "diagnostics", item: "Диагностика", link: "#"},
  {id: "agrotechnics", item: "Главная", link: "#"}
];

export { hamburgerMenuList };