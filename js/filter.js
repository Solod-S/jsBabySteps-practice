// filter
// Не изменяет оригинальный массив.
// Поэлементно перебирает оригинальный массив.
// Возвращает новый массив.
// Добавляет в возвращаемый массив элементы которые удовлетворяют условию коллбек-функции.
// Если коллбек вернул true элемент добавляется в возвращаемый массив.
// Если коллбек вернул false элемент не добавляется в возвращаемый массив.
// Если ни один элемент не удовлетворил условию, возвращает пустой массив.

const numbers = [2, 4, 8, 10, 12, 19, 23, 89];

const numberBigerThenFive = numbers.filter(number => number > 5);
console.log(numberBigerThenFive);

const chetniiNumbers = numbers.filter(number => number % 2 === 0);
console.log(chetniiNumbers);

const max = 50;
const min = 12;
const mediumNumbers = numbers.filter(number => number > min && number < max);

console.log(`mediumNumbers`, mediumNumbers);

//////////////////////////////////////

const students = [
  { name: 'Манго', score: 83, online: false },
  { name: 'Поли', score: 59, online: true },
  { name: 'Аякс', score: 37, online: false },
  { name: 'Киви', score: 94, online: true },
  { name: 'Хьюстон', score: 64, online: false },
];

const onlyOnline = students.filter(student => student.online);

console.table(onlyOnline);

const onlyOfFline = students.filter(student => !student.online); //student.online === false;
console.table(onlyOfFline);

const passed = students.filter(student => student.score > 60);

console.log(passed);

const notPassed = students.filter(student => student.score < 60);

console.log(notPassed);
