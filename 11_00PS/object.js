// We will be talkng about the Prototypal behaviour of javaScript 
// It's actually a behaviour that how JavaScript actually works or behaves to ask about the Mechanical word

// The default behaviour of JS is protoTypal 
// JS never give up it continue to search for the layers for the result until it got null .
// This is protoType that actually gives you the access of the new keyword , classes and this keyword and prototypal inheritence .
//Javascript never hesitates for something that actually doesn't work or understand this is the protoTypal behaviour.

// In JS everything is almost an object 
// Array -> object -> null reference of prototype
// string -> object -> null reference of prototype
// This shows everything is object like array is object then object has no parent so it's null reference of prototype .

// We can say everything is object in JS and the string and array has those properties which is available in object .


// Is Function an object ?
// Yes, function is a function and an object as well.
function multiply (a, b) {
    return a * b;
}
//console.log(multiply(5, 6));   But what if i dont want to run the function like that ?

// multiply.power = 2
// console.log(multiply.power);
// console.log(multiply.prototype);

// This keyword is also linked to an object 
function createUser (username, score){
    username = username   // this might bring some confusion
    this.username = username // Now it will setup the current context of the function
    this.score = score
}

createUser.prototype.increment = function(){ // you can inject your owm customized properties in prototype
    this.score++    // It means who ever calls me do it for it.
}
createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`);
}
//const chain = createUser('user',25)  
//const tea = createUser('tea', 289)

//chain.printMe() // Now a problem exists // give error that can't read the undefined properties
// You need to tell while transferring the properties so you need to use (new) keyword

const chain = new createUser('MyTea', 89)    // No here's you actually told .
const tea = new createUser('FancyTea', 289)

chain.printMe()

// NOTES:
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function.
 This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. 
If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, 
to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.),
 the newly created object is returned.


 Basically the summary of the video is : 

 1) If you want that a method should be accessible or present in all objects in javascript (for ex: arrays, strings, functions,etc) 
 then you can set your own method in the top level Object (because everything is an object in javascript) by using | Object.prototype.{method name} = function(){} | , 
 after doing this you will have the access of your {method.name} from all objects for ex: every array that you declare, every string that you declare and so on. 

2) But lets say if you want a certain method that should be accessible only on a certain object 
( for example : (this is used in the video) you want a trueLength(){this method returns the true length of an array by trimming all the whitespaces} 
 method to accessed on all String declarations , then you can be like | String.prototype.trueLength = function(){ code that does trimming and return length } 
 | and this will be accessible on all strings . 

3) this keyword in javascript refers to the current context of who is calling . matlab this boleto jisne bulaya . example: if you say 
 | "hemant   ".trueLength() | then how will the trueLength() method knows that on whom it have to perform . so we use this in the trueLength() function definition 
 so it will automatically take the context of by whom the method is callled , boleto jisne bulaya uska kaam hoga.....


*/


