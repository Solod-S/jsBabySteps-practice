/*
 * Делегирование событий (вешаем на родителя слушателя событий, который отлавливает таргет детей)
 * - общий слушатель
 * - фильтр цели клика
 */

const refs = {
  parentDiv: document.querySelector('.js-container'),
  addBtn: document.querySelector('.js-add-btn'),
  labelCounter: 6,
  onClick(event) {
    if (event.target.nodeName !== 'BUTTON') {
      console.log(`event.target.nodeName !== 'BUTTON'`);
      return;
    }
    // фильтр цели клика или фильтр цели делигации
    // запрещаем срабатывать если кликаем не по кнопке, а например по DIV....
    console.log(event.target);
    // то по чему клацнули (<button type="button">Кнопка 1</button>)
    console.log(event.target.textContent);
    // текстовый контент того по чему клацали (если клацним в родителя то выдаст текстовый контент всех вложенных элементов)
    console.log(event.target.nodeName);
    // то как видит браузер элементы BUTTON DIV...
  },
  addBtnClick() {
    const newBtn = document.createElement('button');
    newBtn.textContent = `Кнопка ${refs.labelCounter}`;
    newBtn.type = 'button';
    refs.labelCounter += 1;
    refs.parentDiv.appendChild(newBtn);
  },
};

console.log(refs.parentDiv);
refs.parentDiv.addEventListener('click', refs.onClick);
refs.addBtn.addEventListener('click', refs.addBtnClick);
