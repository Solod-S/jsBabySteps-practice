// (() => {
//   const menuBtnRef = document.querySelector('[data-menu-button]');
//   const mobileMenuRef = document.querySelector('[data-menu]');
//   const bodyOverscroll = document.querySelector('body');

//   menuBtnRef.addEventListener('click', () => {
//     const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

//     menuBtnRef.classList.toggle('--is-open');
//     menuBtnRef.setAttribute('aria-expanded', !expanded);

//     mobileMenuRef.classList.toggle('--is-open');
//     bodyOverscroll.classList.toggle('--overscroll-no');
//   });
// })();
// =------------------------------------
// =------------------------------------
// =------------------------------------
// const ermac = true;

// const solod = typeof 'sasfasf';
// const solod2 = typeof ermac;
// let x = 1;
// const pressed = 'НАЖАЛ ОК =)';

// console.log(solod);
// console.log(solod2);
// console.log(x);
// console.log(ermac);
// alert('type OK');
// console.log(pressed);

// =------------------------------------

// Метод виндов конфирм и промт
// const areYouOk = confirm('С Вами все хорошо?');
// console.log(areYouOk);

// const TypeSmth = prompt('Набери слово ХАЧАПУРИ');
// console.log(TypeSmth);

// let TypeNumber = prompt('Набери слово число');
// TypeNumber = Number(TypeNumber);
// console.log(TypeNumber);
// console.log(typeof TypeNumber);
////////////////////////////////////////////////////////////////////////////
// const areYouOk = confirm('С Вами все хорошо?'); всплывающее окно
// console.log(areYouOk); выводим результат

// const TypeSmth = prompt('Набери слово ХАЧАПУРИ'); если нужно получить чета от пользователя
// console.log(TypeSmth); выводим результат

// let TypeNumber = prompt('Набери слово число');
// TypeNumber = Number(TypeNumber); чтобы получить не "строку" а если возможно "номер" (преобразование типа)
// console.log(TypeNumber);
// console.log(typeof TypeNumber); чтобы понять

// =------------------------------------
let elementWidth = '50px';
elementWidth = Number.parseInt(elementWidth);
console.log('Рамзер ширины без писклей', elementWidth);

// let elementWidth = '50px';
// elementWidth = Number.parseInt(elementWidth); .parseInt ПАРСИТ ЦЕЛЫЕ ЧИСЛА
// console.log('Рамзер без писклей', elementWidth);

let elementHeight = '50.232px';
elementHeight = Number.parseFloat(elementHeight);
console.log('Рамзер высоты без писклей', elementHeight);

// let elementWidth = '50px';
// elementHeight = Number.parseFloat(elementHeight); .parseInt ПАРСИТ НЕ ЦЕЛЫЕ ЧИСЛА
// console.log('Рамзер высоты без писклей', elementHeight);

let salаry = 130.12323;
salаry = salаry.toFixed(2);
salаry = Number(salаry);
// salаry = Number(salаry.toFixed(2)); МАТРЕШКА
console.log(salаry);

// let salаry = 130.12323; куча лишней инфы
// salаry = salаry.toFixed(2); отсекаем все после сотых значений
// salаry = Number(salаry); переводим из строки в цифры
// console.log(salаry); выводим в лог

// =------------------------------------ преобразование к числу

let quantity = 30;
let notQuantity = 'Тут не может быть число';

console.log(quantity);
console.log(Number(quantity));
console.log(Number(notQuantity));

// console.log(Number(quantity)); привести к числу
// console.log(Number(notQuantity)); привести к числу

// =------------------------------------ обьект Math (математика)

const base = 10;
const power = 4;

// у нас есть число и степерь в которую мы его возводим
const resultBasePower = Math.pow(base, power);

// первое число которое берем, после запятой степень в которую возводим

console.log('Результат степени', resultBasePower);

console.log(10 ** 4);

// современный метод стпень высчитать (10 в 4 степени)
