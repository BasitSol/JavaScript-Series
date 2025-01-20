// Here we are going to learn about the Arrow Function and this keyword .

const user = {
    username:"Basit",
    price:999,                       /// this keyword refers the current context
    welcomeMessage :function(){
        console.log(`${this.username} , Welcome to website`); // This is onlky print the username context
        console.log(this);   /// This will print the whole context 
        
    }

}
// user.welcomeMessage()
// user.username = "sami"    // Now the context become cahnged and the username become Sami
// user.welcomeMessage()
//console.log(this);   // Now this will give the {} empty object coz there is no context in the global
                      // But in the browser and when you wanna print it will show the windqw and braket e.g
                      // Actually in past javascript only run on single engine that is in browser 
                      // But we have the standalone engine like node.js and Deno e.g
                      // When Engine run on browser then the global Object is => window Object thats why 
                      // you can easily captures the windows event

// function chai(){
//     let username = "Basit"
//     console.log(this);  // Whenever you use the keyword this inside the function then now in node environment
//                         // You will see alot of things values 
//     console.log(this.username); // Can i use this keyword here ? Nooo, it gives you undefined you cant use 
//                                 // this keyword inside function it only works for the objects context
    
// }
// chai()

// const chai = function(){
//     let username = "Basit"
//     console.log(this.username); // Undefined
// }
// chai()

//********************************* How to declare Functions using arrow functions**************************** */

const chai =  () => {
    let username = "Basit"
    console.log(this.username); // This will again give the undefined
    console.log(this);      // Undefined here this function wont works in arrow function
    
}
//chai()

//() => {}  // This is the Basic structure of the Arrow function you can also hold this in any variable

// const addTwo = (n1,n2) => {
//     return n1+n2               // This is the basic one
// }
// console.log(addTwo(3,4))
                            // It has another way of use that is implicit return (Without return)
//const addTwo = (n1,n2) =>  n1+n2      // There we dont need to define the return Js knows that it's one liner so it will execute         
//const addTwo = (n1,n2) => (n1+n2)  // Another way to use with () but if you use {} bracket you have to return in that case
//const addTwo =(n1,n2) => {username:"Basit"} // Undefined coz You cant return object in that way
const addTwo = (n1,n2) => ({username:"Basit"})  // You have to wrap it in a Parathesis to execute properly and it will give the object here 
console.log(addTwo(3,4)) 