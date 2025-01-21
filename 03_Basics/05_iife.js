// Immediately invoked Function Expressions (IIFE)
//  The funciton tyhat immediately invoked 
// Reasons to use that 
// 1) We dont want any kind of pollution from the global scope in The function
// 2) We want it to immediately invoked

// function chai(){
//     console.log(`DB CONNECTED`);
// }             // IN this way we Immediately invoked that function but we can do if there is any kind
//                 // Of pollution from Global scope thats why we should use the IIFE Fucntions
// chai()

// IIFE Funtion Now
(function chai(){         // This is a named IIFE
    console.log(`DB CONNECTED`);
})()  ;                  // Now this will run as a IIFE Function
 
// Syntax 
// () ()  Here the first paranthesis is the funtion definition and the second is the Function call

( () => {                               // This is Simple IIFE or Unnamed IIFE
    console.log(`DB IS CONNECTED TWO`);      // This will give an error 
                                            // REASON : IIFE Functions Doesn know whgere to stop the context 
                                            // So we need to end the IIFE Function using the semi colon in end
}) ();

/// Now What if we Expecting the variable in the Console log
( (name) => {
    console.log(`DB IS CONNECTED NOW ${name} OKAY`);   
}) ("Basit")  // We can pass the Arguments in the Funtion call brakets
