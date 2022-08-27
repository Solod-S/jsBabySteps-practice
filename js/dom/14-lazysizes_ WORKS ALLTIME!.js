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

const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    const { potions } = this;
    return potions;
  },
  addPotion(newPotion) {
    for (let potion of atTheOldToad.potions) {
      console.log(potion);
      if (potion.name === newPotion.name) {
        // console.log('!');
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
      // else {
      //   const newProduct = {
      //     ...newPotion,
      //   };
      //   atTheOldToad.potions.push(newProduct);
      // }
    }

    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    const { potions } = this;
    for (let i = 0; i < potions.length; i += 1) {
      if (potions[i].name === potionName) {
        potions.splice(i, 1);
      }
    }

    // const potionIndex = this.potions.indexOf(potionName);

    // if (potionIndex === -1) {
    //   return `Potion ${potionName} is not in inventory!`;
    // }

    // this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const { potions } = this;
    for (let i = 0; i < potions.length; i += 1) {
      const { name } = potions;
      if (potions[i].name === oldName) {
        potions[i].name = newName;
      }
    }

    // const potionIndex = this.potions.indexOf(oldName);

    // if (potionIndex === -1) {
    //   return `Potion ${oldName} is not in inventory!`;
    // }

    // this.potions.splice(potionIndex, 1, newName);
  },
  // Change code above this line
};

console.log(atTheOldToad.addPotion({ name: 'Power potion', price: 270 }));
console.log(atTheOldToad.potions);
