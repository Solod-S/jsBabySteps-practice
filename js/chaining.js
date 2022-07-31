const numbers = [1, 2, 3, 4, 5, 6, 7];

const greaterThenTwo = numbers.filter(number => number > 2);

console.log(greaterThenTwo);

const multByFour = greaterThenTwo.map(number => number * 2);

console.log(multByFour);
const reversNumbers = [...multByFour].reverse();

console.log(reversNumbers);

////ЧЕЙНИНГ ВСЕГО ЭТОГО

const sort = numbers
  .filter(number => number > 2)
  .map(number => number * 2)
  .sort((a, b) => b - a);

console.log(`sort`, sort);

//// ЧЕЙНИНГ ЕЩЕ

const students = [
  { id: 1, name: 'Манго', score: 83, online: false },
  { id: 3, name: 'Поли', score: 59, online: true },
  { id: 5, name: 'Аякс', score: 37, online: false },
  { id: 7, name: 'Киви', score: 94, online: true },
  { id: 9, name: 'Хьюстон', score: 64, online: false },
];

const offlineAndHightScore = arrays =>
  arrays
    .filter(array => !array.online)
    .sort((firstUser, secondUser) => secondUser.score - firstUser.score);

console.log(offlineAndHightScore(students));

const onlineAndById = players =>
  players.filter(player => player.online).sort((playerA, playerB) => playerB.id - playerA.id);

console.log(`onlineAndById`, onlineAndById(students));

const studentTotalScore = students
  .map(student => student)
  .reduce((total, student) => [...total, student.score], [])
  .reduce((total, value) => total + value);

console.log(studentTotalScore);
