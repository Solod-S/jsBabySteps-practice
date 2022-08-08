const magicBtn = document.querySelector('.js-magic-btn');

/*
 * Свойства элемента (hero)
 * - Изображение
 * - Текст и textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

const imageEl = document.querySelector('.hero__image');
console.log('😎 imageEl', imageEl);
console.log(imageEl.src); // старый котик https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
imageEl.src =
  'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
console.log(imageEl.src); // новый котик

const heroTitleEl = document.querySelector('.hero__title');
console.log(heroTitleEl.textContent);
heroTitleEl.textContent = 'Такая умничка, сладкая булочка';

const btnEl = document.querySelector('.magic-btn');
btnEl.addEventListener('click', () => (imageEl.src = 'https://loremflickr.com/320/240'));

/*
 * Атрибуты
 * - get(имя-атрибута)
 * - set(имя-атрибута) //
 * - remove(имя-атрибута) // imageEl.remove('src');
 * - has(имя-атрибута)
 */
console.log(`getAttribute`, imageEl.getAttribute('src'), imageEl.getAttribute('alt')); // работает с ЛЮБЫМ АТРИБУТОМ КОТОРЫЙ ТЫ МОЖЕШЬ ПРИДУМАТЬ СЕБЕ
console.log(imageEl.src); // только для тех атрибутов которые есть свойствами обьекта (практически все)
// imageEl.remove('src'); // удаляем атрибут src:
console.log(`hasAttribute`, imageEl.hasAttribute('src')); // проверяем есть ли такой атрибут (вернет тру или фелс)
/*
 * Data-атрибуты
 */
const actions = document.querySelectorAll('.js-actions button');
console.log('🚀 ~ file: obj_properties.js ~ line 39 ~ action', actions);
console.log(`data-action="add"`, actions[0].dataset); // action="add"
console.log(`data-action="remove"`, actions[1].dataset); // action="remove"
console.log(`data-action="edit"`, actions[2].dataset); // action="edit"
console.log(`data-action="add"`, actions[0].dataset.action); // "add"
console.log(`data-action="remove"`, actions[1].dataset.action); // "remove"
console.log(`data-action="edit"`, actions[2].dataset.action); // "edit"
console.log(`===============================================`);
console.log(actions[0].getAttribute('data-action'));
console.log(actions[1].getAttribute('data-action'));
console.log(actions[2].getAttribute('data-action'));
