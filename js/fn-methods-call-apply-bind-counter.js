// /*
//  * call и apply (call принимает произвольное каличество агруентов) (apply принимает массив)
//  */
// Метод call вызовет функцию greetGuest так, что в this будет ссылка на объект obj (mango / poly), а также передаст аргументы 1, 2 и т. д. // если функция никаких аргументов не принимает то можно не ставить

function greetGuest(...greeting) {
  console.log('То что передали', greeting);
  console.log(`greetGuest`, this);
}

const mango = {
  username: 'Манго',
  location: 'Киев',
};
const poly = {
  username: 'Поли',
  location: 'Львов',
};

greetGuest.call(mango, 1, 2, 3); // функция.принудительныйВызов(тоКчемуВызывае, arg1, arg2, arg3)
greetGuest.call(poly); // функция.принудительныйВызов(тоКчемуВызывае)
// greetGuest(poly); // без call не работает

// Метод apply вызовет функцию greetGuest так, что в this будет ссылка на объект obj (mango / poly), а также передаст МАССИВ АРГУМЕНТОВ [1, 2 и т. д.]  // если функция никаких аргументов не принимает то можно не ставить

greetGuest.apply(mango, [1, 2, 3]); // функция.принудительныйВызов(тоКчемуВызывае, array)
greetGuest.apply(poly); // функция.принудительныйВызов(тоКчемуВызывае)
// greetGuest(poly); // без apply не работает

//
//
//  call и apply в контексте вызова функции
//

const newPrice = function (value) {
  this.price = value;
};
const addGames = function (...values) {
  this.games.push(...values);
};
const findGame = function (value) {
  if (this.games.includes(value)) {
    console.log(`${value} finded!`);
  } else {
    console.log(`Sorry we dont have such game`);
  }
};
const playStation = {
  name: 'PlayStation',
  games: ['Crash'],
  price: 400,
};

const xboxOne = {
  name: 'XboxOne',
  games: ['Hallo'],
  price: 400,
};
newPrice.call(xboxOne, 500);
addGames.call(xboxOne, 'NFS', 'FIFA');
addGames.call(playStation, 'GTA6', 'RAY');
findGame.call(xboxOne, 'FIFA');
console.log(xboxOne);
console.log(playStation);

/*
 * bind
 */
//Методы call и apply вызывают функцию «на месте», то есть сразу. Но в случае колбэк-функций, когда необходимо не сразу вызвать функцию, а передать ссылку на неё, причём с привязанным контекстом, используется метод bind.

const newPsPrice = newPrice.bind(playStation); // биндим  функцию (делаем хоткей функцию) у нее всегда будет this === playStation
newPsPrice(333);
const newXboxPrice = newPrice.bind(xboxOne); // биндим  функцию (делаем хоткей функцию) у нее всегда будет this === xboxOne
newXboxPrice(444);
console.log(playStation);
console.log(xboxOne);
