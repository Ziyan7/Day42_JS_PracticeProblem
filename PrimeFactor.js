let number = 8; 
let array = new Array();
for (let i = 2; i*i < number; i++) {
  while (number % i == 0) {
    array.push(i);
    number = number / i;
  }
}
if (number > 2) {
  array.push(number);
}
console.log(array);