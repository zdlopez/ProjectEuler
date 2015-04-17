/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

function palindrome(num){
  var largest = 10;

  for (var i = 1; i < num; i++){
    largest *=10;
  }
  largest--;
  var total = largest * largest;
  do{
    while(!isPalindrome(total)){
      total--;
    }
    while(total % largest !== 0){
      largest--;
    }
    return largest;
    var check = total/largest;
    if(check < 100){
      console.log(largest, check);
      return;
    } else {
      total--;
    }
  }while(true)



}

function isPalindrome(num){
  var mystring = num.toString();
  for(var start = 0, end = mystring.length; start <=end; start++, end--){
    if(mystring[start] !== mystring[end]){
      console.log('not a palindrome', num);
      return false;
    }
  }
  return true;
}

console.log(palindrome(2));