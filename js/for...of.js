// 'join-split-includes-chaining-slice-splice-concat-indexOf-for_of-термальный операто';

// Перебираем масивы

// const MyCollection = ['Ps4', 'Xbox', 'switch'];

// MyCollection.push('ngage');
// console.table(MyCollection);
// const MyCollectionLastIndes = MyCollection.length - 1;
// for (let i = 0; i <= MyCollectionLastIndes; i += 1) {
//   console.log(MyCollection[i]);
// }

// --------------------------------------------------- for

// const saleryMnth = ['1th', '2th', '3th', '4th'];
// const lastSaleryMnth = saleryMnth.length - 1;
// let totalSalery = 0;
// let salery = 20000;
// console.table(saleryMnth);

// for (let i = 0; i <= lastSaleryMnth; i += 1) {
//   console.log(saleryMnth[i], 'manth', 'My salery', salery + 'uhy');
//   totalSalery = salery + totalSalery;
// }

// console.log(`За ${saleryMnth.length} месяцев Вы смогли отложить ${totalSalery}грн`);

// --------------------------------------------------- for...of (используем если нам не нужен индекс + нам не нужно изменять элементы масива (months += "mnth"), если нужен доступ к индексу и массиву то используем просто if

// const saleryMnths = ['September', 'October', 'November', 'December'];
// let totalSalery = 0;
// let salery = 20000;
// // console.table(saleryMnth);

// for (const months of saleryMnths) {
//   console.log(`Your salery for ${months}  = ${salery} uhy`);
//   totalSalery += salery;
// }
// console.log(`Your total salery is ${totalSalery} uhy`);
//////////// переменная manth создаеться только для операций внутри скобок

// ------------------------------------ЗАДАЧА 1------------------------------------

/*
 * Посчитать общую сумму покупок в корзине
 */
// Алгоритм;
// 1 сделать переменную total до цикла
// 2 перебрать массив в цикле
// 3 отобразить total в логе

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// // console.log(cart.length); // 10
// let totalCart = 0;
// const myMany = 333;
// for (let i = 0; i < cart.length; i += 1) {
//   console.log(`Первый товар стоит ${cart[i]}грн`);
//   totalCart += cart[i];
// }

// if (totalCart <= myMany) {
//   console.log(`Общая сумма заказа ${totalCart}грн`);
// } else {
//   console.log(`Общая сумма заказа ${totalCart}грн, на вашем балансе ${myMany}грн`);
// }
// -------------------------------------------доп решение и лучше (так как нам не нужно менять єлемент массива и счетчик итераций нам не нужен)

// const prices = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let totalPrice = 0;

// for (const price of prices) {
//   totalPrice += price;
// }

// console.log(totalPrice);

// ------------------------------------ЗАДАЧА 2------------------------------------

/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел в массиве.
 */

// Алгоритм;
// 1 сделать переменную total до цикла
// 2 перебрать массив в цикле
// 3 сделать if в котором будем отбирать четные числа + плюсовать их сумму в total (по принципу то что делиться на 2 без остатка деления )
// 4 отобразить total в логе

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
//   if (numbers[i] % 2 === 0) {
//     console.log('ЧЕТНОЕ');
//     total += numbers[i];
//   }
// }
// console.log('total:', total);

// ------------------
//  еще лучше (логика от обратного)
// Алгоритм;
// 1 сделать переменную total до цикла
// 2 перебрать массив в цикле
// 3 сделать if в котором будем отбирать числа по принципу то что делиться на 2 с остатком по делению и пропускать операцию добавления в total ()
// 4 отобразить total в логе

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
//   if (numbers[i] % 2 !== 0) {
//     console.log('нечетное');
//     continue; //пропустить итерацию
//   }
//   total += numbers[i];
// }
// console.log('total:', total);

// ------------------
//  еще лучше (логика от обратного) + без счетчика

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for (const number of numbers) {
//   console.log(number);
//   if (number % 2 !== 0) {
//     console.log('нечетное');
//     continue; //пропустить итерацию
//   }
//   total += number;
// }
// console.log('total:', total);

// ------------------------------------ЗАДАЧА 4------------------------------------

// *
//  * Напиши скрипт поиска логина
//  * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
//  * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
//  *
//  * - Сначала через for
//  * - Потом через for...of
//  * - Логика break
//  * - Метод includes() с тернарным оператором
//  */

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'k1widab3st';
// let message = `Пользователь ${loginToFind} не найден.`;

// -----------------------------первый вариант

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];
//   if (login === loginToFind) {
//     message = `Пользователь ${login} найден`;
//     break;
//   } else {
//     message = `Пользователь ${loginToFind} не найден.`;
//   }
// }

// или (меньше матрешки)

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];
//   if (login === loginToFind) {
//     message = `Пользователь ${login} найден`;
//     break;
//   }
//   message = `Пользователь ${loginToFind} не найден.`;
// }

// console.log(message);

// -----------------------------второй вариант (логика от обратного)

// for (let i = 0; i < logins.length; i += 1) {
//   const loin = logins[i];
//   if (loin !== loginToFind) {
//     message = `Пользователь ${loginToFind} не найден.`;
//   } else {
//     message = `Пользователь ${login} найден`;
//     break;
//   }
// }

// или (меньше матрешки)

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];
//   message = `Пользователь ${login} найден`;
//   if (login !== loginToFind) {
//     message = `Пользователь ${loginToFind} не найден.`;
//   }
// }

// console.log(message);

// -----------------------------третий вариант
// for (const login of logins) {
//   message = `Пользователь ${loginToFind} не найден.`;
//   if (login === loginToFind) {
//     message = `Пользователь ${loginToFind} найден`;
//     break;
//   }
// }

// console.log(message);

// -----------------------------четвертый вариант (includes поиск примитивов в массиве)

// for (const login of logins) {
//   message = `Пользователь ${loginToFind} не найден.`;
//   if (logins.includes(loginToFind)) {
//     message = `Пользователь ${loginToFind} найден`;
//     break;
//   }
// }

// console.log(message);

// -----------------------------пятый вариант (includes поиск примитивов в массиве + тернарный оператор ? (тру) : (фелис))

// for (const login of logins) {
//   message = logins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден`
//     : `Пользователь ${loginToFind} не найден.`;
// }

// console.log(message);

// ------------------------------------ЗАДАЧА 3------------------------------------

/*
 * Напиши скрипт поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

// const numbers = [51, 18, 13, 24, 7, 85, 19];

// let smallestNumber = numbers[0]; // я говорю что первое число самое маленькое

// for (const number of numbers) {
//   if (number < smallestNumber) {
//     // если число которое мы вытягиваем в цикле меньше числа smallestNumber, мы запиываем туда это число (которое опять будем сравнивать в сл цикле)
//     smallestNumber = number;
//   }
// }

// мы вытигявиваем по порядку каждый первый примитив в массиве и сравниваем его в цикле с smallestNumber

// console.log(smallestNumber);

// ------------------- тоже рабочий вариант

// const myArray = [51, 18, 13, 24, 7, 85, 19];
// let m = Math.min(...myArray);
// console.log(m);

// -------------------------------------------------------
//   --------------------------------------------

//  * Напиши скрипт поиска самого большего числа в массиве,
//  * при условии что числа уникальные (не повторяются).
//  */

// const numbers = [51, 18, 13, 24, 7, 85, 19];

// let bigeststNumber = numbers[0]; // я говорю что первое число самое маленькое

// for (const number of numbers) {
//   if (number > bigeststNumber) {
//     // если число которое мы вытягиваем в цикле меньше числа smallestNumber, мы запиываем туда это число (которое опять будем сравнивать в сл цикле)
//     bigeststNumber = number;
//   }
// }

// // мы вытигявиваем по порядку каждый первый примитив в массиве и сравниваем его в цикле с smallestNumber

// console.log(bigeststNumber);

// // ------------------- тоже рабочий вариант

// const myArray = [51, 18, 13, 24, 7, 85, 19];
// let m = Math.max(...myArray);
// console.log(m);

// ------------------------------------ЗАДАЧА 5------------------------------------

/*
 * Напиши скрипт, который объединяет все элементы массива в одно строковое значение.
 * Элементов может быть произвольное кол-во.
 * Пусть элементы массива  в строке будут разделены запятой.
 * - Сначала через for
 * - Потом через join()
 */

// ------------------1й

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax', 'Andy'];
// let string = '';
// let message;

// for (const friend of friends) {
//   string += friend + ', ';
// }
// message = string.slice(0, length - 2); //убираем запятую и пробел вконце

// console.log(message);

// ------------------2й

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let joinFriends = friends.join(', ');

// console.log(joinFriends);

// ------------------------------------ЗАДАЧА 6------------------------------------

/*
 * Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

// -----------------------------1й

// const string = 'jAVAsCRIPT';
// const letters = string.split(''); // разбиваем на массив (каждая буква отдельный элемент)
// let invertedLetter; // добавляем переменную для инвертированной буквы
// let invertedString = ''; // добавляем переменную для инвертированной строки

// for (const letter of letters) {
//   if (letter === letter.toLowerCase()) {
//     // сравниваем букву (часть массива) на равенство маленькому регистру
//     invertedLetter = letter.toUpperCase();
//     // делаем инвертивную букву и записываем в переменную
//     invertedString += invertedLetter;
//     // отправляем ее в переменную строку
//   } else {
//     // уже не сравниваем и так все понятно
//     invertedLetter = letter.toLowerCase();
//     // делаем инвертивную букву и записываем в переменную
//     invertedString += invertedLetter;
//     // отправляем ее в переменную строку
//   }
// }
// console.log(string);

// console.log(invertedString);

// -----------------------------2й от обратного

// const string = 'jAVAsCRIPT';
// const letters = string.split(''); // разбиваем на массив (каждая буква отдельный элемент)
// let invertedLetter; // добавляем переменную для инвертированной буквы
// let invertedString = ''; // добавляем переменную для инвертированной строки

// for (const letter of letters) {
//   if (letter !== letter.toLowerCase()) {
//     // сравниваем букву (часть массива) на неравенство маленькому регистру
//     invertedLetter = letter.toLowerCase();
//     // делаем инвертивную букву и записываем в переменную
//     invertedString += invertedLetter;
//     // отправляем ее в переменную строку
//   } else {
//     // уже не сравниваем и так все понятно
//     invertedLetter = letter.toUpperCase();
//     // делаем инвертивную букву и записываем в переменную
//     invertedString += invertedLetter;
//     // отправляем ее в переменную строку
//   }
// }
// console.log(string);

// console.log(invertedString);

// -----------------------------3й тернанрый оператор

// const string = 'jAVAsCRIPT';
// const letters = string.split(''); // разбиваем на массив (каждая буква отдельный элемент)
// let invertedLetter; // добавляем переменную для инвертированной буквы
// let invertedString = ''; // добавляем переменную для инвертированной строки

// for (const letter of letters) {
//   invertedString += //операция присваивания
//     letter === letter.toLowerCase() //операция сравнения (условия)
//       ? (invertedLetter = letter.toUpperCase()) //если да
//       : (invertedLetter = letter.toLowerCase()); //если нет
// }
// console.log(string);

// console.log(invertedString);

// ------------------------------------ЗАДАЧА 7------------------------------------

/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Заголовок статьи состоит только из букв и пробелов
 *
 * - Нормализируем строку
 * - Разбиваем по словам
 * - Сшиваем в строку с разделителями
 */

// Должно получиться top-10-benefits-of-react-framework

// -------------------------------1й вариант
// const title = 'Top 10 benefits of React framework';
// const titleNormal = title.toLowerCase(); //* - Нормализируем строку
// const titleToMassive = titleNormal.split(' '); //* - Разбиваем по словам
// const titleToSlug = titleToMassive.join('-'); //  * - Сшиваем в строку с разделителями

// console.log(titleToSlug);

// ------------------------------- 2й вариант по цепочки вызовов

// const title = 'Top 10 benefits of React framework';

// const slugChain = title.toLowerCase().split(' ').join('-'); //* - вначале на тайтл делаем toLowerCase, потом на РЕЗУЛЬТАТ делаем split и потом на РЕЗУЛЬТАТ делаем join

// console.log(slugChain);

// ------------------------------------ЗАДАЧА 8------------------------------------

/*
 * Напиши скрипт который считает сумму элементов двух массивов.
 */

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// const numbers = array1.concat(array2);
// let total = 0;

// for (const number of numbers) {
//   console.log(number);
//   total += number;
// }

// console.log(total);

// ------------------------------------ЗАДАЧА 9------------------------------------

/*
 * Работем с коллекцией карточек в trello
 * - Метод splice()
 * - Удалить
 * - Добавить
 * - Обновить
 */

// const cards = ['Карточка-1', 'Карточка-2', 'Карточка-3', 'Карточка-4', 'Карточка-5'];

// console.table(cards);

/*
 * Удаление (по индексу), метод indexOf()
 */

// const cardToRemove = 'Карточка-3'; // что нам нужно удалить и то что отправим в переменную index
// const index = cards.indexOf(cardToRemove); // скрипт чтобы высчитать индекс

// cards.splice(index, 1); // скрипт чтобы удалить по высчитаному индексу (переменная высчитываеться выше) и количество эл которые мы хотим удалить

// console.table(cards);

/*
 * Добавление (по индексу)
 */
// const cardToInsert = 'Карточка-6';
// const index = 3;

// cards.splice(index, 0, cardToInsert);
// console.table(cards);

/*
 * Обновление (по индексу)
 */
// const cardToUpdate = 'Карточка-4';
// const index = cards.indexOf(cardToUpdate);

// console.log(index);

// cards.splice(index, 1, 'Обновленная карточка-4');

// console.table(cards);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const consoles = ['Xbox', 'PS4', 'PS5', 'Switch', 'Tetris'];

// высчитываем индекс удаляемого обьекта и передаем в скрипт который удаляет его
// ---------------------------------------------------------------------
// splice(position, num) Удаляем
// position - указывает позицию (индекс) первого элемента для удаления
// num - определяет количество удаляемых элементов
// ---
// const removeConsole = 'Xbox';
// const findIndex = consoles.indexOf(removeConsole);
// consoles.splice(findIndex, 1);

// ДОБАВЛЯЕМ КАРТОЧКУ В ЗАДАННЫЙ ИНДЕКС
// ---------------------------------------------------------------------
// splice(position, 0, new_element_1, new_element_2, ...) ДОБАВЛЯЕМ

// const addConsole = 'Sega';
// const indexConsole = 1;
// consoles.splice(indexConsole, 0, addConsole);

// console.table(consoles);

// Замена (удаление + замена)
// ---------------------------------------------------------------------
// plice(position, num, new_element_1, new_element_2, ...)
// position - указывает позицию (индекс) первого элемента для удаления
// num - определяет количество удаляемых элементов
// Третий, четвертый и все последующие аргументы - это новые элементы, которые добавляются в массив.
// ---

// const replaceConsole = 'Atari';
// const indexConsole = 0;
// consoles.splice(indexConsole, 1, replaceConsole);

// console.table(consoles);
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const numbersForU = [1, 2, 3, 4, 5];

// высчитываем индекс удаляемого обьекта и передаем в скрипт который удаляет его
// ---------------------------------------------------------------------
// splice(position, num) Удаляем
// position - указывает позицию (индекс) первого элемента для удаления
// num - определяет количество удаляемых элементов
// ---

// const numberToDell = 3;
// const findIndexOfNumber = numbersForU.indexOf(numberToDell);
// numbersForU.splice(findIndexOfNumber, 1);
// console.table(numbersForU);

// ДОБАВЛЯЕМ КАРТОЧКУ В ЗАДАННЫЙ ИНДЕКС
// ---------------------------------------------------------------------
// splice(position, 0, new_element_1, new_element_2, ...) ДОБАВЛЯЕМ
// ---

// const addNumber = 22;
// const indexNumber = 1;
// numbersForU.splice(indexNumber, 0, addNumber);
// console.table(numbersForU);

// Замена (удаление + замена)
// ---------------------------------------------------------------------
// plice(position, num, new_element_1, new_element_2, ...)
// position - указывает позицию (индекс) первого элемента для удаления
// num - определяет количество удаляемых элементов
// Третий, четвертый и все последующие аргументы - это новые элементы, которые добавляются в массив.
// ---
// const replaceNumber = 33;
// const indexNumber = 0;
// numbersForU.splice(indexNumber, 1, replaceNumber);
// console.table(numbersForU);
