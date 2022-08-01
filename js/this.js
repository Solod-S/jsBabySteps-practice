// *
//  * Функция это частный случай объекта -> ССЫЛОЧНЫЙ ТИП
//  */

// console.log('[] === []: ', [] === []);
// console.log('{} === {}: ', {} === {});
// console.log(
//     'function() {} === function() {}: ',
//     function () {} === function () {},
// );

// const fnA = function () {
//     console.log('hello');
// };

// const fnB = fnA;
// console.log('fnB === fnA: ', fnB === fnA);

/*
 * Контекст (this)
 *    - Где и как была объявлена функция НЕ ИМЕЕТ НИКАКОГО ВЛИЯНИЯ на контекст.
 *    - Контекст определяется В МОМЕНТ ВЫЗОВА ФУНКЦИИ, если он не привязан явно.
 */

const numberOne = {
  numbers: 12,
  Add() {
    console.log(`Показываем`, this.numbers + this.numbers);
  },
};

numberOne.Add(); // !!!!!!!!!!!!!!!!!!!!!!!!!  ЕСЛИ ФУНКЦИЯ ВЫЗЫВАЕТЬСЯ КАК МЕТОДОТ ОБЬЕКТА ТО THIS ВСЕГДА ССЫЛАЕТСЯ НА ЭТОТ ОБЬЕКТ

/*
 * Как метод объекта. В контексте объекта.
 */

const test1 = () => console.log(`test -> thsi`, this);

test1(); // в строгом режиме === undefined type="module" а не в строгом ==== test -> thsi Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// !!!!!!!!!!!!!!!!!!!!!!!!!  ЕСЛИ ФУНКЦИЯ ВЫЗЫВАЕТЬСЯ НЕ КАК МЕТОДОТ ОБЬЕКТА ТО THIS undefined (если не стогий режим то ВИНДОВ)

/*
 * Как метод объекта, но объявлена как внешняя функция.
 * В контексте объекта.
 */

const funcShowTag = function () {
  console.log(`funcShowTag -> this`, this);
  console.log(`funcShowTag -> this.tag`, this.tag);
};

// test2(); //// undefiend + EROR

const user = {
  name: 'Sergey',
  tag: 'javaScrip',
  // showTag: funcShowTag, // в обьект USER в свойства/ключ showTag записываю ссылку на функцию funcShowTag
};

user.showTag = funcShowTag; // в обьект USER в свойства/ключ showTag записываю ссылку на функцию funcShowTag

console.log(`user`, user);

user.showTag();

/*
 * Вызов без контекста, но объявлена как метод объекта.
 */

const userSecnd = {
  name: 'Inna',
  ShowName() {
    console.log(`ShowName`, this);
    console.log(`ShowName -> name`, this.name);
  },
};

userSecnd.ShowName();

const ShowNameLink = userSecnd.ShowName; // в переменную ShowNameLink я записываю ссылку userSecnd.ShowName

// ShowNameLink(); // ЧТО ЛЕЖИТ В ЭТОЙ ПЕРЕМЕННОЙ? ТУТ ЛЕЖИТ ФУНКЦИЯ! ПРОБУЕМ ЕЕ ВЫЗВАТЬ НО ЭТА ФУНКЦИЯ С THIS! НЕ ПРИВЯЗАНА К ОББЕКТУ => ОБЬЕКТ.ShowNameLink() !!! ОШИБКА

/*
 * Контекст в callback-функциях
 */

// const player = {
//   nick: 'Solik',
//   play_time: 12,
//   ShowNTime() {
//     console.log(`nick:`, this.nick);
//     console.log(`play-time:`, this.play_time);
//   },
// };

// player.ShowNTime();

// const startAction = function (linkForFunction) {
//   console.log(linkForFunction);

//   linkForFunction();
// };
// startAction(player.ShowNTime);

/*
 * Тренируемся 1
 */

// const fn = function () {
//     console.log('fn -> this', this);
// };

// fn(); // Какой this ???

/*
 * Тренируемся 2
 */

// const book = {
//     title: 'React for beginners',
//     showThis() {
//         console.log('showThis -> this', this);
//     },
//     showTitle() {
//         console.log('showTitle -> this.title', this.title);
//     },
// };

// book.showThis(); // Какой this ???

// const outerShowThis = book.showThis;
// outerShowThis(); // Какой this ???

// const outerShowTitle = book.showTitle;
// outerShowTitle(); // Какой this ???
/*
 * Тренируемся 3
 */

// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         console.log('changeColor -> this', this);
//         // this.color = color;
//     };

//     // changeColor(); // Какой this ???

//     const sweater = {
//         color: 'teal',
//     };

//     sweater.updateColor = changeColor;

//     // sweater.updateColor('red'); // Какой this ???

//     return sweater.updateColor;
// };

// const swapColor = makeChangeColor();

// swapColor('blue'); // Какой this ???

/*
 * Тренируемся 4
 */

const makeChangeColor = function () {
  const changeColor = function (color) {
    console.log('changeColor -> this', this);
  };

  return changeColor;
};

const updateColor = makeChangeColor();
// updateColor('yellow'); // Какой this ???

const hat = {
  color: 'blue',
  updateColor, //updateColor
};

hat.updateColor('orange'); // Какой this ???
console.log(hat);

/*
 * Тренируемся 5
 */

// const counter = {
//     value: 0,
//     increment(value) {
//         console.log('increment -> this', this);
//         this.value += value;
//     },
//     decrement(value) {
//         console.log('decrement -> this', this);
//         this.value -= value;
//     },
// };

// const updateCounter = function (value, operation) {
//     operation(value);
// };

// updateCounter(10, counter.increment);
// updateCounter(5, counter.decrement);
