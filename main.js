//Задание 1.

const array = [1, 5, 0, 2, 4, null];
let countEven = 0;
let countOdd = 0;
let countZero = 0;

function countNumbers() {
  for (let i = 0; i < array.length - 1; i++) {
      if (array[i] === 0) {
        countZero += 1;
      } else if (array[i] %2 === 0) {
        countEven += 1;
      } else if (array[i] %2 !== 0) {
        countOdd += 1;
      }
    }
    console.log(`В массиве ${countZero} ноль, ${countEven} четных числа и ${countOdd} нечетных числа`);
};
countNumbers();

//Задание 2.

function isPrimeNumber(number) {
  let answer = '';
  if (number >= 1000 || number <= 0) {
    return answer = 'Данные не верны';
  }
  for (let i = 2; i < number; i++) {
    if (number %i === 0) {
      answer = 'Простое число';
    } else {
      answer = 'Составное число';
    }
  }
  return answer;
}

console.log(isPrimeNumber(100));

//Задание 3.

function getSum(num1) {
  return function(num2) {
    return (num1 + num2);
  }
}

const func = getSum(1);
const sum = func(4);
console.log(sum);

//Задание 4.

function getInterval(a, b) {
  let timer = setInterval(function() {
    console.log(a);
    if (a == b) {
      clearInterval(timer)
    }
    a++;
  }, 1000)
}

getInterval(1, 10)

//Задание 5.

const getExponent = (x, n) => {
  console.log(x ** n);
  return x ** n;
}
getExponent(2, 3)


