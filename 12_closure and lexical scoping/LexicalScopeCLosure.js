// here we are going to learn about the lexical Scoping and 

function init(){
    let name = 'Mozilla'
    function displayName(){
        console.log(name);
    }
    displayName()
}
init()

function outer(){
    let UserName = 'basit'
    function inner(){
        console.log('INNER', UserName);    // it's Accessible 
    }
    inner()
}
outer()
console.log('TOO OUTER',UserName);          // It will not accessible outside
// LEXICAL SCOPING MEANS that the inner function can get access the outer (parent) function but outer wont get the access of inner function

// Now what is closure ?
function makeFunc(){
    const name = 'Basit';
    function displayName(){
        console.log(name);
    }
    return displayName;   // now here you have returned the reference direct but not the function itself. And there will be no scope 
                          // Scope is there until the function is executed after that scope is not more but here is no execution of function . so?
}                         
const func = makeFunc();    // Now here when the outer function called and after execution the scope get vanished so here the contradiction
                         // in the lexical scoping . now here come sa concept called Closure.
                         // Since the Scope get lost from execution context but here comes the role of the memory (since JS has two things
                         // 1. Execution Context 2. Memory) . So here the memory is playing that role)
                         // Now here when myFunc() executed and there not display name has passed but the outer function scope also passed
                         //(if exists). Due to the lexical scope (complete lexical scope get passed (complete memory passed))
                         // now this name would print unlike previous when it was giving error.

                        //KeyNote : In closure when you return a function it will not only return teh function but a complete lexical scope of that function
                        
func();