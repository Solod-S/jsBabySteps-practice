const counter = {
  value: 1,
  decrement() {
    this.value -= 1;
  },
  increment() {
    this.value += 1;
  },
};

// const decrement = function () {
//   this.value += 1;
// };

// const increment = function () {
//   this.value -= 1;
// };

console.log(document);
const decrementBtn = document.querySelector('.js-decrement');
const incrementBtn = document.querySelector('.js-increment');
const valueJs = document.querySelector('.js-value');
console.log(decrementBtn);
console.log(incrementBtn);
console.log(valueJs);

//decrementBtn.textContent = '!!!'; //метод изменяющий текстовый контент

// decrementBtn.addEventListener('click', function () {
//   console.log('кликнули на decrementBtn ');
// });
decrementBtn.addEventListener('click', function () {
  console.log('кликнули на decrementBtn ');
  counter.decrement();
  console.log(counter.decrement);
  valueJs.textContent = counter.value;
});
incrementBtn.addEventListener('click', function () {
  console.log('кликнули на incrementBtn ');
  counter.increment();
  console.log(counter.increment);
  valueJs.textContent = counter.value;
});
