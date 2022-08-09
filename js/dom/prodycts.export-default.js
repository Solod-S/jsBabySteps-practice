import products from './data/proucts.js';

console, console.log(products);

// {
//   name: 'Сервоприводы',
//   description:
//     'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
//   price: 2000,
//   available: true,
//   onSale: true,
// },

/*
 * Создаём карточку продукта
 * - В классе продукта может быть product--on-sale product--not-available
 */

/*
<article class="product">
  <h2 class="product__name">Название</h2>
  <p class="product__descr">Описание</p>
  <p product__pridct>Цена: 1111 кредитов</p>
</article>
*/

/*
 * Пишем функцию для создания карточки продукта
 */

const articleWrapperEl = document.createElement('article');
articleWrapperEl.classList.add('product');

const articleNameEl = document.createElement('p');
articleNameEl.classList.add('product__name');
articleNameEl.textContent = 'Название';

const articleDscrEl = document.createElement('p');
articleDscrEl.classList.add('product__descr');
articleDscrEl.textContent = 'Описание';

const articlePriceEl = document.createElement('p');
articlePriceEl.classList.add('product__pridct');
articlePriceEl.textContent = '1111 кредитов';

const createCard = ({ name, description, price }) => {
  const articleWrapperEl = document.createElement('article');
  articleWrapperEl.classList.add('product');

  const articleNameEl = document.createElement('p');
  articleNameEl.classList.add('product__name');
  articleNameEl.textContent = name;
  articleNameEl.style.fontSize = '22px';

  const articleDscrEl = document.createElement('p');
  articleDscrEl.classList.add('product__descr');
  articleDscrEl.textContent = description;

  const articlePriceEl = document.createElement('p');
  articlePriceEl.classList.add('product__pridct');
  articlePriceEl.textContent = price;

  articleWrapperEl.append(articleNameEl, articleDscrEl, articlePriceEl);
  return articleWrapperEl;
};

console.log(createCard(products[0])); // 1 карточка

const elements = products.map(createCard); // колбек функция для перебора всех карточек

const cardPlace = document.querySelector('.js-products');

cardPlace.append(...elements); // перемещаем разметку
