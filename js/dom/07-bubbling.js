/*
 * Всплытие событий
 * event.target - целевой (исходный) элемент, тот самый элемент на котором произошло событие (тут это клик)
 * // на всех этапах всплытия не меняеться
 * event.currentTarget - текущий элемент, на слушателе которого поймали событие, тот самый элемент на котором висит addEventListener и оно отлавливает событие (тут это клик)
 */ // на этапе всплытия будем меняться на addEventListener-а
const refs = {
  parent: document.querySelector('#parent'),
  child: document.querySelector('#child'),
  innerChild: document.querySelector('#inner-child'),
};

refs.parent.addEventListener('click', onParentClick);
refs.child.addEventListener('click', onChildClick);
refs.innerChild.addEventListener('click', onInnerChildClick);

function onParentClick(evt) {
  console.log('onParentClick');
  console.log('onParentClick -> evt.target', evt.target);
  console.log('onParentClick -> evt.currentTarget', evt.currentTarget);
}

function onChildClick(evt) {
  console.log('onChildClick');
  console.log('onChildClick -> evt.target', evt.target);
  console.log('onChildClick -> evt.currentTarget', evt.currentTarget);
}

function onInnerChildClick(evt) {
  console.log('onInnerChildClick');
  console.log('onInnerChildClick -> evt.target', evt.target);
  console.log('onInnerChildClick -> evt.currentTarget', evt.currentTarget);
}
