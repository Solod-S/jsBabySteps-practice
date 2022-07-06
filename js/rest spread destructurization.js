const spred = [0, ...[1, 2, 3], 4, 5]; // мы буквально распылили масив [1, 2, 3] ==> 1, 2, 3
console.log(spred);

const temp = [1, 2, 3, 4, 5, 6];
console.log(Math.max(1, 2, 3, 4, 5, 6));
console.log(Math.max(temp)); //не работает
console.log(Math.max(...temp)); // не умеет работать с сложными объектами, нужно распылить [1, 2, 3, 4, 5, 6] ==> 1, 2, 3, 4, 5, 6

const a = [{ a: 1 }, { b: 2 }, { c: 3 }];
const b = [...a]; // распилили и вставили [{ a: 1, b: 2, c: 3 }];
console.log(a);
console.log(b);
console.log(a === b); // сами масивы не ровны
console.log(a[0] === b[0]); // а вот ссылки на оригинальный объект{ a: 1 } === { a: 1 }

a[0].a = 3;
// ---------------------------- обьединяем с помощью конката или спреда

const first = [1, 2];
const second = [3, 4];
const third = [5, 6];

const total = [...first, ...second, ...third];
console.log(`обьеденили с помощью spread ${total}`);
const totalConcat = first.concat(second, third);
console.log(`обьеденили с помощью concat ${totalConcat}`);

// ---------------------------- распыляем объекты

const x = { a: 1, b: 2 };
const c = { a: 10, z: 22 };

// ------ старый способ

const z = Object.assign({}, x, c);
// оно создает {} и распыляет туда x (a: 1, b: 2 ) + c (a: 10, z: 22), двух одинаковых ключей в обьекте быть не может... оно заменяет значения совпавшего ключа a: 1 ==> : 10
console.log(z);
// ------

// ------ новый способо !!!!!!!!!!
const g = { a: 1, b: 2 };
const f = { a: 10, z: 22 };

const d = { ...g, ...f };
console.log(`совеременный способ {...g, ...f}`);

console.log(d);
// ------ важен порядок
const dd = { ...g, b: 12, ...f, z: 12 };
console.log(`{ ...g,
  b: 12,
  ...f,
  z: 12,}`);
console.log(dd);

// -------------------------- поменять настройки

const baseSettings = {
  theme: 'light',
  sound: true,
  notification: false,
};

const mySetting = {
  theme: 'dark',
};

const currentSetting = { ...baseSettings, ...mySetting };
console.log(currentSetting);
