/*
 * - Создание элементов
 * - Вставка узлов: appendChild(elem), insertBefore(elem, nextSibling), append(...elems), prepend(...elems)
 */
//--
// appendChild(elem) ---присойденить ребенка // добавляет в конце
//--
//insertBefore(elem(которыйй хотим добавить), nextSibling (перед кем хотим добавить))
//--
//append(...elems) --- в скобках пишем сколько элементов нам нужно вставить вконец
//--
//prepend(...elems) --- в скобках пишем сколько элементов нам нужно вставить вначало
/*
 * Создаём заголовок
 */

const titleElement = document.createElement('h1');
titleElement.classList.add('hero__title');
titleElement.textContent = 'ЗАГОЛОВОК';
console.log(titleElement);

// appendChild(elem) ---присойденить ребенка // добавляет в конце

document.body.appendChild(titleElement);

const imageEl = document.createElement('img');
imageEl.classList.add('hero__img');
imageEl.src = 'https://www.kpi.kharkov.ua/ukr/wp-content/uploads/sites/2/2016/10/it-1.jpg';
imageEl.alt = 'картинка';
imageEl.width = 640;
imageEl.setAttribute('width', 960);
document.body.appendChild(imageEl);

const textEl = document.createElement('p');
textEl.classList.add('hero__text');
textEl.textContent = 'текс';
document.body.appendChild(textEl);

const spanEl = document.createElement('span');
spanEl.textContent = 'тут строка?';
spanEl.classList.add('hero__span');
document.body.appendChild(spanEl);

const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.textContent = 'Отзывы';
navLinkEl.href = '/feedback';

navItemEl.appendChild(navLinkEl); // связываем li && a
console.log(navItemEl);

const navEl = document.querySelector('.site-nav');
navEl.appendChild(navItemEl);

//insertBefore(elem(которыйй хотим добавить), nextSibling (перед кем хотим добавить))

const navItemFirst = document.createElement('li');
navItemFirst.classList.add('site-nav__item');

const navLinkFirstEl = document.createElement('a');
navLinkFirstEl.classList.add('site-nav__link');
navLinkFirstEl.textContent = 'Главная';
navLinkFirstEl.href = '/index.html';

navItemFirst.appendChild(navLinkFirstEl);

navEl.insertBefore(navItemFirst, navEl.firstChild); // вставили вперед
// navEl.insertBefore(navItemFirst, navEl.children[3]); // на третью позицию

const articleEl = document.createElement('article');
articleEl.classList.add('hero-article');

const articleTitle = document.createElement('h2');
articleTitle.classList.add('hero-article__title');
articleTitle.textContent = 'У Гостомелі горів житловий будинок';

const articleImg = document.createElement('img');
articleImg.classList.add('hero-article__img');
articleImg.width = 640;
articleImg.src =
  'https://itvua.tv/wp-content/uploads/2022/08/298383180_955913375257964_2279885928898260950_n.jpg';

const articleText = document.createElement('p');
articleText.classList.add('hero-article__text');
articleText.textContent =
  'У Гостомелі сталася пожежа в приватному житловому будинку на вул. Кімерській. Про це повідомило сьогодні Бучанське районне управління Державної служби з надзвичайних ситуацій.';

// articleEl.appendChild(articleTitle);
// articleEl.appendChild(articleImg);
// articleEl.appendChild(articleText);

//append(...elems) --- в скобках пишем сколько элементов нам нужно вставить

articleEl.append(articleTitle, articleImg, articleText);

document.body.insertBefore(articleEl, titleElement);
