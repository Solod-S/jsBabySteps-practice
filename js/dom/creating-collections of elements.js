/*
 * Создём и добавляем коллекцию
 */
const colorPickerWrapperEl = document.querySelector('.colorPickerOptions');

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];
//инлайним стили

// const btnEl = document.createElement('button');
// btnEl.classList.add('crating-collection__btn');
// btnEl.type = 'button';
// btnEl.textContent = colorPickerOptions[0].label;
// btnEl.ariaLabel = colorPickerOptions[0].label;
// btnEl.style.backgroundColor = colorPickerOptions[0].color; // создаем инлайн стиль
// console.log(btnEl);

/////////////////ОЛДСКУЛ

const btnMassive = [];

for (let i = 0; i < colorPickerOptions.length; i += 1) {
  // console.log(colorPickerOptions[i]);
  const btnEl = document.createElement('button');
  btnEl.classList.add('crating-collection__btn');
  btnEl.classList.add('color-picker__option');

  btnEl.type = 'button';
  btnEl.textContent = colorPickerOptions[i].label;
  btnEl.ariaLabel = colorPickerOptions[i].label;
  btnEl.style.backgroundColor = colorPickerOptions[i].color; // создаем инлайн стиль
  btnMassive.push(btnEl);
}

console.table(btnMassive);
colorPickerWrapperEl.append(...btnMassive);

/////////////////НОВЫЙ СПОСОБ!!!!!!!!!!!!!

const btnMassiveRight = colorPickerOptions.map(btn => {
  const btnElRight = document.createElement('button');
  btnElRight.classList.add('crating-collection__btn');
  btnElRight.classList.add('color-picker__option');
  btnElRight.style.color = btn.color;
  btnElRight.textContent = btn.label;
  btnElRight.ariaLabel = btn.label;
  return btnElRight;
});

console.log(btnMassiveRight);

colorPickerWrapperEl.append(...btnMassiveRight);

/////////////////НОВЫЙ СПОСОБ функцией!!!!!!!!!!!!!
/////////////////НОВЫЙ СПОСОБ функцией!!!!!!!!!!!!!
const colorPickFunct = option => {
  return option.map(btn => {
    const btnElRight = document.createElement('button');
    btnElRight.classList.add('crating-collection__btn');
    btnElRight.classList.add('color-picker__option');
    btnElRight.style.color = btn.color;
    btnElRight.style.backgroundColor = 'tomato';
    btnElRight.style.borderRadius = '10%';
    btnElRight.textContent = btn.label;
    btnElRight.ariaLabel = btn.label;
    return btnElRight;
  });
};

// colorPickerWrapperEl.append(...colorPickFunct(colorPickerOptions));

const createColorPicOption = colorPickFunct(colorPickerOptions);
colorPickerWrapperEl.append(...createColorPicOption);

console.log('____________________________________________');
console.log('____________________________________________');
const students = [
  { name: 'Манго', score: 83, online: false },
  { name: 'Поли', score: 59, online: true },
  { name: 'Аякс', score: 37, online: false },
  { name: 'Киви', score: 94, online: true },
  { name: 'Хьюстон', score: 64, online: false },
];
const studentsListEl = document.querySelector('.students');

const studentsMassive = students.map(student => {
  const studentItemEl = document.createElement('li');
  studentItemEl.classList.add('students__title');
  console.log(studentItemEl);

  const studentNameEl = document.createElement('h3');
  studentNameEl.classList.add('students__name');
  studentNameEl.textContent = student.name;

  console.log(studentNameEl);

  const studentScoreEl = document.createElement('div');
  studentScoreEl.classList.add('students__score');
  studentScoreEl.textContent = student.score;

  console.log(studentScoreEl);

  const studentOnlineEl = document.createElement('div');
  studentOnlineEl.classList.add('students__online');
  studentOnlineEl.textContent = student.online;
  console.log(studentOnlineEl);

  studentItemEl.append(studentNameEl, studentScoreEl, studentOnlineEl); // делаем виноградную лозу

  return studentItemEl; // отправляем виноградную лозу
});

console.log(studentsMassive);

studentsListEl.append(...studentsMassive);
