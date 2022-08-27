const refs = {
  form: document.querySelector('.js-feedback-form'),
  textArea: document.querySelector('.js-feedback-form textarea'),
  inut: document.querySelector('.js-feedback-form input'),
};
const formData = {};
refs.form.addEventListener('submit', onFormSubmit);
// refs.textArea.addEventListener('input', _.throttle(onFormInput, 500));
const STORAGE_KEY = 'inputLocallStorageKey';
populateTextareaMulti();
/*
 * - Останавливаем поведение по умолчанию
 * - Убираем сообщение из хранилища
 * - Очищаем форму
 */

function onFormSubmit(event) {
  event.preventDefault();
  console.log('Мы собрали данные');
  event.target.reset();
  // сброс формы
  localStorage.removeItem(STORAGE_KEY);
  // очищаем ключем STORAGE_KEY в локальном хранилице
}
/*
 * - Получаем значение поля
 * - Сохраняем его в хранилище
 * - Можно добавить throttle
 */
// function onFormInput(event) {
//   const text = event.target.value;
//   // создаем переменную с значением того что получаем из инпута (с задержкой throttle)
//   console.log(text);
//   localStorage.setItem(STORAGE_KEY, text);
//   // то что тапаем записуем в локальное хранилище
// }
/*
 * - Получаем значение из хранилища
 * - Если там что-то было, обновляем DOM
 */
// function populateTextareaSingle() {
//   const text = localStorage.getItem(STORAGE_KEY);
//   // в переменную записую значение ключа из локальной памяти
//   if (text) {
//     console.log(text);
//     refs.textArea.value = text;
//     // в поле ввода вводим эти данные (нужно для того, что если мы перезагрузим страницу, все останиться на месте)
//   }
//   // если эти данные есть в локальной памяти, выполняем код
// }

refs.form.addEventListener('input', e => {
  // console.log(e.target.name);
  // console.log(e.target.value);

  formData[e.target.name] = e.target.value;

  // console.log(JSON.stringify(formData));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

function populateTextareaMulti() {
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  const message = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (!message) {
    return;
  }
  refs.textArea.value = message.message;
  refs.inut.value = 'message.email';
}
