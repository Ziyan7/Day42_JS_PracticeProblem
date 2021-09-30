let array = new Array(); //create an array

for(let i=0;i<=100;i++){
   if(i>10){
       let reminder = i % 10;
       let number = parseInt(i /10);
       if(reminder==number){
           array.push(i); //add  number to the array if @ digits are equal
       }
   }
}
console.log(array);