/*
 * События мыши
 * - mouseenter и mouseleave (это ховер)
 * - mouseover и mouseout
 * - mousemove (chatty event - болтливое событие)
 * - Допмат по координатам: https://nerdparadise.com/programming/javascriptmouseposition
 * - Хорошая задачка - https://learn.javascript.ru/task/move-ball-field
 */

const boxEl = document.querySelector('.js-box');

function onMouseEnter(event) {
  event.currentTarget.classList.add('box--active');
}
function onMouseEsq(event) {
  event.currentTarget.classList.remove('box--active');
}
function onMousуMove(event) {
  console.log('🚀event', event);
}

boxEl.addEventListener('mouseenter', onMouseEnter);
//ховер ин
boxEl.addEventListener('mouseleave', onMouseEsq);
//ховер аут

boxEl.addEventListener('mousemove', onMousуMove);
// chatty event - болтливое событие == выдает кучу данных (координаты и т д) при движении
