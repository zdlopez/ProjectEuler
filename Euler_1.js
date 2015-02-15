/*If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.*/

var total = 0;

for(var i = 1; i< (1000/3); i++){
	total+= i*3;
}

for (var j = 1; j<(1000/5); j++){
	if((j*5%3)!==0){
		total+= j*5;
	}
}

console.log(total);

