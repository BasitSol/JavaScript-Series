// Here we will be talking about the OOP 
// is there classes in the javaScript?
// It wasn't there and technically not available there JavaScript is a protoType-Based Language.
// Yes, classes are there but its a syntactic sugar

// OOP? It's a programming paradigm


// Object => collection of properties and methods
// toLowerCase , promises they are also object 

// Why we need to use OOP ? To reduce the messy code up

// Parts of OOP ?
// Object literal

//  - constructor function
// - ProtoTypes 
// - Classes 
// - Instances (new , this)


// 4 pillars
// Abstraction => hiding the details e.g fetch()
// Encapsulation => hiding the data, do a wrapper on that . and which to show adn which to hide
// Inheritance =>
// Polymorphism  => Many forms 


// // What is object literal and this ?

// const user = {
//     user :'basit',
//     pass :'123',
//     getUserDetail : function(){
//         //console.log('Got Dat');
//         console.log(`UserName:${this.user}`);
//     }
// }
// console.log(user.getUserDetail());

// this keyword actually give the current context value 
//Now what if i need to make the user 2 ? well  i have to make another user same process will repeat
// So we need to make a constructor function to make the user object


// constructor Function
//const promiseOne = new Promise()
//const date = new Date() // What does new() means ? its actually a constructor function . It allows you to make multiple instances from one object literal
// new is used to make a new context as and we call it a constructor function as well

function User(username, password) {
    this.username = username
    this.password = password
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this    // Here if you write return or not it will work in both cases.
}

// const user1 = User('Basit', 123)
// const user2 = User('ali', 345)  // Here user2 overwrites the value and that's why when we print user1 it shows user2 results
// console.log(user1);

// now its the problem that it is overwriting the previous one
// Here we use the constructor function that provide the copy of the instances every time.

// just add new keyword to resolve all 

const user1 = new User('basit', 234)
const user2 = new User('ali', 345)  // Now it will work perfectly . they both have diff copies make each of them separate
console.log(user1);
console.log(user2);

// new keyword
// 1) Created empty object 
// 2) constructor function is called
// 3) all of the arguments get injected in this
// 4) then it will give the value or desired result 


// Can i check the property if constructor is available? will it available
//console.log(user2.constructor);  // Constructor property is actually a reference to itself
console.log(user2 instanceof User);








