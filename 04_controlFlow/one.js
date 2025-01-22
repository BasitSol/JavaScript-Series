// Here we are going discuss about the control Flow 
// if(condition){
//}
// const isUserLoggedIn = true
// const temperature = 41
// if(temperature  < 40){
//     console.log("Less than");}
//     else
//     {
//     console.log("Temperature is greator than 50");
//     }


//Comparison operators => <,>,<=,>=,==, !=, === => This also check the dataType
// if(2=="2"){      // Will Executed buut it wont Execute if we use === operator coz this will strictlt check the dataType
//     console.log("Executed");
// }

// const score = 200
// if(score > 100){
//     const power = "FLY"
//     console.log(`User power ${power}`);
// }

// Short Hand Notation
 
// const balance = 1000
// // if(balance > 500) console.log("Test");  // Impliicit Scope

// if(balance < 500){
//     console.log("Less Than");
// }else if(balance < 750){
//     console.log("Less than 750");
// }else if(balance < 900){
//     console.log("less Than 900");
// }else{
//     console.log(" Less than 1200");
// }

const userLoggedIn = true
const debitCard = true 
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){    // It will work if both the conditions are true 
    console.log("Allow to Shopping");
}
if(loggedInFromGoogle || loggedInFromEmail){ // It will work if Any of the condition become true 
    console.log("Logged IN ");
    
}