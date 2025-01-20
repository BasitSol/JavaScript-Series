// there we are going to talk about the scope in the JS
//=> This is actually called the scope in every language

// We dont use the var bcoz it agaisnt the block scope and it will remain available outside the block which is a problem
let a = 300; // Now there a in global scope and "a " in the block scope but the global scope will not actuall neither the block a would change
if(true){
    let a = 8
    const b = 3
    //console.log("IINNER: ", a);
    var c = 90
}

console.log(a); 
//console.log(b); // it wont print outside
//console.log(c);   // it will print outside

// Interview
// Scope is diff for the windows/browser and scope is diff in the node environment

//*********************************Hoisting\************************* */

function one(){
    const username = "Basit"
    function two(){
        const website = "Youtube"
        //console.log(username); // This works coz it's value of the global scope of function one 
    }
    //console.log(website); // This is now outside of the scope so it wont works and gives you the error 
    two()     // It never execute coz there is an error above so it gets teriminated
}
one()

if(true){
    const username = "Basit"
    if(username === "Basit")
    {
        const website = " Youtube "
        console.log(username + website);
    }
    //console.log(website); // Gives an Error coz its against the scope
}
//console.log(username); // Gives an error coz now its outside the scope

// +++++++++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++++++

/// There are some techniques to make fucntions in JS
addOne(5)                 // It will works and call the function
function addOne(num){
    return num + 1             // Normal method
}

addTwo(5)             // Here it will an error  coz we declare a varible and give it the function
                   // You cant use it before the declaration
                     // we will talk about something called hoistung later mean how fucntion declare and how they setup and how javascript treats variable , how variable trees makes
const addTwo = function(num){          // Here the addTwo variable is called expression
    return num + 2
}