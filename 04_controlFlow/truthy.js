// Here we are going to discuss about the truthy values and the falsy values 

const userEmail = "basit12@gmail.com"

if(userEmail){   // There it supposed to be consider as the ture string value and display the message
                 // If there is no value or sting in the variable userEmail then it will consider as false
    console.log("Got USer Email");
}
else{
    console.log("Dont have user email");
}

// How many are the falsy and Truthy values ?
// false , 0 , -0, bigInt 0n, "", null , undefined, NaN  now except these all of the values are truthy values

// Truthy Values => "0", "false", " ", [], {} <= object , function(){} ,

// How to check the empty array ?
const array = []
if(array.length === 0){
    console.log("Array is Empty");
}
 
// How to check the empty object 

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("object is Empty");
}

// Some Key Points 
// false == 0 => true 
// false == "" => true
// 0 == "" => true

// Nullish Coalescing Operator (??) : all you need to see here about the undefined and Null

let val1
//val1 = 5 ?? 10  // => answer 5 but why there is a need to use this ?? .
               // Somtimes when we get the data when we call from the database or call from the firebase 
               // we dont get the direct response we get two values chances are there that we might get the null
               // values or undefined .so in that case the complete code structure become misbehave 
               // so for that case it is specially designed to use (??) 
//val1 = null ?? 10 // => Now this will give the 10 in output
                  // It basically check the safty of the value if is null there 

//val1 = undefined ?? 15

val1 = null ?? 10 ?? 35 // In that case the first assigned value would work like 10 will be the output
console.log(val1);

// Ternary Operator ? => Its actually the small syntax of the if else 

//condition ? true : false   <= its the syntax

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");




