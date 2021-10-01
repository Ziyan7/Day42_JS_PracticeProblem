var val = 77;
let checkPrime;
var primeFactors = new Array();
for (i = 2; i < val/2; i++) {
  if (val % i == 0) {

    //check if divisor is prime
    for (var j = 2; j <= i / 2; j++) {
      if (i % j == 0) {
        checkPrime = false;
      } else {
        isPrime = true;
      }
    }
    //if divisor is prime
    if (checkPrime == true) {
      primeFactors.push(i);
      val = val/i
    }
  }
}
console.log(primeFactors);