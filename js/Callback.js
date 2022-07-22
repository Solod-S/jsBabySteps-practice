/*
 * Функция обратного вызова (callback)
 * - Функция может принимать другие функции как параметры
 * - Функция которая передаётся другой функции как аргумент называетс
 *   «функцией обратного (отложенного) вызова» (callback-функция)
 * - Функция которая принимает другую функцию как параметр
 *   или возвращает функцию как результат своей работы называется «функцией высшего порядка»
 */

const fNa = function (message, callback) {
  // callback = fNb
  console.log(message);
  callback();
};

const fNb = function () {
  console.log('Консоль лог fNb');
};

console.log('запускаю вызов fNb', fNb);

fNa('запускаю вызов fNa + колбек', fNb);

// -------------
const fNa2 = function (message, callback) {
  // callback = fNb2
  console.log(message);
  callback(100);
};

const fNb2 = function (number) {
  console.log('Консоль лог fNb2', number);
};

console.log('запускаю вызов fNb2', fNb2);

fNa2('запускаю вызов fNa2 + колбек', fNb2);

/*
 * функция doMath(a, b, callback)
 */

const doMath = function (a, b, callback) {
  const result = callback(a, b);
  console.log(result);
};

const add = function (x, y) {
  return x + y;
};

const minus = function (x, y) {
  return x - y;
};

const divide = function (x, y) {
  return x / y;
};
const multiply = function (x, y) {
  return x * y;
};

doMath(2, 2, add);
doMath(2, 3, minus);
doMath(10, 3, divide);
doMath(10, 3, multiply);

// -------------------------------
// -------------------------------

const doMath2 = function (a, b, callback) {
  const result = callback(a, b);
  console.log(result);
};

doMath2(2, 4, function (x, y) {
  return x + y;
});

//записываем функцию а не обьявляем ее (инлайн функция)

/*
 * Отложенный вызов: регистрация событий
 */

const btn = document.querySelector('.js-bnt'); // получаем ссылку на кнопку
console.log(btn);
const handleBtnClick = function () {
  console.log('Ты нажал на кнопку');
};
//нам нужно зарегистрировать слушателя и віполнить код
btn.addEventListener('click', handleBtnClick); //в скобках пишем событие  + код который запускается при этом событии (функция)
// -------------------------------
const btnSec = document.querySelector('.js-bnt-sec');

const handleBtnClickSec = function () {
  console.log('Ты нажал вторую кнопку');
};
btnSec.addEventListener('click', handleBtnClickSec);
// -------------------------------
const btnThrd = document.querySelector('.js-bnt-thrd');
const handleBtnClickThrd = function () {
  console.log('ZDOLBAL!');
};
btnThrd.addEventListener('click', handleBtnClickThrd);

/*
 * Отложенный вызов: геолокация
 */
// const getCurrentPositionSuccess = function (success) {
//   console.log(`Success!!!!`, success);
// };
// const getCurrentPositionError = function (error) {
//   console.log('Error!!!', error);
// };
// navigator.geolocation.getCurrentPosition(getCurrentPositionSuccess, getCurrentPositionError); // первая будет выполнена если получиться и вторая если не получиться

/*
 * Отложенный вызов: интервалы (асинхронный код)
 */

// const callback = function () {
//   console.log('Через 2 секунды внутри колбека в таймауте');
// };

// console.log('В коде перед таймаутом');
// setTimeout(callback, 2000); // отложенный запуск через 2 секунды
// console.log('В коде после таймаута');

/*
 * Отложенный вызов: http-запрос
 * - API URL: https://pokeapi.co/api/v2/pokemon
 */

// const onRequestSuccess = function (response) {
//   console.log('Вызов функции onRequestSuccess после успешного ответа бекенда');
//   console.log(response);
// };

// fetch('https://pokeapi.co/api/v2/pokemon')
//   .then(res => res.json())
//   .then(onRequestSuccess);

/*
 * Фильтр
 */

const callback1 = function (value) {
  return value >= 3;
};

const filter = function (array, callback) {
  const fillteredArray = [];
  for (let i of array) {
    const passed = callback(i); // const callback1 дает true
    if (passed) {
      fillteredArray.push(i);
    }
  }
  console.log(fillteredArray);
};

const callback2 = function (value) {
  return value <= 2;
};

filter([1, 2, 3, 4, 5], callback1);
filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);

// -------------------------------
// пробуем четное и нечетное
// -------------------------------

const callback3 = function (value) {
  return value % 2 === 0; // четное
};
const callback4 = function (value) {
  return value % 2 !== 0; // не четное (нечетное)
};
// const filter2 = function (array, callback) {
//   const resulArray = [];
//   for (let i of array) {
//     const passed = callback(i);
//     if (passed) {
//       resulArray.push(i);
//     }
//   }
//   console.log(resulArray);
// };

filter([1, 12412, 3, 4, 12412, 6, 7, 8, 9, 10, 11, 22], callback3);
filter([1, 2, 12412, 4, 5, 6, 7, 8, 3242, 53251, 21512, 12412], callback4);
// -------------------------------
// пробуем с масивом обьектами
// -------------------------------

const fruits = [
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'grapes', quantity: 150, isFresh: false },
  { name: 'bananas', quantity: 100, isFresh: true },
];
const quantity = function (value) {
  return value.quantity >= 150; // возвращзает фрукты с количеством больше или ровно 150
};

const fresh = function (value) {
  return value.isFresh === true;
};

filter(fruits, quantity);
filter(fruits, fresh);
// -------------------------------
// пробуем с масивом обьектами
// -------------------------------

const alcohol = [
  { name: 'Jack Daniels', price: 200, available: true },
  { name: 'Blended Scotch', price: 160, available: false },
  { name: 'Hoegaarden', price: 50, available: true },
  { name: 'Obolon', price: 10, available: false },
];

const filterAlcohol = function (array, callback) {
  const result = [];
  for (let i of array) {
    const passed = callback(i); // возвращает тру
    if (passed) {
      result.push(i);
    }
  }
  console.log(result);
};

const priceBelove100 = function (value) {
  return value.price <= 100;
};

const priceAbove100 = function (value) {
  return value.price >= 100;
};
const available = function (value) {
  return value.available === true;
};
const notAvailable = function (value) {
  return value.available !== true;
};

filterAlcohol(alcohol, priceBelove100);
filterAlcohol(alcohol, priceAbove100);
filterAlcohol(alcohol, available);
filterAlcohol(alcohol, notAvailable);
