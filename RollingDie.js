//dictionary with key as dice numbers and value as number of time the number appears on rolling of a die
var dict = {
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0
};
let flag = true
while (flag){
    var val = Math.floor(Math.random()*6)+1; //to obtain random numbers betweein 1 to 6
    for (key in dict){
        if(key == val){  
            dict[key] += 1;  //adding value based on the condition
        }
    }
    
    for (key in dict){
        if (dict[key]==10){  //checking if any value has reached 10
            console.log("Key with maximum repetition is  " +key );
            console.log(key + ":"+dict[key]);
            flag =false;
            break;
        }
    }
    
}
var [leastnumber] = Object.entries(dict).sort(([ ,v1], [ ,v2]) => v1 - v2); //obtaining the least value in the dictionary
    for (key in dict){
        if (dict[key]==leastnumber[1]){
            console.log("Key with minimum repetition is  " +key );
            console.log(key + ":"+dict[key]);
        }
    }

    for (key in dict){
        console.log(key + ":" + dict[key]);
    }
