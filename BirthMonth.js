let dict = {}; //create a dictionary
let months = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec']; //array of months

for(let i =1;i<=50;i++){
    let randomMonth = Math.floor((Math.random()*12)); //select rondom month
    dict[i] = months[randomMonth]; 
}
let month = 'Jan'; //check how many are born in january
console.log("People born in "+month+" are");
for(key in dict){
    let check = dict[key]
    if(check == month)
        console.log(key+" born on "+ dict[key])
}