function largestPrimeFactor(num){
  var sqrt = Math.floor(num/2);
  if(sqrt % 2 === 0){
    sqrt = sqrt - 1;
  }
  //console.log(sqrt);
  while(sqrt > 0){
    console.log(sqrt);
    if(isPrime(sqrt)){
      if(num % sqrt === 0){
        return sqrt;
      }
    }
    sqrt -= 2;
  }
}

function isPrime(num){
  var half = Math.floor(num/2);
  for(var i = 3; i < half; i++){
    if(num % i === 0){
      return false;
    }
  }
  return true;
}

console.log(largestPrimeFactor(600851475143));