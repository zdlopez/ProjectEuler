/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/
var checkNum = function(num){
  for(var div = 1; div <= 20; div++ ){
    if(num % div !== 0){
      return false;
    }
  }
  return true;
}

var smallestDiv20 = function(){
  var current = 20;

  while(!checkNum(current)){
    current++;
  }
  return current;

}


console.log(smallestDiv20());