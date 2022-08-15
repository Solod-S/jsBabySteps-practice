/*
 * Делегирование
 * - один из многих
 * - несколько из многих и Set
 */

const refs = {
  tegsContainerEl: document.querySelector('.js-tags'),
  selectedTag: null,
  // в этой переменной будем хранить значение ОДНОГО тега что выбрали
  selectedTags: new Set(),
  // в этой переменной будем хранить значение НЕСКОЛЬКИХ тегов что выбрали
  // Объекты Set (НАБОР УНИКАЛЬНЫХ ЭЛЕМЕНТОВ) позволяют вам сохранять уникальные значения любого типа, как примитивы, так и другие типы объектов. (методы --- .add(value), .delete(value), clear() .has(value))
  onTegContainernClickSelecteOne(event) {
    if (event.target.nodeName !== 'BUTTON') {
      return;
    }
    // если плохо уходим
    // если ок идем ниже
    // event.target.style.color = 'red';

    const currenActiveBtn = document.querySelector('.tags__btn--active');
    // переменная активной кнопки (когда мы добавили класс что кнопка активная)

    // if (currenActiveBtn) {
    //   currenActiveBtn.classList.remove('tags__btn--active');
    // }
    // если у нас есть активная кнопка (запрос currenActiveBtn возвращает TRUE а не Null) то мы удаляем класс на этой кнопке и она становиться не активной
    currenActiveBtn?.classList.remove('tags__btn--active');

    // ЗАМЕНА IF, если у нас есть currenActiveBtn то оно выполнит действие после ?.
    event.target.classList.add('tags__btn--active');
    // при клике добавляем класс на выбранную цель
    refs.selectedTag = event.target.dataset.value;
    // задаем значение нашей переменной событие > выбраная цель > атрибут HTM data-.... > его значение
    console.log(refs.selectedTag);
  },
  //ВЫБИРАЕМ ОДНОГО
  //----------------------------------------------------------------------
  //----------------------------------------------------------------------
  //----------------------------------------------------------------------
  //----------------------------------------------------------------------
  onTegContainernClick(event) {
    if (event.target.nodeName !== 'BUTTON') {
      return;
    }
    // если плохо уходим
    // если ок идем ниже
    // event.target.style.color = 'red';

    if (event.target.classList.contains('tags__btn--active')) {
      //если при клике по выбранной цели она содержит класс tags__btn--active (мы клацаем при удалении выбраного)
      refs.selectedTags.delete(event.target.dataset.value);
      // в колекции уникальных значений refs.selectedTags = new Set () мы удаялем значение которое указано в data-value = "" у выбраной цели
    } else {
      refs.selectedTags.add(event.target.dataset.value);
      // в другом сл мы добавляем значение которое указано в data-value = "" у выбраной цели
    }
    event.target.classList.toggle('tags__btn--active');
    //В ЛЮБОМ СЛУЧАЕ при клике туглем класс на выбранную цель
    console.log(refs.selectedTags);
  },
  //ВЫБИРАЕМ БОЛЕЕ ОДНОГО
};
console.log(refs.tegsContainerEl);

refs.tegsContainerEl.addEventListener('click', refs.onTegContainernClick);

/// ЗАМЕНА ИФУ IF ?.

const obj = {
  obj2: {
    obj3: {
      value: 3,
      color: 'red',
    },
  },
};

if (obj && obj.obj2 && obj.obj2.obj3) {
  console.log(obj.obj2.obj3.value);
}
// если obj === true, + obj.obj2 === true,+ obj.obj2.obj3 === true тогда выполним код и покажем value

console.log(obj?.obj2?.obj3?.color);
// если obj === true, + obj.obj2 === true,+ obj.obj2.obj3 === true тогда выполним код и покажем red
