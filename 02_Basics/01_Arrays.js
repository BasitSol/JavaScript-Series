//Arrays // Arrays are the object 
// Arrays in JS are Resizable you can add value after initializing
// Whenevr you use copy operation it create shallow copies.

const myArr = [0,1,2,3,4,5]
//console.log(myArr[1]); // To access the element in the arrays

const myHeroes = ["Batman","SuperMan","SpiderMan"]
//const myArr2 = new array(1,2,3,4) // ANother way to initialize array with new keyword and round bracket
//myArr.push(6) // To enter the element dynamically 
//myArr.pop()  // To remove the element in the array
//myArr.unshift(9) // To add element at first and then shift all the elements forward
//myArr.shift()  // Same like pop to remove the first element in the array

//console.log(myArr.includes(9)); // Answer the existence of the given element in array as false and true
//console.log(myArr.indexOf(7)); // Gives -1 value coz it doesnt exist also this gives the index of that number

//console.log(myArr);
//const newArr = myArr.join() // This is used to convert into string dataType give array in string form
//console.log(myArr);
//console.log(newArr);
//console.log(typeof newArr);

// slice and splice

console.log("A ", myArr);
const myn1 = myArr.slice(1,3) // Slice will only gives the slected portion and it wont change the original array
console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3) // Slice will only gives the slected portion and it wllt change the original array
console.log(myn2);
console.log("C ",myArr);















