/*
 * Свойство innerHTML
 * - чтение
 * - запись
 */

const titleEl = document.querySelector('.parsing__with-span');
console.log(titleEl.textContent);
console.log(titleEl.innerHTML);
//
// titleEl.innerHTML = ''; // обнуляем ТАК ДЕЛАТЬ МОЖНО
//
titleEl.innerHTML += '<a>!!!</a>';
