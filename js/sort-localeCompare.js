// Метод sort() сортирует элементы массива, но в отличии от остальных перебирающих методов, он сортирует исходный массив.

// Сортирует и изменяет исходный массив.
// Возвращает изменённый массив, то есть ссылку на отсортированный исходный.
// По умолчанию сортирует по возрастанию.
// Сортировка происходит путём приведения значений к строке и сравнения порядковых номеров в таблице Unicode.
// Такой массив чисел будет отсортирован по возврастанию.

//
//
//
//
//
//
// ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА
//
//
//
//
//
//

// Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива
// releaseDates, а в переменной alphabeticalAuthors копия массива имён авторов authors отсортированная в по алфавиту.

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = ['Tanith Lee', 'Bernard Cornwell', 'Robert Sheckley', 'Fyodor Dostoevsky'];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort(); // перед сортировкой делаем копию массива (распыляя его, чтобы не изменять оригинальный массив)

const alphabeticalAuthors = [...authors].sort(); // перед сортировкой делаем копию массива (распыляя его, чтобы не изменять оригинальный массив)

console.log(ascendingReleaseDates);
console.log(alphabeticalAuthors);

// right answer
// Объявлена переменная `releaseDates`

// right answer
// Объявлена переменная `authors`

// right answer
// Объявлена переменная `ascendingReleaseDates`

// right answer
// Объявлена переменная `alphabeticalAuthors`

// right answer
// Значение переменной `releaseDates` это массив `[2016, 1967, 2008, 1984, 1973, 2012, 1997]`

// right answer
// Значение переменной `authors` это массив `['Tanith Lee', 'Bernard Cornwell', 'Robert Sheckley', 'Fyodor Dostoevsky']`

// right answer
// Значение переменной `ascendingReleaseDates` массив `[1967, 1973, 1984, 1997, 2008, 2012, 2016]`

// right answer
// Значение переменной `alphabeticalAuthors` это массив `['Bernard Cornwell', 'Tanith Lee', 'Robert Sheckley', 'Fyodor Dostoevsky']`

// right answer
// Для перебора массива `authors` используется метод `sort()`

//
//
//
//
//
//
// ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА
//
//
//
//
//
//

// Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания, по её возрастанию или убыванию. Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной descendingReleaseDates копия отсортированная по убыванию.
const releaseDatesSc = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Change code below this line

// const ascendingReleaseDatesSc = [...releaseDatesSc].sort((a, b) => a - b);

// const descendingReleaseDatesSc = [...releaseDatesSc].sort((a, b) => b - a);
// right answer
// Объявлена переменная `releaseDates`

// right answer
// Объявлена переменная `ascendingReleaseDates`

// right answer
// Объявлена переменная `descendingReleaseDates`

// right answer
// Значение переменной `releaseDates` это массив `[2016, 1967, 2008, 1984, 1973, 2012, 1997]`

// right answer
// Значение переменной `ascendingReleaseDates` массив `[1967, 1973, 1984, 1997, 2008, 2012, 2016]`

// right answer
// Значение переменной `descendingReleaseDates` это массив `[2016, 2012, 2008, 1997, 1984, 1973, 1967]`

// right answer
// Для перебора массива `releaseDates` используется метод `sort()`

//
// ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА
//
// Онлайн бибилиотеке необходимо отображать книги отсортированные по автору, в алфавитном и обратном алфавитном порядке. Дополни код так, чтобы в переменной authorsInAlphabetOrder получилась отсортированная по алфавиту копия массива authors, а в переменной authorsInReversedOrder копия отсортированная в обратном алфавитном порядке.

const authorsSc = [
  'Tanith Lee',
  'Bernard Cornwell',
  'Robert Sheckley',
  'Fyodor Dostoevsky',
  'Howard Lovecraft',
];
// Change code below this line

const authorsInAlphabetOrderІ = [...authorsSc].sort((a, b) => a - b); // отсортирует не верно
const authorsInAlphabetOrder = [...authorsSc].sort((a, b) => a.localeCompare(b)); // отсортирует верно
const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a)); // отсортирует верно
console.log(authorsInAlphabetOrder);

// right answer
// Объявлена переменная `authors`

// right answer
// Объявлена переменная `authorsInAlphabetOrder`

// right answer
// Объявлена переменная `authorsInReversedOrder`

// right answer
// Значение переменной `authors` это массив `['Tanith Lee', 'Bernard Cornwell', 'Robert Sheckley', 'Fyodor Dostoevsky', 'Howard Lovecraft']`

// right answer
// Значение переменной `authorsInAlphabetOrder` массив `['Bernard Cornwell', 'Fyodor Dostoevsky', 'Howard Lovecraft', 'Robert Sheckley', 'Tanith Lee']`

// right answer
// Значение переменной `authorsInReversedOrder` это массив `['Tanith Lee', 'Robert Sheckley', 'Howard Lovecraft', 'Fyodor Dostoevsky', 'Bernard Cornwell']`

// right answer
// Для перебора массива `authors` используется метод `sort()`

//
//
//
//
//
//
// ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА
//
//
//
//
//
//

// Дополни код так, чтобы:

// В переменной sortedByAuthorName получился массив книг отсортированный по имени автора в алфавитном порядке.
// В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени автора в обратном алфавитном порядке.
// В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
// В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.

const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
];
// Change code below this line

const sortedByAuthorName = [...books].sort((firstBook, secondBook) =>
  firstBook.author.localeCompare(secondBook.author)
);

const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) =>
  secondBook.author.localeCompare(firstBook.author)
);

const sortedByAscendingRating = [...books].sort(
  (firstBook, secondBook) => firstBook.rating - secondBook.rating
);

const sortedByDescentingRating = [...books].sort(
  (firstBook, secondBook) => secondBook.rating - firstBook.rating
);

// right answer
// Объявлена переменная `books`

// right answer
// Объявлена переменная `sortedByAuthorName`

// right answer
// Объявлена переменная `sortedByReversedAuthorName`

// right answer
// Объявлена переменная `sortedByAscendingRating`

// right answer
// Объявлена переменная `sortedByDescentingRating`

// right answer
// Значение переменной `books` это исходный массив объектов книг

// right answer
// Значение переменной `sortedByAuthorName` это массив книг отсортированный по имени автора в алфавитном порядке

// right answer
// Значение переменной `sortedByReversedAuthorName` это массив книг отсортированный по имени автора в обратном алфавитном порядке

// right answer
// Значение переменной `sortedByAscendingRating` это массив книг отсортированный по возрастанию рейтинга

//
//
//
//
//
//
// ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА
//
//
//
//
//
//

// Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала массив пользователей отсортированный по возрастанию их баланса (свойство balance).

const users = [
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
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
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

const sortByAscendingBalance = users => {
  return [...users].sort((firstUser, secondUser) => firstUser.balance - secondUser.balance);
};

// right answer
// Объявлена переменная `sortByAscendingBalance`

// right answer
// Переменной `sortByAscendingBalance` присвоена стрелочная функция с параметром `(users)`

// right answer
// Значение параметра `users` не изменяется

// right answer
// Для перебора параметра `users` использован метод `sort()`

// right answer
// Вызов функции с указанным массивом пользователей возвращает новый массив пользователей отсортированный по возрастанию их баланса

// right answer
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

//
//
//
//
//
//
// ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА
//
//
//
//
//
//
const usersSc = [
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
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
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

// Дополни функцию sortByDescendingFriendCount(users) так, чтобы она возвращала массив пользователей отсортированный по убыванию количества их друзей (свойство friends).

const sortByDescendingFriendCount = users => {
  return [...users].sort(
    (firstUser, secondUser) => secondUser.friends.length - firstUser.friends.length
  );
};

// right answer
// Объявлена переменная `sortByDescendingFriendCount`

// right answer
// Переменной `sortByDescendingFriendCount` присвоена стрелочная функция с параметром `(users)`

// right answer
// Значение параметра `users` не изменяется

// right answer
// Для перебора параметра `users` использован метод `sort()`

// right answer
// Вызов функции с указанным массивом пользователей возвращает новый массив пользователей отсортированный по убыванию количества их друзей

// right answer
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

//
//
//
//
//
//
// ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА ЗАДАЧА
//
//
//
//
//
//

// Дополни функцию sortByName(users) так, чтобы она возвращала массив пользователей отсортированный по их имени (свойство name) в алфавитном порядке.

const sortByName = users => {
  return [...users].sort((firstUser, secondUser) => firstUser.name.localeCompare(secondUser.name));
};

// right answer
// Объявлена переменная `sortByName`

// right answer
// Переменной `sortByName` присвоена стрелочная функция с параметром `(users)`

// right answer
// Значение параметра `users` не изменяется

// right answer
// Для перебора параметра `users` использован метод `sort()`

// right answer
// Вызов функции с указанным массивом пользователей возвращает новый массив пользователей, отсортированный по имени

// right answer
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

//
//
//
//
//
//
// КАСТОМНАЯ СОРТИРОВКА
//
//
//
//
//
//

const customSort = users => {
  return [...users].sort((firstUser, secondUser) => {
    const result = firstUser.name[0] > secondUser.name[0];
    if (result) {
      return 1;
    }

    if (!result) {
      return -1;
    }
  });
};

console.table(customSort(users));
