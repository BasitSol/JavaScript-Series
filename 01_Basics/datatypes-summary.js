//*********************************DataTypes Summary********************************** */

// For => Interview :
// How Data can be stored in the memory and how you access this data . so based on that 
// there are two categorizations of dataTypes
// 1) Primitive DataTypes => These are all call by value types
// (7 Types : string, Number, Boolean, null, Undefined, Symbol, BigInt)

// Q) Is JS is a dynamically typed language or static type language?
// Ans: JS is a dynamically typed languaged as there is no need to defined the datatype while inintializaing a varible

// 2) Non-Primitive dataTypes or Reference Type DataType: Its reference can directly be alocated in memory
// Arrays, Objects, Functions

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp =  null
let userEmail; // Undefined

const id = Symbol('123') // This makes the id the unique id 
const anotherId =Symbol('123') // This also Return a Unique id
//console.log(id === anotherId); // They are not same as Symbol Gives Unique id for each other

const bigNumber = 782436573462724n // This becomes the bigInt by placing n in the end

const heros = ["Superman", "Batman", "Iroman"] // Array Decalaration Here

let myObj ={
    name : "basit",       // Object Decalaration Here
    age : 21,
}

const myfunction = function(){         //Function Decalaration
    //console.log("Hellow World");
}

console.log(typeof outsideTemp); //Its value Return the object Type in the console
console.log(typeof scoreValue); // It will Return Number type in the Console
console.log(typeof myfunction); // it will Return the function type but its called object function
console.log(typeof anotherId);  // It will Return the symbol type in the Console


//The Non primitive datatypes are the function type except a Function itself it is an "object function" type



