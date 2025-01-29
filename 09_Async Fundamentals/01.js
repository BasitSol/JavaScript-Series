//Async Code 

//Javascript is an :
//1)Asynchronous language but its default behaviour is
//synchronous (Line by line execution of the code) and we have to forcefully make that behaviour async using setTimeout and set interval etc
//2)single Threaded  Language (Evrything execute in a one thread) => It is all for the Default JS behavour

//Execution Context :
//execute one line at one time 
// Each operation waits for the last one to complete before execution

// Blocking code and non blocking code

//blocking code :                                       // Non blocking code 
//block the flow of the program
// Read file sync                                      // does not block execution
                                                       //read file async

// Here is the question is that what should be the best approach 
// Noting is best or wrong its always about the Use cases 
// Let suppose user have to confirm the regitration process and when the program run asyn it will read the file
// and also Print the message to user that registration is successful now what if something got wrong durng the 
// execution or the reading of fie . So in that case the block code (sync) would be more preferrable.

// Further go Through the picture in this folder so you get the better info .

// 1) JavaScript Engine created from              Web Api / Envrironment = Node
                                                  //Web Api is in the browser 
                                                  // you will get the DOM APi is you have web Api but not in node
                                                  //Set timeout
                                                  //Set interval

//Js Engine 
//1) Memory Heap
// 2) Call stack                                  // Task Queue is what that make JS is fast and Async


// THere are Promises also => promises queue or you can say priority queue

// Whenever the program got executed then it has call stack created and in call stack there are
// Global Execution Context and then one by one the function become loaded .

// But problem arises when you code Async type code you need that (is there any code or mechanism that after doing one thing 
// It will remind me of the other later)

// So for that problem there comes web APis and node 

// Asynchronous Apis are
// Set timeout
// Set interval

// Register Call Back
// where all of the events are being registered here that after clicking or looading show something
// Actually the Register is an Asynchronous.

//there is a task Queue as well coz it might be possible that you applied Async on many of the things and now 
//these things are in the queue (in line ) 

// So register add the callback in the queue to get further evaluation
// Task queue then each callbacks in the call stack and evaluate one by one .

// Interview question here 
// if you print the 1 and then for printing of 2 you add the set timeOut(0,2) shows after 0 time execute or print the 2
// what what will happen ? you might be think that there is a 0 in set timeout so it will instantly execute the 2
// nooo, its not like that .coz set timeout(0,2) will go like callback in the webspi or node and then it will 
// fit in the task queue and then add to the stack .. meanwhile your 3 got executed before that .

// There are some new Api's which added in the Javascript like fetch() it is also work in the task queue
// But here our task queue got expanded and you can say another task queue becomes present which is relatively 
// of the high priority
// IN fetch there exist a concept promise() queue that tell do that work after sometime also tell me if that work
// is done or not . 

