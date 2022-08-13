/*
 * 1. Открыть и закрыть по кнопке
 * 2. Закрыть по клику в бекдроп: onBackDropClick
 * 3. Закрыть по ESC: onEscapeKeypress
 *
 * В CSS есть класс show-modal, который необходимо добавить на body при открытии модалки
 */

const refs = {
  body: document.body,
  backdrop: document.querySelector('.js-backdrop'),
  btnToOpen: document.querySelector('[data-action="open-modal"]'),
  btnToClose: document.querySelector('[data-action="close-modal"]'),
  openBackdrop() {
    window.addEventListener('keydown', refs.onKeyPresEsq);
    //при открытии модалки добавляем слушателя событий - чтобы слушать глобально  (чтобы при нажатии ескейп срабатывала функция)
    refs.body.classList.add('show-modal');
  },
  closeBackdrop() {
    window.removeEventListener('keydown', refs.onKeyPresEsq);
    //при закрытии модалки убираем слушателя событий на ОКНО - чтобы слушать глобально (чтобы при нажатии ескейп НЕ РАБОТАЛА функция)
    refs.body.classList.remove('show-modal');
  },
  closeOnTargetClick(event) {
    console.log(event.currentTarget);
    //event.currentTarget -- текущий єлемент где висит евент листнер
    console.log(event.target); // используем чтобы точно указать что выбираем
    //event.target -- целевой єлемент, куда мы в интерфейсе жмакнули
    if (event.currentTarget === event.target) {
      refs.closeBackdrop();
    }
    // event.currentTarget передает ссылку на тот элемент на котором его закрепили в addEventListener
    // event.target === выосоточная 🚀 которая показывает ссылку на тот элент на которой мы кликнули
    // если при клике две ссылки совпадут то вызовем колбек функцию которая переключает классы  на боди
  },
  onKeyPresEsq(event) {
    console.log(event);
    if (event.code === 'Escape') {
      refs.closeBackdrop();
    }
  },
};
// console.log('🚀 ~ file: 06-modal.js ~ line 12 ~ btn', refs.backdrop);

refs.btnToOpen.addEventListener('click', refs.openBackdrop);
refs.btnToClose.addEventListener('click', refs.closeBackdrop);
refs.backdrop.addEventListener('click', refs.closeOnTargetClick);

//event.currentTarget -- текущий єлемент где висит евент листнер
//event.target -- целевой єлемент, куда мы в интерфейсе жмакнули
