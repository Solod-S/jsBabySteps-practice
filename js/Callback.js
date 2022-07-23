/*
 * Функция обратного вызова (callback)
 * - Функция может принимать другие функции как параметры
 * - Функция которая передаётся другой функции как аргумент называетс
 *   «функцией обратного (отложенного) вызова» (callback-функция)
 * - Функция которая принимает другую функцию как параметр
 *   или возвращает функцию как результат своей работы называется «функцией высшего порядка»
 */

// const fNa = function (message, callback) {
//   // callback = fNb
//   console.log(message);
//   callback();
// };

// const fNb = function () {
//   console.log('Консоль лог fNb');
// };

// console.log('запускаю вызов fNb', fNb);

// fNa('запускаю вызов fNa + колбек', fNb);

// // -------------
// const fNa2 = function (message, callback) {
//   // callback = fNb2
//   console.log(message);
//   callback(100);
// };

// const fNb2 = function (number) {
//   console.log('Консоль лог fNb2', number);
// };

// console.log('запускаю вызов fNb2', fNb2);

// fNa2('запускаю вызов fNa2 + колбек', fNb2);

/*
 * функция doMath(a, b, callback)
 */

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// };

// const add = function (x, y) {
//   return x + y;
// };

// const minus = function (x, y) {
//   return x - y;
// };

// const divide = function (x, y) {
//   return x / y;
// };
// const multiply = function (x, y) {
//   return x * y;
// };

// doMath(2, 2, add);
// doMath(2, 3, minus);
// doMath(10, 3, divide);
// doMath(10, 3, multiply);

// -------------------------------
// -------------------------------

// const doMath2 = function (a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// };

// doMath2(2, 4, function (x, y) {
//   return x + y;
// });

//записываем функцию а не обьявляем ее (инлайн функция)

/*
 * Отложенный вызов: регистрация событий
 */

// const btn = document.querySelector('.js-bnt'); // получаем ссылку на кнопку
// console.log(btn);
// const handleBtnClick = function () {
//   console.log('Ты нажал на кнопку');
// };
// //нам нужно зарегистрировать слушателя и віполнить код
// btn.addEventListener('click', handleBtnClick); //в скобках пишем событие  + код который запускается при этом событии (функция)
// // -------------------------------
// const btnSec = document.querySelector('.js-bnt-sec');

// const handleBtnClickSec = function () {
//   console.log('Ты нажал вторую кнопку');
// };
// btnSec.addEventListener('click', handleBtnClickSec);
// // -------------------------------
// const btnThrd = document.querySelector('.js-bnt-thrd');
// const handleBtnClickThrd = function () {
//   console.log('ZDOLBAL!');
// };
// btnThrd.addEventListener('click', handleBtnClickThrd);

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

// const callback1 = function (value) {
//   return value >= 3;
// };

// const filter = function (array, callback) {
//   const fillteredArray = [];
//   for (let i of array) {
//     const passed = callback(i); // const callback1 дает true
//     if (passed) {
//       fillteredArray.push(i);
//     }
//   }
//   console.log(fillteredArray);
// };

// const callback2 = function (value) {
//   return value <= 2;
// };

// filter([1, 2, 3, 4, 5], callback1);
// filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);

// -------------------------------
// пробуем четное и нечетное
// -------------------------------

// const callback3 = function (value) {
//   return value % 2 === 0; // четное
// };
// const callback4 = function (value) {
//   return value % 2 !== 0; // не четное (нечетное)
// };
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

// filter([1, 12412, 3, 4, 12412, 6, 7, 8, 9, 10, 11, 22], callback3);
// filter([1, 2, 12412, 4, 5, 6, 7, 8, 3242, 53251, 21512, 12412], callback4);
// -------------------------------
// пробуем с масивом обьектами
// -------------------------------

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];
// const quantity = function (value) {
//   return value.quantity >= 150; // возвращзает фрукты с количеством больше или ровно 150
// };

// const fresh = function (value) {
//   return value.isFresh === true;
// };

// filter(fruits, quantity);
// filter(fruits, fresh);
// -------------------------------
// пробуем с масивом обьектами
// -------------------------------

// const alcohol = [
//   { name: 'Jack Daniels', price: 200, available: true },
//   { name: 'Blended Scotch', price: 160, available: false },
//   { name: 'Hoegaarden', price: 50, available: true },
//   { name: 'Obolon', price: 10, available: false },
// ];

// const filterAlcohol = function (array, callback) {
//   const result = [];
//   for (let i of array) {
//     const passed = callback(i); // возвращает тру
//     if (passed) {
//       result.push(i);
//     }
//   }
//   console.log(result);
// };

// const priceBelove100 = function (value) {
//   return value.price <= 100;
// };

// const priceAbove100 = function (value) {
//   return value.price >= 100;
// };
// const available = function (value) {
//   return value.available === true;
// };
// const notAvailable = function (value) {
//   return value.available !== true;
// };

// filterAlcohol(alcohol, priceBelove100);
// filterAlcohol(alcohol, priceAbove100);
// filterAlcohol(alcohol, available);
// filterAlcohol(alcohol, notAvailable);

// ---------------------------------------1222222222222222222222222222222222222---------------------------------------1222222222222222222222222222222222222
// ЗАМЫКАНИЯ 02-closures
// ---------------------------------------1222222222222222222222222222222222222---------------------------------------1222222222222222222222222222222222222
/*
 * Функция результатом своей работы может возвращать другую функцию.
 *
 * Возвращаемая функция во время вызова будет иметь доступ
 * ко всем локальным переменным (области видимости)
 * родительской функции (той из которой её вернули),
 * это называется «замыкание».
 */

const fnA = function (smth) {
  const first = `testing ${smth}`;
  const someName = 'Alex';
  const innerFunction = function () {
    console.log(someName);
    console.log(first);
    console.log(`Вызов innerFunction`);
  };
  return innerFunction; // когда эта функция возвращаеться она замыкаеться и получает доступ к локальным переменным first и someName
};

const fnB = fnA(1);

fnB();
console.log(fnB);

const makeconsole = function (gameconsole) {
  //замыкание на gameconsole
  const makeRelise = function (game) {
    console.log(`${gameconsole} готовит к релизу ${game}`);
  };
  return makeRelise;
};

const playstation = makeconsole('Playstation'); //замыкаем
const xbox = makeconsole('Xbox'); //замыкаем
playstation('Dark Sols');
playstation('Kill Zone');
xbox('halo');
xbox('Mortal Kombat');
/*

 */
const makePosition = function (position) {
  //замыкание на position
  const makeSalery = function (sallery) {
    console.log(`${position} зарабатывает в год $${sallery}`);
  };
  return makeSalery;
};

const manager = makePosition('Manager'); //замыкаем
const security = makePosition('Security'); //замыкаем
manager(15000);
security(12000);

/*

 */

const makeCar = function (car) {
  //замыкание на car
  const makeEnginePower = function (power) {
    console.log(`Автомобиль ${car} обладает мощностьб двигателя ${power} литров`);
  };
  return makeEnginePower;
};

const suzukiVitara = makeCar('Suzuki Vitara'); //замыкаем
const jeepCompass = makeCar('Jeep Compass'); //замыкаем
jeepCompass(1.9);
jeepCompass(1.2);
suzukiVitara(1.6);

/*
 * Округлятор 🤷‍♂️
 */

// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint); // 3
// const withDecimals = Number(floatingPoint.toFixed(2)); // 3.46

// const rounder = function (number, places) {
//     return Number(number.toFixed(places));
// };

// console.log(rounder(3.4567, 2));
// console.log(rounder(3.4567, 3));
// console.log(rounder(5.1234, 2));
// console.log(rounder(3.4567, 3));

/*
 * Округлятор  через замыкание
 */

const rounder = function (places) {
  const numbersToRound = function (number) {
    console.log(Number(number.toFixed(places)));
  };
  return numbersToRound;
};

const rounder2 = rounder(2);
const rounder3 = rounder(3);
rounder2(1.234242);
rounder2(2.234242);
rounder3(2.234242);

/*
 * Приватные данные и функции - скрытие реализации, интерфейс
 */

const salaryManagerFactory = function (employeeName, baseSalary = 0) {
  let salary = baseSalary;

  return {
    raise(amount) {
      if (amount > 1000) {
        return 'Ты офигел?';
      }

      salary += amount;
    },
    lower(amount) {
      salary -= amount;
    },
    current() {
      return `Текущая зарпалата ${employeeName} - ${salary}`;
    },
  };
};

const salaryManager = salaryManagerFactory('Mango', 5000);

console.log(salaryManager.current());

console.log(salaryManager.raise(10000000));

console.log(salaryManager.current());

// const myLibFactory = function () {
//     let value = 0;

//     const add = function (num) {
//         value += num;
//     };

//     return {
//         add: add,
//         getValue() {
//             return value;
//         },
//     };
// };

// const myLib = myLibFactory();

// console.dir(myLib.getValue);

// console.log(myLib);
// console.log(myLib.getValue());
// myLib.add(10);
// console.log(myLib.getValue());
