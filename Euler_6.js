/*
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

*/

function squareNatural(num){
  var result = 0;

  for(var i = 1; i <= num; i++){
    result += i * i;
  }
  return result;
}

function squareSum(num){
  var result = 0;
  for(var i = 1; i <=num; i++){
    result += i;
  }
  result = result * result;
  return result;
}

console.log(squareNatural(10));
console.log(squareSum(10));

var nat = squareNatural(100);
var sum = squareSum(100);

console.log(sum - nat);