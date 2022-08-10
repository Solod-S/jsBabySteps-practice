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
titleEl.innerHTML += '<a>!!!</a>'; // так не делаем слишком нагружает дом (оно обнуляет и записывает заново)

/*
 * Вставка разметки с insertAdjacentHTML() НЕ ДИСТРУКТИВНАЯ И МОЖНО ИСПОЛЬЗОВАТЬ
 * http://fecore.net.ua/books/m5ph3r-javascript/module-07/dom-manipulation.html#%D0%BC%D0%B5%D1%82%D0%BE%D0%B4-insertadjacenthtml
 */
//elem.insertAdjacentHTML(position, string);
// "beforebegin" - перед elem
// "afterbegin" - внутри elem, перед всеми детьми
// "beforeend" - внутри elem, после всех детей
// "afterend" - после elem

titleEl.insertAdjacentHTML(`beforebegin`, '<a>перед elem</a>');
titleEl.insertAdjacentHTML('afterbegin', '<a>внутри elem, перед всеми детьми</a>');
titleEl.insertAdjacentHTML('beforeend', '<a>внутри elem, после всех детей</a>');
titleEl.insertAdjacentHTML('afterend', '<a>после elem</a>');
