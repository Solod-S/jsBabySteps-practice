/*
 * Библиотека lazysizes
 * - feature detection
 * добавляем класс и ссылку пишем в data-src
 *           class="lazyload"
          data-src="./images/avocado-cooked-delicious-dish-262959.jpg"
 */
//   <!-- <script
//   src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js"
//   integrity="sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ=="
//   crossOrigin="anonymous"
//   referrerpolicy="no-referrer"
// ></script> -->

if ('loading' in HTMLImageElement.prototype) {
  console.log(`Браузер поддерживает ленивки`);

  // если на прототипе есть loading, значит браузер поддерживает линивую загрузку из коробки
  addSrcAttrToLazyImages();
} else {
  console.log(`Браузер не поддерживает ленивки`);
  // не поддерживает
  addLazySizesScript();
}
//делаем проверку фичи
// делаем проверку фичи

function addSrcAttrToLazyImages() {
  const imgLazy = document.querySelectorAll('.lazyload');
  // делаем квери  селектор на все картинки
  imgLazy.forEach(img => {
    img.src = img.dataset.src;
  });
  // перебираем их все с помощью форич + создаем новый дата атрибут src и туда копируем значение из data-src
}

function addLazySizesScript() {
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  script.integrity =
    'sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==';
  script.crossOrigin = 'anonymous';
  script.referrerpolicy = 'no-referrer';

  document.body.appendChild(script);
  // создаем тег + заполняем его параметрами и апендим вконец
  //
}

const refs = {
  lazyImages: document.querySelectorAll('img[data-src]'),
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

// добавляем рюшки
