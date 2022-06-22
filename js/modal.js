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

// !!!!!!!!!!!1111 напиши скрипт который попросит пользователя ввести число и степень, оно его возведет и выдаст результат

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

// !!!!!!!!!!!8888888888 операторы сравнения которые загоняют в бульк (тру фелс)

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

// !!!!!!!!!!!10 Логическое преобразование любого значения к булю (через конструктор )
// console.log('0', Boolean(0));
// console.log('строка 0', Boolean('0'));
// console.log('-1', Boolean('-1'));
// console.log('asff', Boolean('afasfas'));
// console.log('null', Boolean(null));
// console.log('false', Boolean(false));

// ----------------------------------------------------------------------------------------------------------Логические операторы

// !!!!!!!!!!!10 Логическое И (операции &&)
// остановка на лжи(через буль то что в фелс подпадает) и дальше не идет
// выдает нам последний операнд или то на чем остановилосб
// чтобы операция была выполнена успешно нужно чтобы все было тру

// console.log(7 && 5);
// console.log(7 && 5 && 'asfasf');
// console.log(7 && 5 && 'asfasf' && -2);
// // все по булю тру и поэтому выдает последнего операнда
// console.log(7 && 0 && 'asfasf' && -2);
// // ноль это то на чем запнулось (то что в буле будет фелс)

// !!!!!!!!!!!10 Логическое Или (операции II)
// остановка на правде(через буль то что в тру подпадает) и дальше не идет
// выдает нам последний операнд или то на чем остановилось
// чтобы операция была выполнена успешно нужно чтобы все было фелс

// console.log('2 || 3', 2 || 3);
// // // 2 это то на чем запнулось (то что в буле будет тру)
// console.log('0 || 3', 0 || 3);
// // // 3 это то на чем запнулось (то что в буле будет тру)
// console.log('0 || false || null', 0 || false || null);
// // // все по булю фелс и поэтому выдает последнего операнда

// !!!!!!!!!!!10 Логическое НЕ (операции !)
// делает инверсию правда>неправда или неправда<правда

// console.log('!false', !false);
// console.log('!true', !true);
// console.log('!12312', !12312);
// console.log('!0', !0);

// // вначале оно все к булю приводит, потом инверсию делает
