
let array = new Array ; //creating an array
for(let i=0;i<10;i++){
    array.push(Math.floor(100+Math.random()*900));  //adding random values
}
console.log(array);

//find the second largest Number in the array without sorting
let first=array[0];
let second = array[0];

for(i=0; i<10 ; ++i){
    if (first< array[i]){
        second = first;
        first= array[i];
    }
    else if (array[i]> second && array[i]!=first){
        second=array[i];
    }
}
if(second==first)
    console.log("there is no second largest number");
else
    console.log("second largest number is "+ second);


//finding second largest number in array with sorting
let array1 = array.sort();
console.log(array1);
console.log(array1[array1.length-2]);