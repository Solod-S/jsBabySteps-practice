// find
// Не изменяет оригинальный массив.
// Поэлементно перебирает оригинальный массив.
// Возвращает первый элемент удовлетворяющий условию, то есть когда коллбек возвращает true.
// Если ни один элемент не подошёл, то есть для всех элементов коллбек вернул false, метод возвращает undefined.
// ИСПОЛЬЗУЕМ ДЛЯ ПОИСКА УНИКАЛЬНЫХ ЭЛЕМЕНТОВ В КОЛЕКЦИИ

const numbers = [2, 4, 5, 10, 22, 99, 1231];

const bigerThenTen = numbers.find(number => number > 10); //2, 4, 5, 10, 22... дальне ше идет

console.log(bigerThenTen); // 22

const value = 10;
const findNumber = numbers.find(number => number === value);

console.log(findNumber);

////

const students = [
  { name: 'Манго', score: 83, online: false },
  { name: 'Поли', score: 59, online: true },
  { name: 'Аякс', score: 37, online: false },
  { name: 'Киви', score: 94, online: true },
  { name: 'Киви', score: 64, online: false },
];

const searchName = 'Киви';

///// если нужно найти первое совпадение

const findName = students.find(student => student.name === searchName);

console.log(findName);
///// если нужно найти больше одного поискового значения

const findMoreName = students.filter(student => student.name === searchName);

console.log(findMoreName);

const functionForsearch = (allstudents, searchName) => {
  return allstudents.filter(student => student.name === searchName);
};

console.log('!!!', functionForsearch(students, 'Киви'));

const functionOnline = (allstudents, online) => {
  return allstudents.filter(student => student.online === online);
};

console.log(`functionOnline`, functionOnline(students, true));

const functionFindName = (allstudents, searchname) =>
  allstudents.find(student => student.name === searchname);
// const functionFindName = (allstudents, searchname) =>
//   allstudents.find(({ name }) => name === searchname);
console.log(`functionFindName`, functionFindName(students, 'Киви'));
