"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d; // Дискриминант
  d = ((+b) ** 2 - 4 * +a * +c);
  // Если дискриминант меньше нуля, корней нет
  if (d < 0) { 
    return arr;
  }
  // Если дискриминант равен нулю, один корень
  else if (d === 0) { 
    arr.push(-b / (2 * a));
    return arr;
  }
  // В остальных случая два корня
  arr.push((-b + Math.sqrt(d) ) / (2 * a));
  arr.push((-b - Math.sqrt(d) ) / (2 * a));
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // Процентная ставка в месяц в диапазоне от 0 до 1
  percent = percent / 100 / 12;
  // Тело кредита сумма кредита минус первоначальный взнос
  let creditBody = amount - contribution;
  // Ежемесячный платеж
  let monthlyPayment = creditBody * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
  // Всего будет выплачено ежемесячный платеж умноженный на количество месяцев
  let totalPaid = monthlyPayment * countMonths;
  return +totalPaid.toFixed(2);
}