// How to declare the objects using the constructor

//const tinderUser = {}   // Empty Object
const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Sammmy"
tinderUser.isLoggeedIn = false
//console.log(tinderUser); // Empty object 

const regularUser = {        // Nesting of the objects 
    email:"abc@gmail.com",   // Objects in an object
    fullname: {
        userFullName:{
            firstName:"Muhammad",
            LastName:"Basit"
        }
    }
}
//console.log(regularUser.fullname.userFullName);

// COmbination of the objects 
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj4 ={5:"e", 6:"f"}

//const obj3 = {obj1 , obj2}// this will leads to a problem e.g an objects containing 2 more objects rather than combining
//const obj3= Object.assign(obj1,obj2) // This is the right way to combine the 2 objects
//const obj3= Object.assign({}, obj1,obj2,obj4) // {} => is an optional parameter .It will make sure that the objects get combined and gave the exact desire results.Its better to use that as well
//console.log(obj3);

// We will use Assign method less frequently rather we will use another method 
//Spread Operator ....
const obj3 = {...obj1, ...obj2, ...obj4} // This is more easy and more readable
console.log(obj3);

// We will use one more syntax when the value comes from thhe database

const users = [        // Array of objects 
    {
        id :1,
        email:"h@gmail.com"
    },
    {
        name: "Basit",
        age:21
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // In this way you can bring out the keys of the Object tinderUser in an Array
console.log(Object.values(tinderUser)); // To bring out the values of the object
console.log(Object.entries(tinderUser)); //It will Results in an array for each of the keys,value pair
console.log(tinderUser.hasOwnProperty('isLogged')); // It will result in False or true if it's exist or not in an object
                                        // You will use this => hasOwnProperty() method in production if you have to go thourgh the the loop to some object to get a value
                                        // It might be possible that that certain Value doesnt exist so this might crash out at that 
                                        // time use this method fot convenience
