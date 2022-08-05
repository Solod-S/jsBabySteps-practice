/*
 * Основы ООП: класс, экземпляр (объект), интерфейс
 */

/*
 * Функции-конструкторы/класс
 * - Именование
 * - Оператор new
 * - Свойство Function.prototype
 */

const CarHOWITSWORK = function (config = {}) {
  console.log(config); // объект с настройками
  // 2. Функция вызывается в контексте созданного объекта,
  //    то есть в this записывается ссылка на него
  //   this.brand = config.brand;
  //   this.model = config.model;
  //   this.enginePow = config.enginePow;
  //   this.fourWheel = config.fourWheel;
  //     this.price = '$' + config.price;
  const { brand, model, enginePow, fourWheel, price } = config; // делаем деструктуризацию config.brand ==> brand
  this.brand = brand;
  this.model = model;
  this.enginePow = enginePow;
  this.fourWheel = fourWheel;
  this.price = '$' + price;
  this.date = '';
};

const Car = function ({ brand, model, enginePow, fourWheel, price } = {}) {
  this.brand = brand;
  this.model = model;
  this.enginePow = enginePow;
  this.fourWheel = fourWheel;
  this.price = '$' + price;
  this.date = 'none';
};

/// функция прототипа
// 3. В свойство this.__proto__ записывается ссылка на обьект Car.prototype
//    тоесть Car.prototype это ПРОТОТИП будущего обьекта (экземпляра)

Car.prototype.changeDate = function (date) {
  this.date = date;
  console.log(`function in proto`, this);
};

// 1. Если функция вызывается через new, создаётся пустой объект
const SuzukiVitara = new Car({
  // объект с настройками
  brand: 'Suzuki',
  model: 'Vitara',
  enginePow: 1.6,
  fourWheel: false,
  price: 21000,
}); // оператор new создает НОВЫЙ ПУСТОЙ ОБЬЕКТ И ССЫЛКАЕТЬСЯ НА КЛАСС Car

const SuzukiSX4 = new Car({
  brand: 'Suzuki',
  model: 'SX4',
  enginePow: 2.0,
  fourWheel: true,
  price: 26000,
});
const SuzukiSwift = new Car({
  brand: 'Suzuki',
  model: 'Swift',
  enginePow: 1.2,
  fourWheel: false,
  price: 17000,
});

console.log(Car);
console.log(SuzukiVitara);
console.log(SuzukiSX4);
console.log(SuzukiSwift);

SuzukiVitara.changeDate(2022); // в SuzukiVitara такого метода нет, оно идет дальше в прототип и находит эту метод

////////////////////////////////////////////
//////////////////
//////
console.log(
  '-----------------------------------------------------------------USERS-------------------------------------------------------------------'
);
const Users = function ({ name, surename, pass, location } = {}) {
  this.name = name;
  this.surename = surename;
  this.pass = pass;
  this.location = location;

  //   function changeName(newName) {
  //     console.log(`Name has been changed`);
  //      this.name = newName;
  //   }

  //   function changeSurName(newSureName) {
  //     console.log(`Surname has been changed`);
  //      this.surname = newSureName;
  //   }

  //   function changePass(newPass) {
  //     console.log(`Password has been changed`);
  //      this.pass = newPass;
  //   }

  //   function changeLocation(newLocation) {
  //     console.log(`Location has been changed`);
  //      this.location = newLocation;
  //   }
};

Users.prototype.changeName = function (newName) {
  console.log(`Name has been changed to ${newName}`);
  this.name = newName;
};

Users.prototype.changeSurName = function (newSureName) {
  console.log(`Surname has been changed to ${newSureName}`);
  this.surename = newSureName;
};

Users.prototype.changePass = function (newPass) {
  console.log(`Password has been changed to ${newPass}`);
  this.name = newPass;
};

Users.prototype.changeLocation = function (newLocation) {
  console.log(`Location has been changed to ${newLocation}`);
  this.location = newLocation;
};

const SergeyIvanov = new Users({
  name: 'Sergey',
  surename: 'Ivanov',
  pass: 1234,
  location: 'Ukraine',
});

console.log(SergeyIvanov);

SergeyIvanov.changePass(256789);
SergeyIvanov.changeName('SERGY');
SergeyIvanov.changeSurName('SOLOD');
SergeyIvanov.changeLocation(`Canada`);
console.log(SergeyIvanov);

const InnaSergeyvna = new Users({
  name: 'Inna',
  surename: 'Sergeyvna',
  pass: 124142,
  location: 'Ukraine',
});
console.log(
  '------------------------------------------------------------------------------------------------------------------------------------'
);

console.log(InnaSergeyvna);
InnaSergeyvna.changeName('INNA');
InnaSergeyvna.changeSurName('SOLOD');
InnaSergeyvna.changePass(12412444444);
InnaSergeyvna.changeLocation('Canada');
console.log(InnaSergeyvna);
console.log(
  '------------------------------------------------------------------------------------------------------------------------------------'
);
const AdolfSolod = new Users({ name: 'Adolf', surename: 'Solod', pass: 1242, location: 'Kiev' });

console.log(AdolfSolod);
AdolfSolod.changeName('ARNOLD');
AdolfSolod.changeSurName('SOLOD');
AdolfSolod.changePass(11);
AdolfSolod.changeLocation('Canada');

console.log(
  '-----------------------------------------------------------Products-------------------------------------------------------------------------'
);

class Alcohol {
  constructor({ name, price, quantity } = {}) {
    this.name = name;
    this.price = price + '$';
    this.quantity = quantity;
  }
  changePrice(newprice) {
    console.log(`price of the`, this.name, `has been changet to ${newprice}`);
    this.pice = newprice + '$';
  }
  changeQuantity(newQuantity) {
    console.log(`quantity of the`, this.name, 'has been changet to ${newQuantity}');
    this.quantity = newQuantity;
  }
  getQuantity() {
    console.log(this.quantity + ' botle(s)' + ' left');
    return this.quantity;
  }
}

const vine = new Alcohol({ name: 'vine', price: 45, quantity: 3 });

console.log(vine);
vine.changePrice(99);
vine.getQuantity();

console.log(vine);

const bear = new Alcohol({ name: 'bear', price: 12, quantity: 111 });

console.log(bear);
bear.changePrice(3);
bear.changeQuantity(222);
console.log(bear);

console.log(
  '-----------------------------------------------------------Smartphones-------------------------------------------------------------------------'
);
class Tell {
  constructor({ brand, name, model, memory, price } = {}) {
    this.brand = brand;
    this.name = name;
    this.model = model;
    this.memory = memory + 'GB';
    this.price = price + '$';
  }

  changeName(newName) {
    console.log(`You changed ` + this.name + ` to ${newName}`);
    this.name = newName;
  }

  changeModel(nemModel) {
    console.log(`You changed ` + this.model + ` to ${nemModel}`);
    this.model = nemModel;
  }
  changeMemory(newMemory) {
    console.log(`You changed ` + this.memory + ` to ${newMemory}GB`);
    this.memory = newMemory + 'GB';
  }

  changePrice(newPrice) {
    console.log(`You changed ` + this.price + ` to ${newPrice}$`);
    this.price = newPrice + '$';
  }
  getPrice() {
    console.log(
      `The price of ` + this.brand + ' ' + this.name + ' ' + this.model + ' =' + ' ' + this.price
    );
    return this.price;
  }
}

const IphoneXR = new Tell({ brand: 'Apple', name: 'Iphone', model: 'XR', memory: 128, price: 900 });

console.log(IphoneXR);
IphoneXR.changeMemory(256);
IphoneXR.changePrice(1200);
console.log(IphoneXR);
IphoneXR.getPrice();
console.log(
  '------------------------------------------------------------------------------------------------------------------------------------'
);
const SamsungGalaxyS10 = new Tell({
  brand: 'Samsung',
  name: 'Galaxy',
  model: 'S10',
  memory: 128,
  price: 900,
});

console.log(SamsungGalaxyS10);

//ВЫВОДЫ ВЫВОДЫ ВЫВОДЫ ВЫВОДЫ ВЫВОДЫ ВЫВОДЫ
// 1. У каждого обьекта есть свойство __proto__
// 2. В этом свойстве лежит ссылка на его ПРОТОТИП, то есть другой обьект
// 3. При создании литера обьекта, в свойство __proto__ записывается ссылка на Функция.prototype
// 4. Функция-конструктор это просто функция :)
// 5. Всю магию делает оператор new
// 6. Если функция вызывается через new, создаётся пустой объект
// 7. Функция вызывается в контексте созданного объекта
// 8. В свойство this.__proto__ записывается ссылка на обьект Функция.prototype
// 9. Ссылка на обьект возвращается в место вызова new Фунукция()
console.log(
  '------------------------------------------------------------------------------------------------------------------------------------'
);

class Storage {
  constructor(args = []) {
    this.items = args;
  }
  getItems() {
    return this.items;
  }
  addItem(newItem) {
    this.items.push(newItem);
  }
  removeItem(iteToremove) {
    const { items } = this;
    for (let i = 0; i < items.length; i += 1) {
      console.log(items[i]);
      if (items[i] === iteToremove) {
        items.splice(i, 1);
      }
    }
  }
}
const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
console.log(
  '--------------------------------------------------------get + set----------------------------------------------------------------------------'
);

// Change code above this line
class StringBuilder {
  constructor(value) {
    this.value = value;
  }
  getValue() {
    return this.value;
  }
  // padStart(newValue) {
  //   const valueTomassive = this.value.split('');
  //   valueTomassive.unshift(newValue);
  //   return (this.value = valueTomassive.join('').toString());
  // }
  padStart(newValue) {
    this.value = newValue.concat(this.value);
  }
  // padEnd(newValue) {
  //   const valueTomassive = this.value.split('');
  //   valueTomassive.push(newValue);
  //   return (this.value = valueTomassive.join('').toString());
  // }
  padEnd(newValue) {
    this.value += newValue;
  }
  // padBoth(newValue) {
  //   const valueTomassive = this.value.split('');
  //   valueTomassive.push(newValue) && valueTomassive.unshift(newValue);
  //   return (this.value = valueTomassive.join('').toString());
  // }
  padBoth(newValue) {
    this.value += newValue;
    this.value = newValue.concat(this.value);
  }
}
const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="

console.log(
  '-------------------------------------------------------------static key-----------------------------------------------------------------------'
);
class CarOne {
  // Change code below this line
  static MAX_PRICE = 50000;
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice < Car.MAX_PRICE) {
      this.#price = newPrice;
    }
    console.log(`${newPrice} to hight price`);
  }
  // Change code above this line
}

const audi = new CarOne({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000
console.log(
  '--------------------------------------------------------------static metods----------------------------------------------------------------------'
);
class CarTwo {
  static #MAX_PRICE = 50000;
  // Change code below this line
  static checkPrice(price) {
    if (price > CarTwo.#MAX_PRICE) {
      return 'Error! Price exceeds the maximum';
    }
    return 'Success! Price is within acceptable limits';
  }
  // Change code above this line
  constructor({ price }) {
    this.price = price;
  }
}

const audi2 = new CarTwo({ price: 36000 });
const bmw2 = new CarTwo({ price: 64000 });

console.log(CarTwo.checkPrice(audi2.price)); // "Success! Price is within acceptable limits"
console.log(CarTwo.checkPrice(bmw2.price)); // "Error! Price exceeds the maximum"
console.log(
  '--------------------------------------------------------------extends metods----------------------------------------------------------------------'
);
//Класс Admin наследует от класса User его конструктор, геттер и сеттер email,
//а также одноимённое публичное свойство.Важно помнить что приватные свойства и методы класса - родителя не наследуются классом - ребёнком.
class User {
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
// Change code below this line
class Admin extends User {
  static AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' };
}

console.log(
  '--------------------------------------------------------------super КОНСТРУКТОР ДОЧЕРНЕГО КЛАССА----------------------------------------------------------------------'
);

class UserTwo {
  email;
  accessLevel;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class AdminTwo extends UserTwo {
  // Change code below this line
  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }
  //!!!Первым делом в конструкторе дочернего класса необходимо вызвать специальную функцию super(аргументы) - это псевдоним конструктора родительского класса.
  //!!В противном случае, при попытке обратиться к this в
  //!!конструкторе дочернего клааса, будет ошибка. При вызове конструктора класса родителя передаём необходимые ему аругменты для инициализации свойств.
  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };

  // Change code above this line
}

const mango = new AdminTwo({
  email: 'mango@mail.com',
  accessLevel: AdminTwo.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

console.log(
  '----------------------------------------------------------------МЕТОДЫ ДОЧЕРНЕГО КЛАССА------------------------------------------------------------------'
);

class UserThrd {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class AdminUserThrd extends UserThrd {
  // Change code below this line

  constructor({ email, accessLevel, blacklist = [] }) {
    super(email);
    this.blacklistedEmails = blacklist;
    this.accessLevel = accessLevel;
  }
  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };

  blacklist(email) {
    this.blacklistedEmails.push(email);
    return 'email added to blacklist';
  }
  isBlacklisted(email) {
    if (this.blacklistedEmails.includes(email)) {
      return true;
    }
    return false;
  }
  // Change code above this line
}

const mangoThrd = new AdminUserThrd({
  email: 'mango@mail.com',
  accessLevel: AdminUserThrd.AccessLevel.SUPERUSER,
});
console.log(AdminUserThrd);
console.log(mangoThrd.blacklist('poly@mail.com')); //
console.log(mangoThrd.isBlacklisted('mango@mail.com')); // false
console.log(mangoThrd.isBlacklisted('poly@mail.com')); // true

console.dir(UserThrd);
console.dir(mangoThrd);

console.log(
  '----------------------------------------------------------------на финал------------------------------------------------------------------'
);

class Consoles {
  static priceLimit = 300;
  #_brand; // капсулирую (делаю приватным)
  _instaledGames = [];
  constructor({ brand, model, price, instaledGame = [] } = {}) {
    this.#_brand = brand;
    this._model = model;
    this._price = price;
    this._instaledGames = instaledGame;
  }
  //__instaledGames _price нельзя чтобы название сетера или гетера совпадало с ключами
  get model() {
    console.log(`Your model is ` + this._model);
    return this._model;
  }

  set model(newModel) {
    console.log(this._model + ` is chanched to ` + newModel);
    this._model = newModel;
  }

  get price() {
    console.log(`Your price is ` + this._price);
    return this._price;
  }

  set price(newPrice) {
    if (Consoles.priceLimit > newPrice) {
      console.log(`sorry the price is too low`);
    } else {
      console.log(this._price + ` is chanched to ` + newPrice);
      this._price = newPrice;
    }
  }

  get instaledGames() {
    console.log(`On this console installed such games like: ` + this._instaledGames);
    return this._instaledGames;
  }

  set instalGames(newgame) {
    console.log(`Your add: ` + newgame);
    this._instaledGames.push(newgame);
  }
}

const PS4 = new Consoles({ brand: 'Playstation', model: 'PS4 Pro', price: 400 });

console.log(PS4);
PS4.model = 'PS4 Pro ver.2.0';
PS4.model;
PS4.price = 500;
PS4.price;
PS4.instalGames = 'Fifa';
PS4.instalGames = 'NHL';
PS4.instaledGames;
