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
