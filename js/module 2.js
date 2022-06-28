// ------------------------------------------УДОБНЫЙ ВЫВОД МАССИВОВ Console.table()-------------------

// ---------------------------------------------------------------
// Доступ к элементам в массиве
// Для доступа к значению элемента массива используется синтаксис квадратных скобок массив[индекс]. Между именем переменной хранящей массив и квадратными скобками не должно быть пробела.

// const clients = ['Mango', 'Poly', 'Ajax'];

// Указывая в скобках индекс элемента мы получаем его значение
// console.log(clients[0]); // Mango
// console.log(clients[1]); // Poly
// console.log(clients[2]); // Ajax

// Переопределение
// const clients = ["Mango", "Poly", "Ajax"];
// clients[0] = "Kiwi";
// clients[1] = "Pango";
// console.log(clients); // ["Kiwi", "Pango", "Ajax"]
// ---------------------------------------------------------------

// const test22 = 'Hello World';
// // Метод split(delimiter) превращает строку в массив, «разбив» её по разделителю delimiter. Если разделитель это пустая строка, то получится массив отдельных символов. Разделителем может быть один или несколько символов.
// console.log(test22.split(' '));

// const testS = ['Hy', 'my', 'name', 'is'];
// // Метод массивов join(delimiter) соединяет элементы массива в строку. В строке элементы будут разделены символом или группой символов указанных в delimiter. То есть это операция обратная методу строк split(delimiter).
// console.log(testS);
// console.log(testS.join(' '));
// // indexOf(value) возвращает первый индекс, в котором элемент со значением value был найден в массиве, или число -1, если такого элемента нет. Используйте indexOf тогда, когда необходимо получить непосредственно индекс элемента.
// console.log(testS.indexOf('is'));
// //includes(value) проверяет есть ли в массиве элемент со значением value и возвращает true или false соответственно. Область применения этого метода сводится к ситуациям когда необходимо проверить есть ли элемент в массиве и не важна его позиция (индекс).
// console.log(testS.includes('is'));
// // includes(), это очень просто и масштабируемо.
// const Myconsole = ['xbox', 'ps4', 'nintendo', 'ngage'];
// const consoleIwant = 'ngage';
// const chekMyconole = Myconsole.includes(consoleIwant);

// if (chekMyconole) {
//   console.log('STOP!');
// } else {
//   console.log('Do what you want!');
// }

// ---------------------------------------------------------------
// Метод pop() удаляет последний элемент из конца массива и возвращает удаленный элемент. Если массив пустой, метод возвращает undefined.
const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]

// console.log(numbers.pop()); //  4
// console.log(numbers); // [1, 2, 3]

// console.log(numbers.pop()); //  3
// console.log(numbers); // [1, 2]

// console.log(numbers.pop()); //  2
// console.log(numbers); // [1]

// console.log(numbers.pop()); //  1
// console.log(numbers); // []

// onst numbers = [];

// numbers.push(1);
// console.log(numbers); // [1]

// numbers.push(2);
// console.log(numbers); // [1, 2]

// numbers.push(3);
// console.log(numbers); // [1, 2, 3]

// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]

// numbers.push(5);
// console.log(numbers); // [1, 2, 3, 4, 5]

// ---------------------------------------------------------------

// slice(begin, end) возвращает новый массив, содержащий копию части исходного массива, не изменяя его. Копия делается от begin и до, но не включая, end - индексы элементов исходного массива.

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]

// // Если begin и end не указаны, будет создана полная копия исходного массива.

// const clients1 = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients1.slice()); // ["Mango", Ajax", "Poly", "Kiwi"]

// // Если не указан end, копирование будет от start и до конца исходного массива.

// const clients2 = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients2.slice(1)); // ["Ajax", "Poly", "Kiwi"]
// console.log(clients2.slice(2)); // ["Poly", "Kiwi"]

// // Если значение start отрицательное, а end не указан, то будут скопированы последние start элементов

// const clients3 = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients3.slice(-2)); // ["Poly", "Kiwi"]

// ---------------------------------------------------------------
// Удаление;
// splice(position, num);
// position - указывает позицию (индекс) первого элемента для удаления
// num - определяет количество удаляемых элементов

// const scores = [1, 2, 3, 4, 5];

// // Удаляем три элемента массива, начиная с первого элемента (индекс 0)
// const deletedScores = scores.splice(0, 3);

// // Теперь массив scores содержит два элемента
// console.log(scores); // [4, 5]

// // А массив deletedScores содержит три удаленных элемента
// console.log(deletedScores); // [1, 2, 3]

// Добавление
// splice(position, 0, new_element_1, new_element_2, ...)
// Аргумент position указывает начальную позицию в массиве, куда будут вставлены новые элементы.
// Второй аргумент это ноль, он говорит методу не удалять элементы в месте добавления новых.
// Третий, четвертый и все последующие аргументы - это новые элементы, которые добавляются в массив.

// let console = ['xbox', 'ps4", 'nintendo', 'ngage'];
// console.splice(3, 0, 'sega');
// console.log(console);

// const numbersB = ['1', '2', '3'];
// numbersB.splice(3, 0, '4');
// console.log(numbersB);

// ---------------------------------------------------------------
// Объединяем  массивы concat()
// Объединяет два или более массива в один.Он не изменяет массив на котором вызывается, а возвращает новый.Порядок аргументов метода влияет на порядок элементов нового массива.

const OldBase = ['1', '2', '3', '4'];
const NeedToAdd = ['5', '6', '7'];
const NewBase = OldBase.concat(NeedToAdd);
console.log(NewBase);
