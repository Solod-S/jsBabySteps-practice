/*
 * Цикл for
 */

// for (let i = 10; i >= 0; i -= 1) {
//   console.log(i);
// }
// console.log('Finish');

// for (задаем переменную; задаем условие; задаем операцию которая будет проходить с переменной)
//i -= 1 ================== i = i - 1 (i--)

// for (let i = 60; i >= 10; i -= 3) {
//   console.log(i);
// }

// for (let i = 50; i >= 1; i -= 8) {
//   console.log(i);
// }

// for (let i = 0; i <= 80; i += 8) {
//   console.log(i);
// }

// for (let i = 0; i <= 33; i += 7) {
//   console.log(i);
// }

// for (let i = 1; i > 0; i += 1) {
//   console.log(i);
// }

// -------------------------------------------- ЗАДАЧА 1

/*
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */

// //  1 сделать вары
// const employees = 3;
// let minSalary = 500;
// let maxSalary = 5000;
// let totalSalary = 0;
// // // 2 перебрать работников в цикле
// for (let i = 1; i <= employees; i += 1) {
//   //   // 3 сгенерить случайную зп
//   const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//   console.log(`Зарплата сотрудника ${i} = ${salary}грн`);
//   //   // 4  прибавить к тоталу
//   totalSalary += salary;
// }
// //   // вывести лог
// console.log(`ОБЩАЯ ЗАРПЛАТА ОТДЕЛА =${totalSalary}`);

// const debtor = 8;
// let minCredit = 100;
// let maxCredit = 1000;
// let totalCredit = 0;

// for (let i = 1; i <= 8; i += 1) {
//   const credit = Math.round(Math.random() * (maxCredit - minCredit) + minCredit);

//   console.log(`Кредит должника №${i} = ${credit}грн`);

//   totalCredit = credit + totalCredit;
// }
// console.log(`Общая сумма кредитов ${totalCredit}грн`);

// const manth = 12;
// const minSavings = 100;
// const maxSavings = 200;
// let totalSavings = 0;

// for (let i = 1; i <= 12; i = i + 1) {
//   const savings = Math.round(Math.random() * (maxSavings - minSavings) + minSavings);
//   console.log(`Вы отложили за ${i}й месяц ${savings}грн`);
//   totalSavings = savings + totalSavings;
// }

// console.log(`За год Вы смогли отложить ${totalSavings}грн`);

// -------------------------------------------- ЗАДАЧА 2

/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */

//  не идеальный вариант (ломаеться если начнем с min = 3)

// const min = 0;
// const max = 5;
// let total = 0;

// for (let i = min; i <= max; i += 2) {
//   total = total + i;
// }
// console.log(`Сумма всех чётных чисел в диапазонах от ${min} до ${max} = ${total}`);

//  сильно лучше
// const min = 0;
// const max = 6;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   console.log(i);

//   //  если это число делиться на 2 без остатка ( 4 / 2 = 2) с ним выполняем действие total = total + i ( общее = общее + значение числа которое в этой итерации делиться без остатка = честное)
//   if (i % 2 === 0) {
//     total = total + i;
//   }
// }
// console.log(`Сумма всех чётных чисел в диапазонах от ${min} до ${max} = ${total}`);

//  еще лучше (логика от обратного)

// const min = 0;
// const max = 8;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   //  если это число делиться на 2 с остатком ( 3 / 2 ) с ним выполняем действие continue (пропуск этерации total = total + i)
//   if (i % 2 !== 0) {
//     console.log('Нечётное число', i);
//     continue;
//   }
//   //  выполняем для всех кроме тех которые в if
//   console.log('Чётное число', i);
//   total = total + i;
// }
// console.log(`Сумма всех чётных чисел в диапазонах от ${min} до ${max} = ${total}`);
