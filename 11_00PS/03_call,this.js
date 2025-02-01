// Now we will be talking about the CALL
// How call keyword actually works ?


// The question is 
/*
function(){
callME()           if tell me where 'this' keyword refer ? is it outer or inner context and both functions have their execution context 
                   so for that thing 'this' actually refer to global execution context.
                   NOTE This is real life scenario: we know that in Global EC when we have window object access then 'this' actually refer the window object 
                   but when in node environment there is no window environment so 'this' refer to empty object.
}
*/

function SetUserName(username){
    // Complex DB Calls
    this.username = username
    console.log("CAllED");
    
}
function CreateUser(username, email, password){

   // SetUserName(username)   // In this way it is not calling so for that we need to use the call keyword .
    //SetUserName.call(username)  // Now it actually calls . THIS call method actually holding the reference of the SetUserName()
                               // but still it won't work yes it will call but since after calling the execution got lost and also the 
                               // variables or values involved also gone . so we need to give the current context to the SetUserName function
    SetUserName.call(this,username)             // Hence we need to pass this as well in the call method like .call(this, username)
                                       // It will work well now.
    this.email = email
    this.password = password
}
const chain = new CreateUser('Basit', 'example@gmail.com', '123456')
console.log(chain);    // Now here only username and password would set but what about the username is it actually works ? 
                       // Actually the above SetUserName() is not calling.


/*
Introduction to Video and Keywords
- Brief introduction to the video and its purpose.
- Emphasis on the importance of understanding keywords.
- Mention of the tendency to rush through topics in courses.
00:29 🗂️ Different Keywords and their Usage
- Explanation of the variety of keywords used in the script.
- Noting that multiple keywords are often combined and explained together.
- Suggestion to understand keywords at different time durations for better comprehension.
01:10 🚀 Evolution of React and Coding Practices
- Historical perspective on React's early versions and coding practices.
- Description of the initial challenges due to limited language features.
- Transition from minimalistic coding to the current abundance of language features and libraries.
01:54 🔄 Execution Context and Function Interaction
- Explanation of the global execution context and its persistence.
- Illustration of how functions maintain their execution context.
- Emphasis on the memory and context carried by functions during execution.
02:34 🔄 Execution Context and Function Relationships
- Explanation of execution context in JavaScript functions.
- Advantages of visualizing code through diagrams.
- Illustration of the global execution context and nested function contexts.
03:00 🗃️ Understanding Execution Context Hierarchy
- Introduction to the concept of execution context hierarchy.
- Overview of the global execution context and its position in the hierarchy.
- Explanation of how nested functions create their own execution contexts.
03:29 🔍 Challenges with Execution Context References
- Discussion on the challenges of referencing execution contexts in nested functions.
- Examination of how 'this' keyword behaves in different contexts.
- Highlighting the complexities when functions refer to outer execution contexts.
04:10 🧩 Troubleshooting Global Execution Context Issues
- Explanation of problems arising from global execution context references.
- Introduction to the 'this' keyword and its role in context resolution.
- Discussion on common issues related to referencing objects in different contexts.
05:07 🔄 Overlapping Abstraction in Real-world Scenario
- Discussion on the persistent problem of overlapping abstraction in real-world scenarios.
- Introduction to a practical example to illustrate the issue.
- Creation of a new file named 'dot.js' to demonstrate practical implementation.
05:50 📝 Setting User Details Functionality
- Explanation of creating a function named 'setUserName' to set the username.
- Implementation of rules to check and fetch username from the database.
- Demonstration of accessing and setting user details within the 'setUserName' function.
06:49 🔄 Internal Execution Context Access in Nested Functions
- Understanding the access of variables declared within functions in the internal execution context.
- Illustration of the 'setUserName' method accessing variables declared internally.
- Explanation of how internal functions have access to variables declared in their scope.
07:18 🛠️ Optimizing Function Calls for Better Access
- Optimization strategy for better access to variables within nested functions.
- Discussion on creating a new user with a unique keyword for improved access.
- Highlighting the significance of organizing and minimizing function calls for efficient code.
07:31 🔒 Issue with Property Assignment in Execution Context
- Introduction to the problem with property assignment in the current execution context.
- Observing the output after running the code and identifying issues.
- Lack of proper setting of properties within the object causing unexpected behavior.
08:09 🛠️ Debugging and Fixing the Property Setting Problem
- Debugging the code to identify the root cause of the property-setting problem.
- Recognizing that the 'setUserName' method is not properly setting the 'username' property.
- Addressing the issue by correctly assigning the 'username' property within the function.
08:49 🔍 Analyzing Reference and Execution Context in JavaScript
- Understanding the reference and execution context of the 'setUserName' method.
- Discussing the role of the 'set' method in accessing and modifying object properties.
- Clarifying the need for proper referencing and execution context to avoid issues.
09:17 🛠️ Implementing Method of Object Substitution for Clarity
- Introducing the concept of method of object substitution for clearer code.
- Demonstrating how the 'Object.subset' method works in the current scenario.
- Discussing the advantages of using clear and concise coding techniques for better understanding.
10:14 🔄 Handling Execution Context Removal and Reference Hole
- Explanation of removing execution context and reference hole within the outer function.
- Demonstrating how variables declared inside the function become inaccessible after execution.
- The importance of keeping a reference hole and the execution context for proper functioning.
10:29 🚧 Troubleshooting and Debugging the Reference Hole Issue
- Identifying the need to maintain a reference hole for variables and functions.
- Troubleshooting the problem of the reference hole affecting the expected behavior.
- Discussing the syntax and practical aspects of resolving the issue.
11:13 🌐 Utilizing Global Object for Reference Hole Solution
- Introducing the use of the global object to maintain a reference hole.
- Demonstrating how to pass the global object as an optional parameter to the function.
- Ensuring that changes inside the function do not affect the global context.
12:08 🧰 Applying Execution Context Pass for Improved Functionality
- Implementing execution context pass as a solution to the reference hole problem.
- Clarifying the significance of passing the context and the resulting improvement in functionality.
- Emphasizing the importance of understanding execution context in interviews and real-world scenarios.
*/