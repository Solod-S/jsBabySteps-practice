/*
 * Прототип объекта
 *
 * - https://miro.com/app/board/o9J_ku0WE0g=/
 * - Object.create()
 * - [[Prototype]] и __proto__
 * - Object.getPrototypeOf()
 * - Собственные свойства и Object.prototype.hasOwnProperty()
 * - Цепочка прототипов
 */

const objC = {
  c: 3,
};

const objB = Object.create(objC); // создает пустой объект (в скобках указываем обьект который будет прототипом)
objB.b = 2; // потом начинаем записывать свойтва

const objA = Object.create(objB);
objA.a = 1;

console.log(objC.с);
console.log(objC.hasOwnProperty('a'));

console.log(`objB.b`, objB.b); // это свойство мы добавили
console.log(`objB.c`, objB.c); // это свойство находит в ссылке на прототип (const objB = Object.create(objC);)
console.log(`objA.a`, objA.a);
console.log(`objA.b`, objA.b);
console.log(`objA.c`, objA.c);
objA.c = 'изменили на 222';
console.log(`objA.c`, objA.c);
console.log(`objA.c`, objC.c);

const doomMassage = Object.create({ massage: 'Это свойство на объекте-прототипе' });
doomMassage.massage = 'Это собственное свойство объекта';
console.log(doomMassage);

//  'Это собственное свойство объекта'
//  'Это свойство на объекте-прототипе'

/*
 * Алгоритм поиска свойства в цепочке прототипов:
 * 1. Поиск начинается в собственных свойствах
 * 2. Если свойства нет в сообственных, поиск переходит к цепочке прототипов
 * 3. Поиск прекращается при первом совпадении (есть такое свойство)
 * 4. Возвращается значение свойства
 */
