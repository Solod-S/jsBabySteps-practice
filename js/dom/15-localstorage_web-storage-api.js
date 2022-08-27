// - WebStorage API и JSON (localStorage / sessionStorage)
// - Введение в шаблонизацию
//   - [Пакет для Parcel](https://www.npmjs.com/package/parcel-plugin-handlebars-precompile)
// - Билд в production
//   - root link
//   - [Public url](https://parceljs.org/cli.html#set-the-public-url-to-serve-on)
//   - [Структура папок для Parcel](https://github.com/parcel-bundler/parcel/issues/233#issuecomment-599081474)

const User = {
  name: 'Sergey',
  age: 33,
  sex: 'man',
};

const userJson = JSON.stringify(User);
console.log(userJson);
// перегоняем в джейсон формат

const userNotJson = JSON.parse(userJson);
console.log(userNotJson);
// делаем нормальный джаваскрипт

localStorage.setItem('my-name', 'Sergey');
// передаем/записываем значения в локал сторадж

localStorage.setItem('User', JSON.stringify(User));
// передаем/записываем  объект в локал сторадж
console.log(localStorage);

console.log(localStorage.getItem('User'));
// запрашиваем значение  ключа в локал сторадж

const sevaeData = localStorage.getItem('User');
const parsetData = JSON.parse(sevaeData);
console.log(`sevaeData:`, sevaeData);
console.log(`parseData:`, parsetData);

//Метод removeItem(key) удаляет из хранилища уже существующую запись с ключом key.

//Операция полной очистки хранилища занятие опасное, так как может затронуть записи сделанные другими разработчиками проекта.
//Тем не менее, если вы хотите полностью очистить хранилище, вызовите метод clear().
