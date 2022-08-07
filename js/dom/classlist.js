const navEl = document.querySelector('.site-nav');
console.log(navEl.classList); // свойство в котором храниться объект в протипе которого есть хорошие методы

/*
 * Интерфейс classList
 * - add(класс)
 * - remove(класс)
 * - toggle(класс)
 * - replace(старыйКласс, новыйКЛасс)
 * - contains(класс)
 */

navEl.classList.add('!!!', '??');
console.log(navEl.classList);
navEl.classList.remove('!!!');
console.log(navEl.classList);
navEl.classList.replace('??', 'replaced');
console.log(navEl.classList);
console.log(navEl.classList.contains('replaced'));
const magicBtn = document.querySelector('.magic-btn');

// magicBtn.addEventListener('click', () => {
//   navEl.classList.add('.add!!!');
// });
magicBtn.addEventListener('click', () => {
  navEl.classList.toggle('toggle!!!');
});

const currentPageUrl = '/about';

const navElScnd = document.querySelector(`.site-nav__link[href="${currentPageUrl}"]`);

console.log(navElScnd);

navElScnd.classList.add('site-nav__link--current');
