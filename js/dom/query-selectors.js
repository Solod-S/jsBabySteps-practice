//querySelector если нечего не нашел вернет Null
//querySelectorAll если нечего не нашел вернет []
//closest

const navEl = document.querySelector('.site-nav');
console.log(`navEl`, navEl);
//querySelector ищет и возвращает один элемент
const navItemEl = document.querySelector(`.site-nav__item`);
console.log(`navItemEl`, navItemEl);
//querySelector ищет и возвращает первое совпадение (.site-nav__item - 3шт)
const navLinksEl = document.querySelectorAll('.site-nav__link');
const navLinksEl2 = navItemEl.querySelectorAll('.site-nav__link'); // можно искать внутри navItemEl (document.navItemEl) инЫми словами ищем только внутри .site-nav
const navLinksE2 = document.querySelectorAll('.site-nav .site-nav__link'); // ищем только внутри .site-nav
//querySelectorAll ищет и возвращает все совпадения (.site-nav__item - 3шт)
console.log(`navLinksEl`, navLinksEl);
