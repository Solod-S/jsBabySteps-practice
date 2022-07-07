// // ОБЬЕКТЫ позволяют описать и сгруппировать характеристики некоторой сущности - пользователя, книги, продукта в магазине, чего угодно. Объекты ещё называют словарями, то есть они содержат термины (свойства) и их определения (значения).

// // const playlist = {
// //   //литерал обїекта
// //   name: 'The best of the best', //ключ:свойство
// //   rating: 5,
// //   tracksCount: 4,
// //   tracks: ['track-1', 'track-2', 'track-3', 'track-4'],
// // };

// // const propertyName = 'rating';

// // console.log(playlist.name);
// // console.log(playlist.tracks);

// // console.log(playlist.propertyName); // с переменной в которой забит ключ просто так не работает
// // console.log(playlist[propertyName]); // с переменной в которой забит ключ работает вот так

// // ------------------------------

// // КОроткая запись свойст

// //данные пришли из формы и нам нужно их записать в объект

// // const name = 'GALYA';
// // const password = 'wwww';

// // const userProfile = {
// //   name: name,
// //   password: password,
// // };

// // console.log(userProfile);

// // ------------------------------ можно проще если имя переменной и клюка одинаковые

// // const user = 'GALYA';
// // const pass = 'wwww';

// // const userCard = {
// //   user,
// //   pass,
// // };

// // console.log(userCard);

// // ------------------------------ вычисляемые свойства
// //  <input name="color" value="tomato" >

// // const name = 'color';
// // const value = 'tomato';

// // const input = {
// //   [name]: value, //если мы хотим задать пременную в ключ используем []
// // };

// // console.log(input);

// // ------------------------------ перезаписываем свойства (если нет ключа и ключ)

// // const playlist = {
// //   //литерал обїекта
// //   name: 'The best of the best', //ключ:свойство
// //   rating: 5,
// //   tracksCount: 4,
// //   tracks: ['track-1', 'track-2', 'track-3', 'track-4'],
// // };

// // playlist.name = 'Not the best of the best'; //презаписываем свойства ключа
// // playlist.price = '5$'; //добавляем ключ и свойство
// // console.log(playlist);

// // ----------------------------------------------------------------------------------------------------------------------------------------------
// // ---------------------------------------------------------------------------------------------------------------------Метод обьекта (используем для работы со свойствами)
// // ----------------------------------------------------------------------------------------------------------------------------------------------

// // const playlist = {
// //   //литерал обїекта
// //   name: 'The best of the best', //ключ:свойство
// //   rating: 5,
// //   tracksCount: 4,
// //   tracks: ['track-1', 'track-2', 'track-3', 'track-4'],
// //   getFunctionOld: function () {
// //     'Тут могла быть функция по старому';
// //   },
// //   //старый способ
// //   getFunctionNew() {
// //     'Тут могла быть функция по новому';
// //   },
// //   //новый способ (метод обьекта)
// // };

// // console.log(playlist.getFunctionOld);
// // console.log(playlist.getFunctionNew);

// // ----------------------------------------------------------------------------------------------------------------------------------------------
// // const playlist = {
// //   name: 'The best of the best',
// //   rating: 5,
// //   tracksCount: 4,
// //   tracks: ['track-1', 'track-2', 'track-3', 'track-4', 'track-5'],
// //   changeName(newName) {
// //     this.name = newName; // this.name === playlist.name
// //   },
// //   changeRating(newRating) {
// //     this.rating = newRating;
// //   },

// //   addTrack(newTrack) {
// //     this.tracks.push(newTrack);
// //   },
// //   getTrackCount() {
// //     this.tracksCount = this.tracks.length; // длина массива = количеству треков
// //   },
// // };

// // playlist.changeRating(2);
// // playlist.addTrack('track-6');
// // playlist.changeName('Is the best?');
// // console.log(playlist);

// // ----------------------------------------------------------------------------------------------------------------------------------------------
// // ------------------------------------------------------------------------------------FOR------------------------------------------
// // ----------------------------------------------------------------------------------------------------------------------------------------------

// /*
//  * Перебор через for...in и Object.keys|values|entries
//  */

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// const keys = Object.keys(feedback); // получаем все ключи обьекта (массив)

// for (let key of keys) {
// перебираем обьекты в цикле
// console.log(key); // перебираем ключи
// console.log(feedback[key]); // перебираем свойства
// }
// // ----------------------------------------------------------------------------------------------------------------------------------------------
// // const myConsole = {
// //   ps4: 2,
// //   xbox: 1,
// //   nintendo: 2,
// // };

// // const consoles = Object.keys(myConsole);

// // for (let pristav of consoles) {
// //   console.log(pristav);
// //   console.log(myConsole[pristav]);
// // }

// /*
//  * Перебрать зарплаты отдела
//  */

// // const salleryOfDepartment = {
// //   Sergey: 10000,
// //   Inna: 9000,
// //   Igor: 7000,
// //   Vlad: 6000,
// // };

// // const keys = Object.keys(salleryOfDepartment);
// // let values = Object.values(salleryOfDepartment); // получаем все значения обьекта (массив)
// // let totaSallery = 0;
// // let numberOfStaff = '';

// // for (let value of values) {
// //   totaSallery += value;
// // }

// // console.log(`Количиство сотрудников = ${keys.length}, общая зарплата отдела = ${totaSallery}`);
// // console.log(values);

// // ------------------------------------------------------------------------------------ЗАДАЧА 1----------------------------------------------------------

// /*
//  * Работа с коллекцией (массивом объектов)
//  */
// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: false },
//   { name: 'Ajax', online: true },
// ];

// // console.table(friends);

// /*
//  * Ищем друга по имени
//  */

// // --------------------------------------------------------------------------------
// // -------------------------------------------------------------------------------- такой себе вариант
// // const SearchFriend = 'Poly';

// // for (let friend of friends) {
// //   const values = Object.values(friend);
// //   const keys = Object.keys(friend);
// //   // console.log('keys', keys);
// //   // console.log('values', values);

// //   if (values.includes(SearchFriend)) {
// //     console.log(`В этом массиве есть ${SearchFriend}`);
// //     break;
// //   }
// // }
// // --------------------------------------------------------------------------------можно но  НУЖНО ли?!
// //алгоритм
// // перебираем масив обьектов через for of
// // идем от обратного (задаем изначально не "найдено") и делаем ретурн
// // перебираем циклом обьекты массива
// // делаем ветвление if c проверкой свойств обьекта (Object.values(friend)) на совпадение(поиск значение в свойствах обьекта) с переменной поиска друзей (includes(friendName))
// // если совпадает то меняем месендж и делаем ретурн

// // const findFriendByName = function (allFriends, friendName) {
// //   for (let friend of allFriends) {
// //     let massage = `Друг ${friendName} не найден`;
// //     if (Object.values(friend).includes(friendName)) {
// //       massage = `Друг ${friendName} найден`;
// //       return massage;
// //     }

// //     return massage;
// //   }
// // };
// // --------------------------------------------------------------------------------
// //алгоритм
// // перебираем масив обьектов через for of
// // идем от обратного (задаем изначально не "найдено") и делаем ретурн
// // перебираем циклом обьекты массива
// // делаем ветвление if c проверкой известного свойства обьекта (friend.name) на совпадение с тем что проверяем (friendName)
// // если совпадает то меняем месендж и делаем ретурн

// // const findFriendByName = function (allFriends, friendName) {
// //   let massage = `Друг ${friendName} не найден`;

// //   for (let friend of allFriends) {
// //     // console.log(friend.name);
// //     if (friend.name === friendName) {
// //       massage = `Друг ${friendName} найден`;
// //       return massage;
// //     }
// //   }
// //   return massage;
// // };

// // console.log(findFriendByName(friends, 'Poly'));
// // console.log(findFriendByName(friends, 'tarik'));

// // ------------------------------------------------------------------------------------ЗАДАЧА 2----------------------------------------------------------
// // const friends = [
// //   { name: 'Mango', online: false },
// //   { name: 'Kiwi', online: true },
// //   { name: 'Poly', online: false },
// //   { name: 'Ajax', online: false },
// // ];

// /*
//  * Получаем имена всех друзей
//  */

// //алгоритм
// // делаю переменную allfriend
// // перебираем масив обьектов через цикл for of
// // allfriend.push (каждое свойство ключа имя)
// // возвращаю allfriend

// // const getAllNames = function (allFriends) {
// //   const allOfFriend = [];

// //   for (let friend of allFriends) {
// //     allOfFriend.push(friend.name);
// //   }
// //   let massage = `Список друзей: ${allOfFriend}, количество друзей = ${allOfFriend.length}`;
// //   return massage;
// // };

// // console.log(getAllNames(friends));

// // ------------------------------------------------------------------------------------ЗАДАЧА 3----------------------------------------------------------
// /*
//  * Получаем имена только друзей которые онлайн
//  */
// //алгоритм

// // делаю переменную allFriendOnline
// // перебираем масив обьектов через цикл for of
// // делаем через if (если значение online: true то выполняем действие с allFriendOnline)
// // allFriendOnline.push каждое имя (friend) (просто добавляем в массив имя)
// // возвращаю allFriendOnline в котором будут массивы (имя плюс онлайн статус)

// // const getOnlineFriends = function (allFriends) {
// //   const allFriendOnline = [];
// //   for (let friend of allFriends) {
// //     if (friend.online) {
// //       //if (friend.online === true)
// //       console.log(friend);
// //       allFriendOnline.push(friend);
// //     }
// //   }

// //   return allFriendOnline;
// // };

// // console.log(getOnlineFriends(friends));

// /*
//  * Получаем имена только друзей которые офлайн
//  */

// const getOfflineFriends = function (allFriends) {
//   // const allFriendOffline = [];
//   // for (let friend of allFriends) {
//   //   if (!friend.online) {
//   //     //if (friend.online === true)
//   //     allFriendOffline.push(friend);
//   //   }
//   // }
//   // return allFriendOffline;
// };

// console.log(getOfflineFriends(friends));

// /*
//  * Получаем обьект в котором онлайн и офлайн ключи друзей
//  */

// // делаю объект statusOfMyFriends с ключами online/offline
// // перебираем масив обьектов через цикл for of
// // делаем через if (если значение online: true то выполняем действие с statusOfMyFriends, пушим туда имя)
// // возвращаю statusOfMyFriends в  (имя плюс онлайн статус)

// const getFrind = function (allfriend) {
//   const statusOfMyFriends = {
//     online: [],
//     offline: [],
//   };
//   for (let friend of allfriend) {
//     if (friend.online) {
//       statusOfMyFriends.online.push(friend);
//       continue;
//     }

//     statusOfMyFriends.offline.push(friend);
//   }
//   return statusOfMyFriends;
// };

// console.log(getFrind(friends));

// // ------------------------------------------------------------------------------------ЗАДАЧА 4----------------------------------------------------------

/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    console.table(this.items);
    for (const item of this.items) {
      // перебираем по элементам (не пугаемся что в консоли происходит)
      if (item.name === product.name) {
        console.log('НАШЛИ СОВПАДЕНИЕ!!!', item.name);
        item.quantity += 1; // по ссылке-item.quantity в оригинальном объекте-items.quantity  меняем значение
        return; // дальше код не выполняем
      }
    }
    const newProduct = {
      ...product, // распыляем объект с ключами и свойствами
      quantity: 1, // делаем новый ключ с свойством
    };
    this.items.push(newProduct);
  },
  remove(productName) {
    const { items } = this; // чтобы избавиться от this.items
    //---------------------------------------------------------
    //---------------------------нам не подходит перебор через for без счетчика------------------------------
    // for (const item of this.items) {
    //   console.log(item);
    //   if (item.name === productName) {
    //     console.log('НАШЛИ', productName);
    //   }
    // }
    //на нужен for of с i чтобы понять что нам удалять
    //------------------------------------------------------
    //---------------------------------------------------------

    for (let i = 0; i < items.length; i += 1) {
      // items.length = this.items.length
      //------------------------------------------------------
      //-----------------------------------попробовал переменную----------------------
      // const item = this.items[i];
      // console.log(item);
      // if (productName === item.name) {
      //   console.log('НАШЛИ', productName);
      // }
      //------------------------------------------------------
      //---------------------------------------------------------
      const { name } = items[i]; // чтобы избавиться от items[i].name
      console.log(name); // items[i].name
      if (productName === name) {
        // items[i].name
        console.log('НАШЛИ', productName);
        console.log('индекс:', i); // цифра счетчика (начали с 0, значит будет совпадать с индексом)
        items.splice(i, 1); // говорим на вот этом индеске (i = 2 в данном случае) удали 1 элемент
        // this.items.splice
      }
    }
  },

  clear() {
    this.items = [];
  },
  countTotalPrice() {
    // console.log('total', this.items);
    let totalPrice = 0;
    const { items } = this; // this.items
    for (const { price, quantity } of items) {
      // вместо item и this.items

      totalPrice += price * quantity; // item.price * item.quantity цену умножаем на количество
    }
    // console.log(totalPrice);
    return totalPrice;
  },
  increaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        item.quantity += 1;
      }
    }
  },
  decreaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        item.quantity -= 1;
      }
    }
  },
};

cart.add({ name: '🍎', price: 50 });

cart.add({ name: '🍇', price: 60 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });

// cart.remove('🍇');
// console.table(cart.getItems());

// cart.clear();
// console.table(cart.getItems());

cart.increaseQuantity('🍎');
cart.increaseQuantity('🍎');
cart.increaseQuantity('🍎');
cart.increaseQuantity('🍎');

cart.decreaseQuantity('🍋');
cart.decreaseQuantity('🍋');
// console.table(cart.getItems());

console.table(cart.getItems());
console.log('Total: ', cart.countTotalPrice());
