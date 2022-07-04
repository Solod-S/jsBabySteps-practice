// --------------------задача 1

/*
 * Напиши функцию calculateTotalPrice(items)
 * которая принимает массив цен (чисел) и возвращает их сумму
 */

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (const value of cart) {
//   total += value;
// }

// console.log('Total: ', total);
// ------------------------------------------------------------------------------

// const calculateTotalPrice = function (items) {
//   console.log('items внутри функции: ', items);

//   let total = 0;

//   for (const item of items) {
//     total += item;
//   }

//   return total;
// };

// const r1 = calculateTotalPrice([1, 2, 3]);

// console.log(`Общая сумма покупок ${r1}`); // 6
// console.log(calculateTotalPrice([5, 10, 15, 20])); // 50
// console.log(calculateTotalPrice([100, 200, 300])); // 600
// ------------------------------------------------------------------------------
// const calculateTotalPrice = function (items) {
//   let total = 0;
//   for (let item of items) {
//     total += item;
//   }
//   return total;
// };

// console.log('Сумма сложенных', calculateTotalPrice([5, 10, 15, 20]));

// // - Вычитания (ОЧЕНЬ ТОПОРНОЕ)

// const deductTotalprice = function (items) {
//   let total = 0;
//   for (let item of items) {
//     total -= item;
//   }
//   return total;
// };

// console.log('Сумма вычетания', deductTotalprice([2, 6, 2, 4]));

// // - УМНОЖЕНИЕ (ОЧЕНЬ ТОПОРНОЕ)

// const multiplyTotalprice = function (items) {
//   let total = 0;
//   const firstNuber = items.slice(0, 1); //можно так items[0]
//   //   console.log(`1я цифра которую добавляем в тотал ${firstNuber}`);
//   total += firstNuber;
//   const preItems = items.splice(0, 1);
//   //  1я цифра которую удаляем из масива console.log(` ${preItems}`);
//   for (let item of items) {
//     total *= item;
//   }
//   return total;
// };
// console.log('Сумма умноженнЫх', multiplyTotalprice([2, 635, 2]));
// console.log('Сумма умноженнЫх', multiplyTotalprice([5, 10, 15, 20]));

// // - Деление (ОЧЕНЬ ТОПОРНОЕ)

// const divideTotalprice = function (items) {
//   let total = 0;
//   const firstNuber = items.slice(0, 1); //можно так items[0]
//   total += firstNuber;
//   const preItems = items.splice(0, 1);
//   for (let item of items) {
//     total /= item;
//   }
//   return total;
// };
// console.log('Сумма разделенных', divideTotalprice([2, 6, 2, 4]));

// --------------------задача 2

/*
 * Напиши функцию logItems(items) для перебора и логирования массива
 */

// const logItems = function (items) {
//   for (let item of items) {
//     console.log(item);
//   }
//   return logItems;
// };

// logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
// logItems([1, 2, 3, 4, 5]);
// logItems(['клавиатура', 'наушники', 'часы']);

// --------------------задача 3

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// const loginCheck = function (item) {
//   let success = `Пользователь ${item} найден!`;
//   let noSuccess = `Пользователь ${item} не найден!`;
//   for (let login of logins) {
//     if (item === login) {
//       return success;
//     }
//     return noSuccess;
//   }
// };

// console.log(loginCheck('aj4xth3m4n'));

/*
 * Напиши функцию findLogin(allLogins, login) для поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 */
// ------------------------------------------------------------------------------

// const LoginInLogins = function (allLogins, loginTocheck) {
//   const hasLogin = allLogins.includes(loginTocheck);
//   let success = `Пользователь ${loginTocheck} найден!`;
//   let noSuccess = `Пользователь ${loginTocheck} не найден!`;
//   if (hasLogin) {
//     return success;
//   }

//   return noSuccess;
// };

// console.log(LoginInLogins(logins, 'avocod3r'));
// console.log(LoginInLogins(logins, 'k1widab3st'));
// console.log(LoginInLogins(logins, 'jam4l'));
// console.log(LoginInLogins(logins, 'aj4xth3m4n'));
// ----------------------------------------------немного по другому--------------------------------
// const LoginInLogins = function (allLogins, loginTocheck) {
//   let success = `Пользователь ${loginTocheck} найден!`;
//   let noSuccess = `Пользователь ${loginTocheck} не найден!`;
//   for (let allLogin of allLogins) {
//     if (allLogin === loginTocheck) {
//       return success;
//     }
//   }

//   return noSuccess;
// };

// console.log(LoginInLogins(logins, 'avocod3r'));
// console.log(LoginInLogins(logins, 'k1widab3st'));
// console.log(LoginInLogins(logins, 'jam4l'));
// console.log(LoginInLogins(logins, 'aj4xth3m4n'));

// ----------------------------------------------через тернарник--------------------------------
// const LoginInLogins = function (allLogins, loginTocheck) {
//   const success = `Пользователь ${loginTocheck} найден!`;
//   const noSuccess = `Пользователь ${loginTocheck} не найден!`;
//   return allLogins.includes(loginTocheck) ? success : noSuccess;
// };

// console.log(LoginInLogins(logins, 'avocod3r'));
// console.log(LoginInLogins(logins, 'k1widab3st'));
// console.log(LoginInLogins(logins, 'jam4l'));
// console.log(LoginInLogins(logins, 'aj4xth3m4n'));

// --------------------задача 4

/*
 * Напиши функцию findSmallesNumber(numbers) для поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

// let findSmallesNumber = function (numbers) {
//   let smallestNumber = numbers[0];
//   for (let number of numbers) {
//     if (number < smallestNumber) {
//       smallestNumber = number;
//     }
//   }
//   return smallestNumber;
// };

// console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
// console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
// console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4

// --------------------задача 5

//  * Напиши функцию findSmallesNumber(numbers) для поиска самого большего числа в массиве,
//  * при условии что числа уникальные (не повторяются).
//  */

// let findSmallesBigest = function (numbers) {
//   let bigestNumber = numbers[0];
//   for (let number of numbers) {
//     if (number > bigestNumber) {
//       bigestNumber = number;
//     }
//   }
//   return bigestNumber;
// };

// console.log(findSmallesBigest([3, 8, 12, -2, 15])); // -2
// console.log(findSmallesBigest([100, 54, 8, 12, 47])); // 8
// console.log(findSmallesBigest([7, 21, 84, 15, 4])); // 4

// --------------------задача 6

/*
 * Напиши функцию changeCase(string) которая заменяет регистр
 * каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

// const changeCase = function (items) {
//   const spliteItems = items.split('');
//   let slugItems = '';

//   for (let spliteItem of spliteItems) {
//     if (spliteItem === spliteItem.toLowerCase()) {
//       spliteItem = spliteItem.toUpperCase();
//       slugItems += spliteItem;

//     } else {
//       spliteItem = spliteItem.toLowerCase();
//       slugItems += spliteItem;
//     }

//   }
//   return `Было ${items} и стало ${slugItems}`;
// };
// console.log(changeCase('qweRTY')); // QWErty
// console.log(changeCase('mAnGo')); // MaNgO
// console.log(changeCase('AjAx')); // aJaX

// ----------------------------------------------через тернарник--------------------------------

// const changeCase = function (items) {
//   const spliteItems = items.split('');
//   let slugItems = '';

//   for (let spliteItem of spliteItems) {
//     spliteItem === spliteItem.toLowerCase()
//       ? (slugItems += spliteItem.toUpperCase())
//       : (slugItems += spliteItem.toLowerCase());
//   }

//   return `Было ${items} и стало ${slugItems}`;

// }
// console.log(changeCase('qweRTY')); // QWErty
// console.log(changeCase('mAnGo')); // MaNgO
// console.log(changeCase('AjAx')); // aJaX

// ----------------------------------------------через тернарник еще лучше--------------------------------

// const changeCase = function (items) {
//   const spliteItems = items.split('');
//   let slugItems = '';

//   for (let spliteItem of spliteItems) {
//     const itemInLowerCase = spliteItem === spliteItem.toLowerCase();
//     slugItems += itemInLowerCase ? spliteItem.toLowerCase() : spliteItem.toUpperCase();
//   }

//   return `Было ${items} и стало ${slugItems}`;
// };
// console.log(changeCase('qweRTY')); // QWErty
// console.log(changeCase('mAnGo')); // MaNgO
// console.log(changeCase('AjAx')); // aJaX

// --------------------задача 7
/*
 * Напиши функцию slugify(string) которая получает строку и возвращает URL-slug
 * Строка состоит только из букв и пробелов
 */

// const slugify = function (string) {
//   let slug = string.split(' ').join('-').toLowerCase();
//   return slug;
// };

// console.log(slugify('Top 10 benefits of React framework'));
// console.log(slugify('Azure Static Web Apps are Awesome'));
// console.log(slugify('Technical writing tips for non-native English speakers'));

// --------------------задача 8

/*
 * Псевдомассив arguments и Array.from и ...
 */
// ----------------------------------------------Псевдомассив arguments--------------------------------

// const fn = function () {
//   console.log(arguments); // ПСЕВДОМАСИВ для отображения неизвестного количество входячих аргументо (мы не знаем сколько параметров нужно создавать для функции)

//   const args = Array.from(arguments); // ПСЕВДОМАСИВ перегоняем в нормальный массив со всеми методами

//   console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// ----------------------------------------------БОЛЕЕ СОВРЕМЕННЫЙ СПОСОБ--------------------------------

// const fn = function (a, b, c, ...args) { // тоже самое что const args = Array.from(arguments)
//   console.log(`${a} ${b} ${c}`);
//   console.log(args); // ПСЕВДОМАСИВ для отображения неизвестного количество входячих аргументо (мы не знаем сколько параметров нужно создавать для функции)
// };

// fn('hello', 1, 2, 3);
// fn('aloha', 1, 2, 3, 4, 5);
// fn('hi', 1, 2, 3, 4, 5, 6, 7);

// --------------------задача 8

/*
 * Напиши функцию add для сложения произвольного количества аргументов (чисел)
 * - Операция ... (rest)
 */

// const add = function (...numbers) {
//   let total = 0;
//   for (let number of numbers) {
//     total += number;
//   }
//   console.log(numbers.join(' + '), '=', total);
//   return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

// --------------------задача 9

/*
 * Напиши функцию filterNumbers(array [, number1, ...]) которая:
 * - первым аргументом принимает массив чисел
 * - после первого аргумента может быть произвольное количество других аргументов которые будут числами.
 * - Функция должна вернуть новый массив, в котором будут только те аргументы, начиная со второго,
 *   для которых есть аналог в оригинальном массиве.
 */

// const filterNumbers = function (numbersOfBase, ...numbersWhichSearch) {
//   let result = [];
//   // console.log(numbersOfBase);
//   // console.log(numbersWhichSearch);
//   for (let numberWhichSearch of numbersWhichSearch) {
//     if (numbersOfBase.includes(numberWhichSearch)) {
//       result.push(numberWhichSearch);
//     }
//   }
//   return result;
// };

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]

// const filterNumbers = function (array, ...args) {
//   console.log('array: ', array);
//   console.log('args: ', args);
//   const uniqueElements = [];

//   for (const element of array) {
//     if (args.includes(element)) {
//       uniqueElements.push(element);

//       console.log(`${element} есть везде!`);
//     }
//   }

//   return uniqueElements;
// };

// --------------------задача 9// --------------------задача 9// --------------------задача 9// --------------------задача 9// --------------------задача 9

// Алгоритм;
// 1 сделать переменную total до цикла
// 2 перебрать массив в цикле
// 3 сделать if в котором будем отбирать числа по принципу то что делиться на 2 с остатком по делению и пропускать операцию добавления в total ()
// 4 отобразить total в логе

// const funct = function (start, end) {
//   let total = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       total.push(i);
//     }
//   }
//   return console.log(total);
// };

// console.log(funct(6, 12));

const includes = function (array, value) {
  let result;
  for (let item of array) {
    console.log(item);
    if (item === value) {
      return true;
    }
  }
  return false;
};

console.log(includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jup22iter'));
