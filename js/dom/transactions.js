import transition from './data/transactions.js';
{
  /* 
  <tr>
    <td>ID транзакции</td>
    <td>Сумма</td>
    <td>Дата</td>
    <td>Кто</td>
    <td>Тип транзации</td>
    <td>Имя счёта</td>
    <td>Номер счёта</td>
  </tr>
 */
}
// {
//   id: '758d5283-358e-4fbb-b222-a17fd04e8916',
//   amount: '179.07',
//   date: '2012-02-01T22:00:00.000Z',
//   business: 'Bogan - DuBuque',
//   name: 'Auto Loan Account 7313',
//   type: 'deposit',
//   account: '19808943',
// },
console.log(transition);

const makeTransactionTableRowMarcUp = transiction => {
  const { id, amount, date, business, type, name, account } = transiction;
  return `
    <tr>
      <td>${id}</td>
      <td>${amount}</td>
      <td>${date}</td>
      <td>${business}</td>
      <td>${type}</td>
      <td>${name}</td>
      <td>${account}</td>
    </tr >
      `;
};

console.log(makeTransactionTableRowMarcUp(transition[0]));
//делаем функцию которая принимает объекты и возвращает разметку
// получаем разметку с данными

const TableEl = document.querySelector('.js-transaction-table');
// делаем таблицу елемент для дальнейшей выгрузки туда массива
//подготавливаем полученную разметку для дальнейшего поста их через elem.insertAdjacentHTML(position, string) У НАС МАССИВ С ОБЪЕКТАМИ а нужна СТРОКА

const transactionTableRowsMarkup = transition.map(makeTransactionTableRowMarcUp).join('');
// берем входящий массив обьектов
//==> перебираем методом мап
//==> вызываем колбек функцию которая делает разметку и получаем массив[<tr>\n<td>758d5283-358e-4fbb-b222-a17fd0…13</td>\n<td>19808943</td>\n ]
//==> делаем строку методом join("")
console.log(transactionTableRowsMarkup);

TableEl.insertAdjacentHTML('beforeend', transactionTableRowsMarkup);
//elem.insertAdjacentHTML(position, string);
// "beforebegin" - перед elem
// "afterbegin" - внутри elem, перед всеми детьми
// "beforeend" - внутри elem, после всех детей
// "afterend" - после elem
