// Now we are going to discuss about the Functions
function sayMyName(){
    console.log("h")
}
//sayMyName // This is just a reference so it wont output anything in terminal
//sayMyName() // Now this will actually execute the funtion

// function addnumber(n1, n2)
// {
//      console.log(n1 + n2);
// }

//addnumber(3,4) // => 7
//const result = addnumber(3,5)
//console.log("Result: ", result);  // Will give the undefined in the terminal
///addnumber(3,"4") // => 34
//addnumber(3,"a") // =>3a

function addnumber(n1, n2)
{
      let result = n1 + n2
      return result
      console.log("Basit"); // It wont execute coz by default after the return nothoing would be run
      
}
const result = addnumber(3,4)
//console.log("Result: ", result); // Now this will give the 7

function loginUserMessage(username){ // We can do some default values as well like (username = sami) 
                       // now it will never go down to execute the further code 
                       // rather it will use this value=>sami (overwritten)
    if(username === undefined){
        console.log("Please enter the Username!");
        return // Now the rest of the code never works
    }
    return `${username} just logged in`
}
//const myStatus=loginUserMessage("Basit")
//const myStatus = loginUserMessage() // => when you dont pass something in the function ust results in undefined
                                   // For that you have to make check in the function using if else 
//console.log(myStatus);
