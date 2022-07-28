// every
// Не изменяет оригинальный массив.
// Поэлементно перебирает оригинальный массив.
// Возвращает true если все элементы массива удовлетворяют условию.
// Возвращает false если хотябы один элемент массив не удовлетворяет условию.
// Перебор массива прекращается если коллбек возвращает false.

const students = [
  { name: 'Манго', score: 83, online: false },
  { name: 'Поли', score: 59, online: true },
  { name: 'Аякс', score: 37, online: false },
  { name: 'Киви', score: 94, online: true },
  { name: 'Хьюстон', score: 64, online: false },
];

const everyOnline = students.every(student => student.online); // если как минимум 1 не онлайн возвращает false
console.log(`Все онлайн`, everyOnline);

const scoreToCheck = 30;

const functToCheckScore = (array, scoreToCheck) => {
  return array.every(({ score }) => score > scoreToCheck); // проверяем все ли больше 30 балов
};

console.log(functToCheckScore(students, scoreToCheck));
