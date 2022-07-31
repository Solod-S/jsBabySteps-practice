////////////// https://lodash.com/
////////////
////////
//////
////
//
//.isEmpty(value);
//////////////
////////////
////////
//////
////
//
console.log(_.isEmpty(null));
console.log(_.isEmpty([1, 2, 3]));

//////////////
////////////
////////
//////
////
//
//_.get(object, path, [defaultValue]); // массив путь и необязательное условие (по умолчанию андефайн) // [] не обязательный параметр
//////////////
////////////
////////
//////
////
//
const students = [
  {
    id: 1,
    name: 'Сергей',
    score: {
      eng: 5,
      ukr: 5,
    },
    online: false,
  },
];

const studentsTW = {
  id: 1,
  name: 'Сергей',
  score: {
    eng: 5,
    ukr: 3,
  },
  online: false,
};

console.log(_.get(students, '[0].score.eng')); // массив / студенты путь [0] - что это в массиве
console.log(studentsTW.score.eng); // будет ломать код если не найдет значения

// не ломает код если ключа нет
//дичь
if (studentsTW && studentsTW.score && studentsTW.score.ukr) {
  console.log(studentsTW.score.eng);
}
//дичь
// НЕ ДИЧЬ
console.log(studentsTW?.score?.ukr); //?. ?. ?. ?. ?. ?.если этого свойства нету то дальше не ищи ?. ?. ?. ?. ?.
console.log(studentsTW?.score?.ru);
// НЕ ДИЧЬ

//////////////
////////////
////////
//////
////
//
// _.union([arrays]); // [] не обязательный параметр
//////////////
////////////
////////
//////
////
//

////////////// ОБЬЕДИНЯЕМ МАССИВЫ

const arrayFirst = [1, 2, 3, 4, 5, 6, 7, 22, 33, 44, 55];
const arrayScnd = [3, 4, 5, 6, 7, 8, 9, 10, 66, 77, 88];

const arrayThrd = [...arrayFirst, ...arrayScnd].sort((a, b) => a - b);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// дубли убиваем (КАК РАНЬШЕ)
console.log(arrayThrd);
// console.log(arrayThrd.push(9999));
// console.log(arrayThrd);

const arrayfr = arrayThrd => {
  const result = [];
  for (let value of arrayThrd) {
    // if (result.includes(value)) {
    //   continue;
    // } else {
    //   result.push(value);
    // }
    result.includes(value) ? console.log(`!`) : result.push(value);
  }
  return result;
};

console.log(arrayfr(arrayThrd));

////////////// СИЛЬНО ПРОЩЕ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
////////////
////////
//////
////
//

const arrayThrdByUnion = _.union([...arrayFirst], [...arrayScnd]);

console.log(arrayThrdByUnion);

//////////////
////////////
////////
//////
////
//
// _.range([start=0], end, [step=1]) // [] не обязательный параметр начало - конец - шаг
//////////////
////////////
////////
//////
////
//

console.log(_.range(1, 99, 4)); // ДЕЛАЕМ БІСТРО МАССИВ ОТ 1 до 99 с шагом 4

//////////////
////////////
////////
//////
////
//
// _.sortBy(collection, [iteratees=[_.identity]])
//////////////
////////////
////////
//////
////
//

const users = [
  { user: 'fred', age: 48 },
  { user: 'barney', age: 36 },
  { user: 'fred', age: 40 },
  { user: 'barney', age: 34 },
];

console.log(_.sortBy(users, user => user.age));

//////////////
////////////
////////
//////
////
//
//_.sum(array) _.sumBy(array, [iteratee=_.identity])
//////////////
////////////
////////
//////
////
//

console.log(_.sum(arrayFirst));

const studentsT = [
  { name: 'Манго', score: 83, online: false },
  { name: 'Поли', score: 59, online: true },
  { name: 'Аякс', score: 37, online: false },
  { name: 'Киви', score: 94, online: true },
  { name: 'Хьюстон', score: 64, online: false },
];

console.log(_.sumBy(studentsT, student => student.score)); // как редюсом делали

//////////////
////////////
////////
//////
////
//
//_.uniq(array); _.uniqBy(array, [iteratee=_.identity])
//////////////
////////////
////////
//////
////
//

//////////////
////////////
////////
//////
////
//
//_.minBy(array, [(iteratee = _.identity)]);
//////////////
////////////
////////
//////
////
//
console.log(
  `Имя студента по мин значению балов`,
  _.minBy(studentsT, student => student.score).name
);
console.log(
  `худший студент по мин значению балов`,
  _.minBy(studentsT, student => student.score)
);
console.log(
  `Имя студента по макс значению балов`,
  _.maxBy(studentsT, student => student.score).name
);
console.log(
  `лучший студент по макс значению балов`,
  _.maxBy(studentsT, student => student.score)
);
