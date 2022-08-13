/*
 * - Событие submit
 * - Действия браузера по умолчанию
 * - Свойство elements
 * - Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */
// event.preventDefault();
//'не выпролняем действие по умолнчанию (перезагрузку)'

const formEl = document.querySelector('.js-register-form');

formEl.addEventListener('submit', onFormSubmit);
/// на действие подписать (нажать кнопку тайп сабмит) за пускаем колбек функцию

function onFormSubmit(event) {
  event.preventDefault();
  //'не выпролняем действие по умолнчанию (перезагрузку)'
  console.log('не выпролняем действие по умолнчанию (перезагрузку)');
  ////////////////////////////////////////////////////////////////////////////////////////////////////
  //ТО КАК НЕ СОБИРАЕМ ДАТУ С ФОРМ -- ПАРМЕТР.currentTarget.elements.(name="subscription").value
  //ТО КАК НЕ СОБИРАЕМ ДАТУ С ФОРМ -- ПАРМЕТР.currentTarget.elements.(name="subscription").value
  //ТО КАК НЕ СОБИРАЕМ ДАТУ С ФОРМ -- ПАРМЕТР.currentTarget.elements.(name="subscription").value
  //ТО КАК НЕ СОБИРАЕМ ДАТУ С ФОРМ МЕТОД -- ПАРМЕТР.currentTarget.elements.(name="subscription").value
  ////////////////////////////////////////////////////////////////////////////////////////////////////
  // console.log(event.currentTarget.elements);
  // все элементы email password subscription
  // console.log(event.currentTarget.elements.subscription.value);
  // элемент name="subscription" и его значение (ради кнопка)
  // console.log(event.currentTarget.elements.email.value);
  // элемент name="subscription" и поле почты
  // console.log(event.currentTarget.elements.password.value);
  // элемент name="subscription" и поле пароля

  // const mail = event.currentTarget.elements.email.value;
  // const password = event.currentTarget.elements.password.value;
  // const subscription = event.currentTarget.elements.subscription.value;
  // const Formdata = { mail, password, subscription };
  //ТО КАК НЕ СОБИРАЕМ ДАТУ С ФОРМ
  //ТО КАК НЕ СОБИРАЕМ ДАТУ С ФОРМ
  //ТО КАК НЕ СОБИРАЕМ ДАТУ С ФОРМ

  const formData = new FormData(event.currentTarget);
  // собирает всю дату из полей и под капотом делает огромный итератор который жанглирует этими данными (интерфейс для данных которе там лежат)

  const saveData = {};

  formData.forEach((value, name) => {
    console.log('🚀 name', name);
    console.log('🚀 value', value);
    saveData[name] = value;
    //  для демонстрации
  });
  // можно проверить данные (посмотреть их через forEach)
  console.log(formData);
  console.log(saveData);
}
