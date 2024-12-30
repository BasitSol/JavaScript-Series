const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // Give us the 2 decimal numbers  (100.00)

// const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(3)); // It will focus on the value based on input and give us the precise value
                                         // 23.9
const hundreds = 1000000
console.log(hundreds.toLocaleString());  // Give the number with commas as US Standards

//******************************************* MAths******************************************* */
// console.log(Math); // its actually an object 
// console.log(Math.abs(-4)); // Absoolute
// console.log(Math.round(4.3)); // it will round off it as 5
// console.log(Math.ceil(4.6)); // It will choose top value and print 5
// console.log(Math.floor(4.7)); // It will take lower value and prints only 4 
// console.log(Math.min(4, 3, 6, 7)); // It gives the minimum value in the array 
// console.log(Math.max(89,112,34,54));// It will give maximum value
console.log(Math.random()); // It will give the value ranging between 0 and 1 always
console.log(Math.random()*10);
console.log(Math.random()*10 + 1);

const min = 10;
const max = 20

console.log(Math.random() * (max-min-1));
(Math.random() * (max - min + 1) )
console.log(Math.floor(Math.random() * (max - min + 1)) + min);





















