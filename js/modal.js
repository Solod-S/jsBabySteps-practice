// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//     body: document.querySelector('body'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('bacdrop--is-hidden');
//     refs.body.classList.toggle('no-scroll');
//   }
// })();

// !!!!!!!!!!!1111 напиши скрипт который попросит пользователя ввести число и степень, оно его возведет и выдаст релузьтат

// 1 попросить пользователя ввести число и сохранить переменную

// let base = prompt('Гони число!');
// base = Number(base);
// console.log(base);
// // 2 попросить пользователя ввести степень и сохранить переменную
// let power = prompt('Гони степень');
// power = Number(power);
// console.log(power);
// // 3 возвести введенные данные в степень и выдать результат
// const result = base ** power;
// console.log('Твой результат', result);

// !!!!!!!!!!!222 Генерим псевдослучайные числа

// const max = 30;
// const min = 10;

// console.log(Math.random() * (max - min) + min);

// формула гененирования (если нужно задать от 10 до 30) Math.random () * (max - min) + min

// !!!!!!!!!!!222 Генерим псевдослучайные числа и округляем

// const max = 30;
// const min = 10;
// const result = Math.round(Math.random() * (max - min) + min);

// console.log(result);

// !!!!!!!!!!!3333 Свойство подсчета длинны строки length

// const message = 'asfasfasfaasfasfsafaff';
// console.log(message.length);

// !!!!!!!!!!!4444 Конкетынация

// const firstName = 'Sergey';
// const lastName = 'Solod';
// const fullName = firstName + ' ' + lastName;
// console.log(fullName);

// !!!!!!!!!!!555 Шаблонные строки

// const quantity = 15;
// const orderMsg = `Спасибо что заказали ${quantity} холодильников`;

// console.log(orderMsg);

// !!!!!!!!!!!6666 Нормализация с помощью toLowerCase (пушистый поиск когда все под маленький регистр загоняем, защита от большой буквы)

// let brand = 'Samsung';
// brand = brand.toLowerCase();
// console.log(brand);

// let brand = 'Samsung';
// brand = brand.toLowerCase(); делаем маленьким регистром
// console.log(brand);
// !!!!!!!!!!!6777777777 Поиск слова в строке через includes ()

// const blacklistword1 = 'спам';
// const blacklistword2 = 'распродажа';

// const mail1 = 'Это не спам!';
// const mail2 = 'Мамой клянусь заработаешь!';
// const mail3 = 'Это не РаспроДажа!';

// console.log(mail1.includes(blacklistword1));
// console.log(mail1.includes(blacklistword2));
// console.log(mail2.includes(blacklistword1));
// console.log(mail2.includes(blacklistword2));
// const NormalizedMail3 = mail3.toLowerCase();
// console.log(NormalizedMail3.includes(blacklistword1));
// console.log(NormalizedMail3.includes(blacklistword2));

// // const NormalizedMail3 = mail3.toLowerCase(); делаем письмо маленьким регистром и загоняем в переменную
// // console.log(NormalizedMail3.includes(blacklistword1)); в переменной письма ищем через инклуд переменую блеклистворд

// !!!!!!!!!!!8888888888 операторі сравнения которіе загоняют в бульк (тру фелс)

// console.log('5 > 1', 5 > 1);
// console.log('1 > 5', 1 > 5);
// console.log('5 >= 5', 5 >= 5);
// console.log('5 > 5', 5 > 5);

// !!!!!!!!!!!9999 Для сравнения используем строгое сравнение === или !==(не ==) при таком сравнение не происходит преобразование типов
// const equal = 1 == true;
// const equal1 = 1 == '1';
// const equal2 = 1 === '1';
// const equal3 = 1 === true;
// console.log('1 == true', equal);
// console.log('1 == 1', equal1);
// console.log('1 === 1 в строке', equal2);
// console.log('1 === true', equal3);

// // const equal1 = 1 == '1';
// // const equal2 = 1 === '1'; СТРОГОЕ СРАВНИЕ РАВЕНСТВА ИСПОЛЬЗУЕМ
