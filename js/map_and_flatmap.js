// Map
// Поэлементно перебирает оригинальный массив.
// Не изменяет оригинальный массив.
// Результат работа коллбек-функции записывается в новый массив.
// Возвращает новый массив такой же длины.

const numbers = [2, 4, 6, 8];

const numbersDouble = numbers.map(number => number * 2);

console.log(numbersDouble);

/// с массивом обьектов

const students = [
  { name: 'Манго', score: 83, online: false },
  { name: 'Поли', score: 59, online: true },
  { name: 'Аякс', score: 37, online: false },
  { name: 'Киви', score: 94, online: true },
  { name: 'Хьюстон', score: 64, online: false },
];

//как работает
const studentsNames = students.map(student => {
  console.log(student);
});
console.log(studentsNames);

//возвращаем массив имен

const names = students.map(student => student.name);
console.log(names);

//возвращаем массив балов

const score = students.map(student => student.score);
console.log(score);

//возвращаем обьект с информацией

const userOnline = students.map(student => {
  return {
    name: student.name,
    nline: student.online,
  };
});

console.log(userOnline);

const userOnlinever2 = students.map(({ name, online }) => ({ name, online }));

console.log(userOnlinever2);

//Однотипную операцию для всем обьектов

const addGroup = students.map(student => {
  return {
    ...student, // распылить массив
    group: 'NinjaTeam', // добавить новое свойство + значение
  };
});

console.log(addGroup);

// операцию для конкретного обьекта (имзенить свойство только в одном объекте)

const name = 'Киви';

const changeStatus = students.map(student => {
  if (student.name === name) {
    return {
      ...student, // распыляем объект в новую переменную
      online: false, // изменяем значение
    };
  }
  return student; // копируем объеты в новую переменную без изменений
});

console.log(changeStatus);

// операцию для конкретного обьекта (имзенить свойство только в одном объекте) через тернарник

const changeName = students.map(student => {
  return student.name === name ? { ...student, name: 'УЖЕ НЕ КИВИ' } : student;
});

// можно без ретурн и скобок

// const changeName = students.map(student => student.name === name ? { ...student, name: 'УЖЕ НЕ КИВИ' } : student;);

console.log(changeName);
