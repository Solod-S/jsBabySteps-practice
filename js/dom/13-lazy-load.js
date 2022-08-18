/*
 * Ленивая загрузка изображений (концепция)
 * - нативная поддержка
 * - событие загрузки изображения
 */

const refs = {
  lazyImages: document.querySelectorAll('img[loading="lazy"]'),
  imageLoad(event) {
    console.log(`картинка загрузилась`);
    event.target.classList.add('appear');
    //при загрузке картинки к ней добавляеться класс
  },
};

refs.lazyImages.forEach(image => {
  image.addEventListener('load', refs.imageLoad, { once: true });
  // третий аргумент это настройки, мы передаем туда объект с настройкой once: true === что говорит браузеру, что слушатель события сработает только один раз и снимиться без римува
});
// перебираем forEach все картинки и на каждую вешаем слушателя события при load и выполнение колбек функции
console.log(refs.lazyImages);
