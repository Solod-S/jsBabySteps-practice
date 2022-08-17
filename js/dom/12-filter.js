const tech = [
  { label: 'HTML' },
  { label: 'CSS' },
  { label: 'JavaScript' },
  { label: 'Node.js' },
  { label: 'React' },
  { label: 'Vue' },
  { label: 'Next.js' },
  { label: 'Mobx' },
  { label: 'Redux' },
  { label: 'React Router' },
  { label: 'GraphQl' },
  { label: 'PostgreSQL' },
  { label: 'MongoDB' },
];

/*
 * 1. Рендерим разметку элементов списка
 * 2. Слушаем изменение фильтра
 * 3. Фильтруем данные и рендерим новые элементы
 */

const refs = {
  input: document.querySelector('#filter'),
  list: document.querySelector('.js-list'),
  createHtmlFromMarkUp(markup) {
    refs.list.innerHTML = markup;
    // refs.list.innerHTML = refs.createListMarkUp(tech);
    // если место куда мы пушим разметку пустое (не нужно удалять разметку) можно использовать innerHTML вместо insertAdjacentHTML(`beforebegin`, '<a>перед elem</a>');
  },
  createListMarkUp(items) {
    return items
      .map(
        item => `<li>${item.label}</li>
    `
      )
      .join('');
  },
  onFilterChange(event) {
    // refs.list.innerHTML = '';
    const filterSearch = event.target.value.toLowerCase();
    // переменная = значение текущего событие которое конвертируеться в нижний регистр с помощью метода .toLowerCase()
    const filterFind = tech.filter(item => item.label.toLocaleLowerCase().includes(filterSearch));
    //  переменная = значение прогнаного массива с обьектами через фильтр, в котором при переборе по объектно все
    //конвертируеться в нижний регистр с помощью метода.toLowerCase() и проверяеться методом includes на то что мы ищем (filterSearch)
    // если в этом обьекте в лейбле есть кусок текста который мы ищем в filterSearch, пжл верни мне этот объект
    console.log(filterFind);
    refs.list.innerHTML = refs.createListMarkUp(filterFind);
    //отрисовываем элемент по filterFind
  },
};

refs.createHtmlFromMarkUp(refs.createListMarkUp(tech));

// refs.list.insertAdjacentHTML('beforeend', refs.createListMarkUp(tech));

refs.input.addEventListener('input', refs.onInputChange);
//слущает все события
refs.input.addEventListener('input', _.debounce(refs.onFilterChange, 300));
//если через лодеш + debounce то слушает после простоя 2секунд
