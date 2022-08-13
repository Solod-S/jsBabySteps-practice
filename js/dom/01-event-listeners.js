//element.addEventListener(event, handler, options);
// event - имя события, строка, например "click".
// handler - коллбэк-функция которая будет вызвана при наступлении события.
// options - необязательный объект параметров с расширенными настройками.
// [Список всех доступных событий](https://developer.mozilla.org/en-US/docs/Web/Events)

/*
 * События.
 * - Создание и удаление слушателей
 * - Именование колбеков для слушателей
 *    - handle*: handleSubjectEvent
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent
 * - Ссылочная идентичность колбеков
 * - Объект события
 */

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

// targetBtn.addEventListener('click', () => {
//   targetBtnClickHandler();
// });

function targetBtnClickHandler() {
  console.log('Теперь я актинва');
}
// как называть функции

addListenerBtn.addEventListener('click', () => {
  console.log(event);
  console.log(`Вешаю слушателя события на целевую кнопку`);
  targetBtn.addEventListener('click', targetBtnClickHandler);
});
// при килике на один элемент можем вашать действие на другой элемент
// () => {console.log(`Теперь я актинва`)};
// передаем при каком действии появться функция которую будет выполсняться

removeListenerBtn.addEventListener('click', () => {
  console.log(event);
  console.log('Снимаю слушателя события с целевой кнопки');
  targetBtn.removeEventListener('click', targetBtnClickHandler);
});
// () => {console.log(`Теперь я актинва`)};
// передаем при каком действии снимиться функция которую раньше выполнялась

// при килике на один элемент можем снимать действие на другой элемент
// но оно не будет работать ==> ФУНКЦИЯ ЭТО ОБЬЕКТ... МЫ ПЕРЕДАЕМ ДВЕ РАЗНЫЕ ФУНКЦИИ ТАК КАК ОНИ ЛЕЖАТ В РАЗНЫХ МЕСТАХ (ССЫЛКА)

//* - Ссылочная идентичность колбеков
//нужно преедавать ссылку на функцию а не писать ее тело в возврате
