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

/////МАСИВ НЕ ПОВТОРЯЮЩИХСЯ ДРУЗЕЙ flatMap + filter

const usersF = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
    isActive: true,
    balance: 3951,
    gender: 'male',
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
    isActive: false,
    balance: 1498,
    gender: 'male',
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
  },
];

const getNamesSortedByFriendCount = users =>
  users
    .flatMap(user => user.friends)
    .filter((friend, index, array) => array.indexOf(friend) === index)
    .sort((a, b) => a.localeCompare(b));

console.log(`TZ`, getNamesSortedByFriendCount(usersF));

const getTotalBalanceByGender = (users, gender) => {
  return [...users]
    .filter(user => user.gender === gender)
    .reduce((total, user) => total + user.balance, 0);
};

console.log(getTotalBalanceByGender(usersF, 'female'));
