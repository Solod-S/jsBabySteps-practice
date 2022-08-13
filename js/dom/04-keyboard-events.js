/*
 * Типы событий: keypress, keydown, keyup // все слушает (keydown - как нажали и keyup - как отжали)
 * - Ограничения keypress // есть ограничения
 * - Свойства KeyboardEvent.key и KeyboardEvent.code // KeyboardEvent.key - будет передавать в зависимости от языка "s і ы" &&  KeyboardEvent.code - на любом языке будет показывать дефолтную физическую кнопку на клавиатуре (англ)
 */

const refs = {
  output: document.querySelector('.js-output'),
  clear: document.querySelector('.js-clear'),

  OnKeyPress(event) {
    console.log(event);
    console.log(event.key); // будет передавать в зависимости от языка "s і ы"
    console.log(event.code); // на любом языке будет показывать дефолтную физическую кнопку на клавиатуре (англ)
    refs.output.textContent += event.key;
  },
  onKeyClear(event) {
    refs.output.textContent = '';
  },
};
refs.clear.addEventListener('click', refs.onKeyClear);
window.addEventListener('keypress', refs.OnKeyPress);
