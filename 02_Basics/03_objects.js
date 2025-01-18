// there are two diff way to declare the objects . 
// 1) Like a Object literal 2) like a constructor
// With Singleton => if you make any constructor then it will have a single object (Singletons)
// with Ojects literals => it wont be a singleton it will be having mutliple instances.

//Object.create => this is a constructor method

const mySym = Symbol("key1")

//Object Literals
const JsUser = {       // Creation
    name:"Basit",    
    //mySym:"key1",  // It cant be use as a Symbol in object rather it use as a string 
    [mySym]:"key1", // Now it will be use as a symbol after [] braces way
    age: 18,
    "id Name":"specific", // There is no chance to access this using the .operator that's why use [] way
    location:"Lahore",
    isLoggedIn:false,
    lastlogginDays:["Monday", "Tuesday"]
}
//console.log(JsUser.location); // There is another best way to access the element of object
//console.log(JsUser["name"]);    // Square notation
console.log(JsUser["name"]);
console.log(JsUser["id Name"]);
console.log(JsUser[mySym]);

// How to chnage the value of the object 

JsUser.name = "Muhammad"  // Overwrite
console.log(JsUser["name"]); 

// If you want that no one can change value in the object then
//Object.freeze(JsUser)
//JsUser.name = "M"
//console.log(JsUser["name"])  // now iut wont Change any of the value 
//console.log(JsUser)

// We can ad function as well and it willl treat as a variable

JsUser.greeting = function () {
    console.log("Hello this is JsUser");
}
JsUser.greetingTwo = function() {
    console.log(`Hello JsUser, ${this.age}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


