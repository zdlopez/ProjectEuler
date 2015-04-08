/*
In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
It is possible to make £2 in the following way:

1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
How many different ways can £2 be made using any number of coins?

*/

var coins = [1, 2, 5, 10, 20, 50, 100, 200];
var mycoins = [];


var coinSums = function(total){
  var count = 0;

  var innerFunc = function(running, start){
    if(running === total){
      count++;
      return;
    }
    if(running > total){
      return;
    }
    for(var i = start; i < coins.length; i++){
      running += coins[i];
      innerFunc(running, i);
      running -= coins[i];
    }
  }
  innerFunc(0,0);
  return count;
}

console.log(coinSums(200));