// reduce
// Не изменяет оригинальный массив.
// Поэлементно перебирает оригинальный массив.
// Возвращает что угодно.
// Делает что угодно.

const numbers = [2, 8, 10, 22, 33];

const totalNumber = numbersForTotal => {
  return numbersForTotal.reduce((acc, number) => {
    console.log(`acc`, acc);
    console.log(`number`, number);
    return acc + number;
  }, 0); // acc = 0
};

console.log(`total`, totalNumber(numbers));

// 1 итерация => acc = 0 + number 2 => результат записываем в acc =2
// 2 итерация => acc = 2 + number 8 => результат записываем в acc = 10
// 3 итерация => acc = 10 + number 10 => результат записываем в acc = 20
// 4 итерация => acc = 20 + number 22 => результат записываем в acc = 42
// 5 итерация => acc = 42 + number 33 => результат записываем в acc = 75

////

const salarys = {
  Sergey: 2000,
  Inna: 2000,
  Dima: 1999,
};

/// подсчет как делали раньше через обжект валуес Object.values + фор оф + переменную тотал
const countTotalSalaryOld = salarys => {
  const values = Object.values(salarys); // получаем свойства
  let total = 0;
  for (let value of values) {
    total += value;
  }
  return total;
};

console.log(countTotalSalaryOld(salarys));

/// подсчет по новому с  Object.values + редюс

const countTotalSalaryNew = Object.values(salarys).reduce((acc, salary) => {
  return acc + salary;
}, 0);

console.log(countTotalSalaryNew);

///
const students = [
  { name: 'Манго', score: 83, online: false },
  { name: 'Поли', score: 59, online: true },
  { name: 'Аякс', score: 37, online: false },
  { name: 'Киви', score: 94, online: true },
  { name: 'Хьюстон', score: 64, online: false },
];

///старый способ

const scoreToTotalOld = students => {
  let total = 0;
  for (let { score } of students) {
    total += score;
  }
  return total;
};

console.log(scoreToTotalOld(students));

/// подсчет по новому не иделаьно

const scoreToTotalNew = students => {
  const score = students.map(student => student.score);
  console.log(score);
  const totalScore = score.reduce((total, score) => {
    return total + score;
  }, 0);
  return totalScore;
};

console.log(scoreToTotalNew(students));

// САМОЕ ОНО!

const scoreToTotalBest = students => {
  return students.reduce((total, key) => {
    return total + key.score;
  }, 0);
};

console.log(scoreToTotalBest(students));

///////
//////

const cart = [
  { name: 'Whisky', price: 100, quantity: 12 },
  { name: 'Vodka', price: 50, quantity: 22 },
  { name: 'Vine', price: 100, quantity: 12 },
];

const TotalQuantity = cart => {
  return cart.reduce((total, quantity) => {
    return total + quantity.quantity;
  }, 0);
};

//// Общую сумму товара на складе но не идеально

console.log(TotalQuantity(cart));

const TotalPrice = cart => {
  const totaAlcoholCoast = cart.map(product => product.price * product.quantity);
  return totaAlcoholCoast.reduce((acc, price) => {
    return acc + price;
  }, 0);
};

console.log(TotalPrice(cart));

//// Общую сумму товара на складе ЛУЧШЕЕЕ ////////

const TotalPriceNew = cart => {
  return cart.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);
};
console.log(`TotalPriceNew`, TotalPriceNew(cart));

///Общую сумму товара на складе (товар дороже 50)

const TotalPriceUp50 = cart => {
  const filterAlcoholCoast = cart.filter(product => product.price > 50);
  return filterAlcoholCoast.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);
};

console.log(TotalPriceUp50(cart));

/// собираем все теги твитов

const tweets = [
  { id: 1, likes: 12, tags: ['js', 'html', 'nodjs'] },
  { id: 3, likes: 22, tags: ['react', 'scss', 'js'] },
  { id: 5, likes: 32, tags: ['typescript', 'sass', 'html'] },
  { id: 7, likes: 92, tags: ['js', 'java', 'phyton'] },
];

///будет ругаться линтер НО РАБОТАЕТ

const alltags = tweets => {
  return tweets.reduce((alltags, tweet) => {
    alltags.push(...tweet.tags); /// БУДЕТ РУГАТЬСЯ ПРОВЕРЩИК КОДА
    return alltags;
  }, []); //alltags делаем массивом
};

console.log(alltags(tweets));

/// ЛУЧШЕ ТАК

const allTagsBest = tweets => {
  return tweets.reduce((total, tweet) => {
    return [...total, ...tweet.tags]; //распыляем на каждой этирации алтег + теги в новый ПУСТОЙ МАССИВ
  }, []); //акум total делаем []
};

console.log(allTagsBest(tweets));

const bestOf = allTagsBest(tweets);

const BestOfBestTag = tweets => {
  return tweets.reduce((total, tag) => {
    if (total[tag]) {
      // если в тотале есть тег (выдает тру total[tag] === true)
      total[tag] += 1; //total.tag: +1 )ЕСЛИ ТАКОЙ КЛЮЧ ЕСТЬ У НАС УЖЕ К НЕМУ ПРООСТО ДАЕМ +1
      return total;
    }
    total[tag] = 1; //total.tag: 1 по умолчанию делает 1
    return total; // возвращаем акум {}
  }, {}); // акум total делаем {}
};

//если свойство с ключом tag есть то увеличиваем его на один
//если ключа такого нет то tag делаем ключем
console.log(BestOfBestTag(bestOf));

//переписываем правильно

const BestOfBestTagGood = tweets => {
  return tweets.reduce((total, tag) => {
    if (total[tag]) {
      // если есть такой ключ (выдает тру)
      return { ...total, [tag]: total[tag] + 1 }; //распіляем акамулятор и обращаемся к свойству(ключу) и добавляем + 1
    }

    return { ...total, [tag]: 1 }; // если нету то тогда распыляет акамулятор и создает свойстово (ключ) с значением 1
  }, {});
};

console.log(BestOfBestTagGood(bestOf));

//переписываем с тернарником

const BestOfBestTagTernar = tweets => {
  return tweets.reduce((total, tag) => {
    return {
      ...total,
      // на куаждой итарации я верну новый обьект акамулятор куда  я распылю старый
      [tag]: total[tag] ? total[tag] + 1 : 1, // а свойству с значением тега я поставлю в зависимости от тру и фелс
    };
  }, {});
};

console.log(BestOfBestTagTernar(bestOf));

/////

const players = [
  { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
  { name: 'Poly', playtime: 469, gamesPlayed: 2 },
  { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
  { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const totalAveragePlaytimePerGame = players.reduce((total, player) => {
  return total + player.playtime / player.gamesPlayed;
}, 0);

console.log(totalAveragePlaytimePerGame);

////

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

const getTotalFriendCount = users => {
  const allfriends = users.reduce((total, user) => {
    return [...total, ...user.friends];
  }, []);
  return allfriends.length;
};

console.log(getTotalFriendCount(users));
