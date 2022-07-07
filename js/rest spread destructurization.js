// const spred = [0, ...[1, 2, 3], 4, 5]; // мы буквально распылили масив [1, 2, 3] ==> 1, 2, 3
// console.log(spred);

// const temp = [1, 2, 3, 4, 5, 6];
// console.log(Math.max(1, 2, 3, 4, 5, 6));
// console.log(Math.max(temp)); //не работает
// console.log(Math.max(...temp)); // не умеет работать с сложными объектами, нужно распылить [1, 2, 3, 4, 5, 6] ==> 1, 2, 3, 4, 5, 6

// const a = [{ a: 1 }, { b: 2 }, { c: 3 }];
// const b = [...a]; // распилили и вставили [{ a: 1, b: 2, c: 3 }];
// console.log(a);
// console.log(b);
// console.log(a === b); // сами масивы не ровны
// console.log(a[0] === b[0]); // а вот ссылки на оригинальный объект{ a: 1 } === { a: 1 }

// a[0].a = 3;
// ---------------------------- обьединяем с помощью конката или спреда

// const first = [1, 2];
// const second = [3, 4];
// const third = [5, 6];

// const total = [...first, ...second, ...third];
// console.log(`обьеденили с помощью spread ${total}`);
// const totalConcat = first.concat(second, third);
// console.log(`обьеденили с помощью concat ${totalConcat}`);

// ---------------------------- распыляем объекты

// const x = { a: 1, b: 2 };
// const c = { a: 10, z: 22 };

// ------ старый способ

// const z = Object.assign({}, x, c);
// оно создает {} и распыляет туда x (a: 1, b: 2 ) + c (a: 10, z: 22), двух одинаковых ключей в обьекте быть не может... оно заменяет значения совпавшего ключа a: 1 ==> : 10
// console.log(z);
// ------

// ------ новый способо !!!!!!!!!!
// const g = { a: 1, b: 2 };
// const f = { a: 10, z: 22 };

// const d = { ...g, ...f };
// console.log(`совеременный способ {...g, ...f}`);

// console.log(d);
// // ------ важен порядок
// const dd = { ...g, b: 12, ...f, z: 12 };
// console.log(`{ ...g,
//   b: 12,
//   ...f,
//   z: 12,}`);
// console.log(dd);

// -------------------------- поменять настройки

// const baseSettings = {
//   theme: 'light',
//   sound: true,
//   notification: false,
// };

// const mySetting = {
//   theme: 'dark',
// };

// const currentSetting = { ...baseSettings, ...mySetting };
// console.log(currentSetting);

// -------------------------- -------------------------- --------------------------
// -------------------------- -------------------------- -------------------------- -------------------------- Деструктуризация / Распаковка ПЛОСКИЙ ОБЪЕКТ--------------------------
// -------------------------- -------------------------- --------------------------

const playlist = {
  name: 'NFS-ost',
  tracks: ['track-1', 'track-2', 'track-3'],
  rating: 5,
};

console.log(playlist.name);
console.log(playlist.tracks);
console.log(playlist.rating);

// делаем деструктуризацию или распаковку

const { name, tracks } = playlist; // из локальной переменной playlist оно деструктуризирует (создает переменные под ключи ИМЯ ДОЛЖНО СОВПАДАТЬ)

console.log(name);
console.log(tracks);

// если ключа нету в обьекте то при деструктуризиции нужно помимо названия нового ключа "time" присвоить ему значение "Playing-time = 50" ВАЖНО!!! В ОБЪЕКТ ОНО НЕ ДОБАВЛЯЕТ ЭТОТ КЛЮЧ, ОНО ПРОСТО ДЕЛАЕТ ЛОКАЛЬНУЮ ПЕРЕМЕННУЮ

const { time = 50 } = playlist;

console.log(time);

// если нужно чтобы имя локальной переменной отличалась от ключа обьекта то делаем так
const { rating: indb } = playlist;

console.log(indb);

// -------------------------- -------------------------- -------------------------- -------------------------- ГЛУБОКАЯ Деструктуризация / Распаковка {Объектов}-------------------------

// const profile = {
//   login: 'Sergey',
//   country: 'Ukraine',
//   location: 'Kiev',
//   age: 32,
//   stats: {
//     followers: 333,
//     following: 222,
//     likes: 12,
//   },
// };

// const { login, country, location, age, stats } = profile; // stats остается обїектом

// console.log(login, country, location, age, stats.followers, stats.following, stats.likes); // чтобы достучаться до followers нужно писать опять через точку

// const { followers, following, likes } = stats; // делаем более глубокую деструктуризацию для объекта stats
// console.log(following, followers, likes);

//--- !!!!!или сразу можно было const { login, country, location, age, stats: { followers, following, likes } } = profile;!!!!!

// -------------------------- -------------------------- -------------------------- -------------------------- Деструктуризация / Распаковка [МАССИВОВ]-------------------------

// const rgb = [122, 12, 22];

// const [red, green, blue] = rgb;

// console.log(red, green, blue);

// const rgbPropusk = [244, 56, 12];
// const [redTest, , blueTest] = rgbPropusk; // если нужно пропустить значение то пишем " ,"
// console.log(redTest, blueTest);

// -------------------------- -------------------------- -------------------------- -------------------------- ЗАДАЧА НАЙТИ КЛЮЧ С САМІМ БОЛЬШИМ ЗНАЧЕНИЕМ------------------------

const myColection = {
  first: 4,
  second: 7,
  thrd: 5,
  some: 22,
  biggest: 15,
};

// const numbers = Object.keys(myColection); // создаем переменную с ключами
// // console.log(numbers);
// let bigestRating = 0; // создаем переменную для перебора значений ключа (по умолчанию там самое большое значение = 0)
// let winner = {}; // создаем переменную для нашего победителя
// for (let number of numbers) {
//   // console.log(number);
//   // console.log(myColection[number]); /// если без скобок оно не поймет что это переменная myColection.first / myColection.second / myColection.thrd  !!! console.log(myColection.number) так не работает!!!
//   if (myColection[number] > bigestRating) {
//     bigestRating = myColection[number];
//     winner = { [number]: myColection[number] };
//   }
// }

// ------------ РЕШЕНИЕ СИЛЬНО ЛУЧШЕ

const entries = Object.entries(myColection);
console.log(entries);
let bigestRating = 0;
let winner = [];
for (let [name, rating] of entries) {
  if (rating > bigestRating) {
    bigestRating = rating;
    winner = [name, rating];
  }
}

console.log(winner);

// -------------------------- -------------------------- -------------------------- -------------------------- ENTRIES (Object.entries(object)------------------------

// const myColection = {
//   first: 4,
//   second: 7,
//   thrd: 5,
//   biggest: 15,
// };

// const entries = Object.entries(myColection); // [разбиваем на масивы ключ/свойство]
// console.log(entries);

// for (let entry of entries) {
//   // const name = entry[0];
//   // const rating = entry[1];

//   const [name, rating] = entry; // деструктуризация
//   console.log(name, rating);
// }

// for (let [name, rating] of entries) {
//lv3
//lv2
// const name = entry[0];
// const rating = entry[1];
//lv1
// const [name, rating] = entry; // деструктуризация
//   console.log(name, rating);
// }

// -------------------------- -------------------------- -------------------------- -------------------------- деструктуризация + ...rest------------------------

// const myProfile = {
//   name: 'Alex',
//   age: 18,
//   sex: 'male',
//   status: {
//     online: false,
//     vip: true,
//   },
// };

// const { name: nameOfMy, age: ageOfM, ...rest } = myProfile;

// console.log(nameOfMy, ageOfM);
// console.log(rest);
