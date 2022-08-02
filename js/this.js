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

const pizzaPalace = {
  pizzas: ['Supercheese', 'Smoked', 'Four meats'],
  // Change code below this line
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza;

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
  // Change code above this line
};

console.log(pizzaPalace.order('Supercheese'));

////
////
///
const customer = {
  username: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['Burger', 'Pizza', 'Salad'],
  // Change code below this line
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, 'Steak');
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

////
////
///

const historyService = {
  orders: [
    { email: 'jacob@hotmail.com', dish: 'Burrito' },
    { email: 'solomon@topmail.net', dish: 'Burger' },
    { email: 'artemis@coldmail.net', dish: 'Pizza' },
    { email: 'solomon@topmail.net', dish: 'Apple pie' },
    { email: 'jacob@hotmail.com', dish: 'Taco' },
  ],
  // Change code below this line
  getOrdersLog() {
    return orders;
    this.orders.map(order => `email: ${order.email} dish: ${order.dish}`).join(' - ');
  },
  getEmails() {
    const emails = orders.map(order => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return orders.filter(order => order.email === email);
  },
  // Change code above this line
};

/*
 * Тренируемся 5
 */

const counter = {
  value: 0,
  increment(value) {
    console.log('increment -> this', this);
    this.value += value;
  },
  decrement(value) {
    console.log('decrement -> this', this);
    this.value -= value;
  },
  shovValue() {
    return console.log(this.value);
  },
};

const updateCounter = function (value, operation) {
  operation(value);
};

// updateCounter(10, counter.increment);
// updateCounter(5, counter.decrement);

updateCounter(10, counter.increment);
