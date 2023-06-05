function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg;
  
  for(let i = 0; i < arr.length; i++) {
    if (min > arr[i] ) {
      min = arr[i];
    }
    else if (max < arr[i]) {
      max = arr[i];
    }
    sum = sum + arr[i];
  }
  avg = sum / arr.length;
  avg = +avg.toFixed(2);
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  if (arr[0] == undefined) {
    sum = 0;
  }
  else {
    for(let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let diff;
  if (arr[0] == undefined) {
    diff = 0;
  }
  else {
    diff = Math.max(...arr) - Math.min(...arr);
  }
  return diff;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let diff;

  if (arr[0] == undefined) {
    diff = 0;
  }
  else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0 ) {
        sumEvenElement = sumEvenElement + arr[i];
      }
      else {
        sumOddElement = sumOddElement + arr[i];
      }
    }
    diff = sumEvenElement - sumOddElement;
  }
  return diff;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let avg;

  if (arr[0] == undefined) {
    avg = 0;
  }
  else {
    for(let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0 ) {
        sumEvenElement = sumEvenElement + arr[i];
        countEvenElement = countEvenElement + 1;
      }
    }
    avg = sumEvenElement / countEvenElement;
  }
  return avg;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let funcResult;
  for(let i = 0; i < arrOfArr.length; i++) {
    funcResult = func(...arrOfArr[i]);
    if (maxWorkerResult < funcResult) {
      maxWorkerResult = funcResult;
    }
  }
  return maxWorkerResult;
}