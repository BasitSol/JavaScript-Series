//let myDate = new Date()      // Date is actually the object with along alot of features together
//console.log(myDate.toString());
//console.log(myDate.toISOString())
//console.log(myDate.toDateString());
//console.log(myDate.toJSON()) 
//console.log(myDate.toLocaleDateString())
//console.log(myDate.toLocaleString());
//console.log(myDate.toLocaleTimeString());
//console.log(typeof myDate);

//let myCreatedDate = new Date(2023, 0, 23 , 5, 3) // Months starts from 0 in JS
//let myCreateDate = new Date("2023-01-14")
//console.log(myCreateDate.toLocaleString()) 

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myCreateDate.getTime()); // This will give the time of that date in milliseconds
                                    // As the Date is the object so we used that .getTime() method
//console.log(Math.floor(Date.now()/1000)); // This will coverts into the seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
`${newDate.getDay()} and the time`

newDate.toLocaleString('default', {   // We can Customize the format of the local string as per need
    weekday:"long",
})


















