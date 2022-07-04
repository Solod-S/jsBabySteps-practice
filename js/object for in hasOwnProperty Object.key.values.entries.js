// ОБЬЕКТЫ позволяют описать и сгруппировать характеристики некоторой сущности - пользователя, книги, продукта в магазине, чего угодно. Объекты ещё называют словарями, то есть они содержат термины (свойства) и их определения (значения).

// const playlist = {
//   //литерал обїекта
//   name: 'The best of the best', //ключ:свойство
//   rating: 5,
//   tracksCount: 4,
//   tracks: ['track-1', 'track-2', 'track-3', 'track-4'],
// };

// const propertyName = 'rating';

// console.log(playlist.name);
// console.log(playlist.tracks);

// console.log(playlist.propertyName); // с переменной в которой забит ключ просто так не работает
// console.log(playlist[propertyName]); // с переменной в которой забит ключ работает вот так

// ------------------------------

// КОроткая запись свойст

//данные пришли из формы и нам нужно их записать в объект

// const name = 'GALYA';
// const password = 'wwww';

// const userProfile = {
//   name: name,
//   password: password,
// };

// console.log(userProfile);

// ------------------------------ можно проще если имя переменной и клюка одинаковые

// const user = 'GALYA';
// const pass = 'wwww';

// const userCard = {
//   user,
//   pass,
// };

// console.log(userCard);

// ------------------------------ вычисляемые свойства
//  <input name="color" value="tomato" >

// const name = 'color';
// const value = 'tomato';

// const input = {
//   [name]: value, //если мы хотим задать пременную в ключ используем []
// };

// console.log(input);

// ------------------------------ перезаписываем свойства (если нет ключа и ключ)

// const playlist = {
//   //литерал обїекта
//   name: 'The best of the best', //ключ:свойство
//   rating: 5,
//   tracksCount: 4,
//   tracks: ['track-1', 'track-2', 'track-3', 'track-4'],
// };

// playlist.name = 'Not the best of the best'; //презаписываем свойства ключа
// playlist.price = '5$'; //добавляем ключ и свойство
// console.log(playlist);

// ----------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------Метод обьекта (используем для работы со свойствами)
// ----------------------------------------------------------------------------------------------------------------------------------------------

// const playlist = {
//   //литерал обїекта
//   name: 'The best of the best', //ключ:свойство
//   rating: 5,
//   tracksCount: 4,
//   tracks: ['track-1', 'track-2', 'track-3', 'track-4'],
//   getFunctionOld: function () {
//     'Тут могла быть функция по старому';
//   },
//   //старый способ
//   getFunctionNew() {
//     'Тут могла быть функция по новому';
//   },
//   //новый способ (метод обьекта)
// };

// console.log(playlist.getFunctionOld);
// console.log(playlist.getFunctionNew);

// ----------------------------------------------------------------------------------------------------------------------------------------------
// const playlist = {
//   name: 'The best of the best',
//   rating: 5,
//   tracksCount: 4,
//   tracks: ['track-1', 'track-2', 'track-3', 'track-4', 'track-5'],
//   changeName(newName) {
//     this.name = newName; // this.name === playlist.name
//   },
//   changeRating(newRating) {
//     this.rating = newRating;
//   },

//   addTrack(newTrack) {
//     this.tracks.push(newTrack);
//   },
//   getTrackCount() {
//     this.tracksCount = this.tracks.length; // длина массива = количеству треков
//   },
// };

// playlist.changeRating(2);
// playlist.addTrack('track-6');
// playlist.changeName('Is the best?');
// console.log(playlist);

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4.7,
  price: 5000,
  tags: ['premium', 'promoted', 'top', 'trusted'],
  owner: {
    name: 'Henry Sibola',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

// Change code below this line
apartment.area = 60;
apartment.rooms = 3;
apartment.location = {};

console.log(apartment);
