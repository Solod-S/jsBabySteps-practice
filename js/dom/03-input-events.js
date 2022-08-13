/*
 * Паттерн «Объект ссылок»
 *
 * События
 * - focus и blur // В ФОКУСЕ И УШЕЛ ИЗ ФОКУСА
 * - input и change // change используем на радиобатанах/чекбоксах
 * - Чекбоксы и свойство checked
 */

const inputEl = document.querySelector('js-input');
const checkLicenseEl = document.querySelector('.js-license');
const btnEl = document.querySelector('.js-button');
const nameLabelEl = document.querySelector('.js-button > span');

// но можно сделать через объект + свойства

const refs = {
  input: document.querySelector('.js-input'),
  checkLicense: document.querySelector('.js-license'),
  btn: document.querySelector('.js-button'),
  nameLabel: document.querySelector('.js-button > span'),
};
//Паттерн «Объект ссылок» в котором элементы становяться свойствами обьекта

function onInputFocus() {
  console.log(`Получил фокус`);
}

function onInputBlur() {
  console.log(`Потерял фокус`);
}
function onInputChangeу(event) {
  console.log(event.currentTarget.value, `change - странная штука и работает после потери фокуса`);
}

function onInputInput(event) {
  console.log(event.currentTarget.value, 'input - отличная вещь');
  nameLabelEl.textContent = event.currentTarget.value;
  if (nameLabelEl.textContent === '') {
    refs.nameLabel.textContent = 'Anonimus';
  }
}

function onCheckLicense(event) {
  console.log(`чекбокс активный?`, event.currentTarget.checked);
  console.log(`кнопка`, refs.btn.disabled);
  //атрибут(свойством идет) кнопки (доступна не доступна)
  refs.btn.disabled = !event.currentTarget.checked;
  // кнопка выключена (refs.btn.disabled === true) когда элемент не выбран (event.currentTarget.checked === false)
}

refs.input.addEventListener('focus', onInputFocus);
refs.input.addEventListener('blur', onInputBlur);
refs.input.addEventListener('change', onInputChangeу);
refs.input.addEventListener('input', onInputInput);
refs.checkLicense.addEventListener('change', onCheckLicense);
