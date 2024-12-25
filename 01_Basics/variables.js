const accountId = 1114
let accountEmail = "basit12@gmail.com"
var accountPass = "123"
accountCity = "Karachi" // Javascipt does support this declaration but prefer not to follow this practise
let acccountState; // Javascript declare this as undefined in the console 

// accountId = 2 // this is not allowed as const keyword cant be changed 
accountEmail = "abc"
accountPass = "2345"
accountCity = "lahore"

console.log(accountEmail);
console.log(accountPass);
console.table([accountId, accountPass, accountEmail, accountCity,acccountState]) // This method help us to print all of the variables
                                                      // in a tables format

// Dont use var at any cost in the future due to the issue in the block scope and functional scope





