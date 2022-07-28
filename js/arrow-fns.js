// /*
//  * Стрелочные функции
//  * - Объявление
//  * - Явный и неявный возврат
//  * - Аргументы
//  * - Неявный возврат объекта
//  */

// const add = function (a, b, c) {
//   console.log(a, b, c);
//   return a + b + c;
// };

// console.log(add(1, 2, 3));

// /*
// тоже самое но стрелочной функцией
//  */

// const addArrow = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// };

// console.log(addArrow(2, 4, 5));

// /*
// если параметров 1 можно без скобок
//  */

// const x2 = a => {
//   console.log(`${a} x2`);
//   return a * 2;
// };

// console.log(x2(1234214));

// /*
// если без параметров то пустые скобки
//  */

// const withOutParams = () => {
//   console.log('нет параметров');
// };

// withOutParams();

// // ---------------------------------------------------------------
// // если у функции только возврат (только инструкция возврата)
// // ---------------------------------------------------------------
// const addOnlyReturn = function (a, b, c) {
//   return a + b + c;
// };

// // ---------------------------------------------------------------
// // можно без скобок {}
// // ---------------------------------------------------------------

// const addArrowOnlyReturn = (a, b, c) => a + b + c;

// console.log(addArrowOnlyReturn(1, 2, 3));

// /*
// если параметров 1 можно без скобок  + можно без скобок {}
//  */

// const x2OnlyReturn = a => a * 2;

// console.log(x2OnlyReturn(8));

// /*
// если без параметров то пустые скобки  + можно без скобок {}
//  */

// const withOutParamsOnlyReturn = () => console.log(`просто возврат`);

// withOutParamsOnlyReturn();

// // ---------------------------------------------------------------
// // --------------...args(аргументы в стрелках) У СТРЕЛОЧНЫХ ФУНКЦИЙ НЕТ ЛОКАЛЬНОЙ ПЕРЕМЕННОЙ arguments-----------------------
// // ---------------------------------------------------------------
// const addArgs = function (a, b, c) {
//   console.log(arguments);
//   return a + b + c;
// };
// console.log(addArgs(2, 4, 3));

// // ------------------------------------ В СТРЕЛКАХ НЕ РАБОТАЕТ ТАК---------------------------
// // const addArrowArgs! = (a, b, c) => {
// //   console.log(arguments);
// //   return a + b + c;
// // };
// // console.log(addArrowArgs!(1, 2, 3));

// // ------------------------------------ В СТРЕЛКАХ РАБОТАЕТ ВОТ ТАК---------------------------
// const addArrowArgs = (...args) => {
//   console.log(args);
// };
// addArrowArgs(2, 4, 3, 4);

// // ------------------------------------ Подводные камни---------------------------
// // ------------------------------------ Подводные камни---------------------------
// // ------------------------------------ Подводные камни---------------------------
// const fna = function () {
//   return {
//     name: 'Sergey',
//   };
// };
// console.log(fna());
// // ------------------------------------ В СТРЕЛКАХ НЕ РАБОТАЕТ ВОТ ТАК---------------------------

// // const fnaArrow = () => {
// //   nameArrow1: 'Sergey',
// // };

// // console.log(
// //   `оно думает = () => {
// //   nameArrow: 'Sergey',
// // } - тело функции`,
// //   fnaArrow()
// // );

// // ------------------------------------ В СТРЕЛКАХ РАБОТАЕТ ВОТ ТАК---------------------------

// const fnaArrowWork = () => ({
//   nameArrow: 'Sergey',
// });

// console.log(fnaArrowWork());

// /*
//  * Отложенный вызов: геолокация будем переделывать
//  */

// const onGetPositionSuccess = position => {
//   console.log('Это вызов onGetPositionSuccess');
//   console.log(position);
// };

// const onGetPositionError = error => {
//   console.log('Это вызов onGetPositionError');
//   console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(onGetPositionSuccess, onGetPositionError);

// /*
//  * Фильтр
//  */

// // const filter = function (array, test) {
// //   const filteredArray = [];
// const filter = (array, test) => {
//   const filteredArray = [];

//   for (const el of array) {
//     console.log(el);
//     const passed = test(el);

//     if (passed) {
//       filteredArray.push(el);
//     }
//   }

//   return filteredArray;
// };

// // ------------------------------------ В СТРЕЛКАХ РАБОТАЕТ ВОТ ТАК---------------------------

// // 1. надо передать функцию
// // 2. функция получает элемент массива
// // 3. если элемент массива удовлетворяет условию то функция вернет true
// // 3. если элемент массива НЕ удовлетворяет условию то функция вернет false

// // const callback1 = function (value) {
// //   return value >= 3;
// // };
// // const callback1 = value => value >= 3; // елси валуе меньше 3 тогда тру

// // const r1 = filter([1, 2, 3, 4, 5], callback1);
// // console.log(r1);
// const r1 = filter([1, 2, 3, 4, 5], value => value >= 3); // Функция с значением value которая дает тру если value >= 3
// console.log(r1); // не нужна переменная

// // const callback2 = function (value) {
// //   return value <= 4;
// // };

// // const callback2 = value => value <= 4; // елси валуе больше 3 тогда тру

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], value => value <= 4); // Функция с значением value которая дает тру если value <= 4
// console.log(r2);

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// // const getFruitsWithQuantity = function (fruit) {
// //   return fruit.quantity >= 120;
// // };

const getFruitsWithQuantity = fruit => fruit.quantity >= 120; // функция с параметром fruit (куда пишем обьект) возвращает тру если fruit.quantity (в обьекте ключ quantity >= 120 )

const addd = function () {
  console.log(arguments);
};

// console.log(addd(1, 2, 3, 4, 5, 10));
addd(1, 2, 3, 4, 5, 10);

const addds = (...args) => console.log(...args);
addds(1, 2, 3, 4, 5, 10, 11);

// const addss = () => console.log(arguments);
// addss(1, 2, 3, 4, 5, 10, 11);

const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39,
  },
];

const getActiveUsers = users => {
  const isActive = users.filter(user => user.isActive === true);
  const massiveUsersWhitchActive = isActive.flatMap(isActive => isActive.name);
  return isActive;
};
console.log(getActiveUsers(users));
