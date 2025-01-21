// Here we are talking about how JavaScript Works and how the call stack work and some interview questions
//

//JAvascript Execution context => How JS run the file or program
// 
// 1)GLOBAL EC
// Whenever we give some program  and the first step that would be done is thee GLOBAL EC 
// That refer to the Variable (this) now this hold the GLOBAL EC 
//Browser Global EC is different and node.js Global EC is Different
//It execute on a Thread   // as JS is a single Threaded
//Here Comes the second Execution Context 
//2) Function EC
//
//JavaScript code runs in 2 phases
//1)Memory Creation Phase or Creation Phase  // HEre Only Allocation would be done e.g varibles declaration space
//2)Execution Phase // HEre all the funcitons and opertaions would be run 
// Summary
// 1)JS Creates Globsal Execition context 
// 2)Next it creates memory phase 
// 3) Memory phase : In this phase the variables are set to undefined until the execution phase (Next Phase)
// Are set to their Definitions.
// 4) Next it Creates the execution phase 
// 5) Execution Phase - In this Phase the variables are initialized to given values adn when the funtion 
// are called it creates a memory phase and execution phase again for the function just like the main one.
// It will happen for every single Function
// 6) Executed or returned value would go to the global context(This)
// Exection context gets deleted as well after working 
