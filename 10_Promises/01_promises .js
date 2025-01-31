
    // Promises means that whatever task you have given to it will not complete immediately after getting in a queue . It represent eventual
    // completion or failure/ It will fulfill in the  future like cryptography , file operations etc
    // It is used to handle asynchronous operations in JavaScript
    // Promise s actually an object that is used to handle asynchronous operations in an easier way.
    // we should know how to create promises before we can use them in our code (or consume)
    // we will make diff types of promises in this tutorial

     const promiseOne = new Promise()          // History : This Promise was never be there in ES4 and ES5 . when it was not there directly in Js
                                              // So we were using Async/Await to handle it by default. In that times there were some libraries 
                                              // Like blue bird and queue. IN blue bird where you can use all functionalities in core JS like .fetch , catch then, .
                                             // Then this library finally integrated in the core JS . and now there is no need to access this library
                                             // node Js directly provides the Promise functionalities.
    
  // Promise actually takes the call back function. and it also reduce the call back hell .
  // Creation of the Promises Before Consumption:
   const promiseOne = new Promise(function(resolve, reject){
     // Do an Async tasks like DB calls , cryptography related , network calls, file operations etc
     setTimeout(function(){
         console.log('Async task is complete');
         resolve()  // Now after adding this the promise is actually consumed 
     }, 1000)            // First the task will complete and then after resolve the promised will consumed
   })

//   // now Consumption

   promiseOne.then(function(){       // This callback function automatically receive the argument (returned value from above setTimeout() function)
         console.log('Promise is consumed');
   })     // .then() => direct connection with the resolve 

// Here Async task is complete is printed and the promise is consumed in not completed coz you didn't connected .then with the resolve function
// so in order to connected them you have to call the resolve() in the setTimeout function .


// Another way to create the promise is 
 new Promise(function(resolve, reject){
     setTimeout(function() {
        console.log('Async Task 2 is complete');
        resolve()
     },1000)
 })
// // Now for the consumption directly use .then

 .then(function(){
     console.log('Async 2 Resolved');
 })

// 3rd Promise 

 const newPromise = new Promise(function(resolve, reject){
     setTimeout(function(){
     // How I can pass the values from there towards the consumption stage 
     // We can pass the values by using the resolve() function
     resolve({userName:'Chai', email:'example@gmail.com'})   // You can pass any Data (function, array, object etc) in this resolve function

     },1000)
})
// // Alright you have passed the data through resolve now how the .then will get or accept the data below ?
 newPromise.then(function(user){  // when you passed any data(parameter) in the resolve function above you can expect that here .then function will accept it
     console.log(user); // here you received the data (object in that case) and just print it
 })

// Promise 4
 const newPromise = new Promise(function(resolve, reject){
     setTimeout(function(){
         let error = false
         if(!error){
             resolve({userName:'Basit', Password:'1234'})
         }else{                // Now here comes the concept of the reject. so fat we have used resolved only and now we will use reject
             reject('Error Occurred')    //  Rejection used to give the error message
        }
     },1000)
 })
// // using .then() you can get the values or data and if error occurred you can get value using .catch()

 const userName = newPromise.then( (user)=>{   // you will se how you can get rid of callback hell and you will see how you can use multiple .then() 
     console.log(user);
     return user.userName   // Where this return is going ? it is going to the next .then() function?
 }).

// // console.log(userName);  // This way it will give an error . It means if we want get the return value we can't accept it in variable name above
                        // Now how we can get then ? by chaining the .then()
newPromise.then((user)=>{
    console.log(user);
    return user.userName;
 }).then((myUserName)=>{        // Now here we are doing chaining .then() so we can get the return value of the previous .then()
    console.log(myUserName);
}).catch(function(er){       // you have to use the  catch() as well because if there is an error in the previous .then() it will be caught here
//                             // otherwise you will get an error if you don't use this .catch()
//     console.log(er);
// }).finally( ()=> console.log('The Promise is either resolved or rejected'))

// prefer to bring these .then() and .catch() to next line so it looks fine and readable. it all depends on you.
// There is an another keyword which is .finally()  it will tells you that your work is done on the end after x amount of tine .It will always run after .then() and .catch() and it will run only once. like its a default

// Promise 5 (Interesting thing)

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({userName:'Basit', Password:'1234', email:'basit@gmail.com',})
        }else{
            reject('Error Occurred JS went wrong')
        }
    },1000)
})
// // Now here it's not necessary to always use the .then() to get value or consumed. You can also use Async await method. 


//Async Await has a problem that it can't directly handle the errors well.
async function consumePromiseFive(params) {
    const response = await promiseFive  // Now this will get the value from above promiseFive . NOTE : promise is an object so don't consume it like writing () in end
    console.log(response);
}
consumePromiseFive()
// // It will work well when there error got false but you will get an error when you make error true . So you have to use try catch block to handle the error.
// // Now we have to wrap it in a try catch block to handle the error. 

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// Both of the above approaches are good you can use either (.then(),.catch(),.finally()) approach or you can use Async await approach.

// Real life implementation

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        //const data =  response.json()   // Actually this JSON() also takes time to convert so we need to make it await as well. Now it will work well
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log('E :',error);
    }
}
getAllUsers()

// What if i want to write this function in .then()? then how i would be able to do that 

fetch('https://jsonplaceholder.typicode.com/users')
.then( (response)=> {
    return response.json()
}).then((data)=>{
    console.log(data);
})
.catch( (error)=>{
    console.log(error)
})