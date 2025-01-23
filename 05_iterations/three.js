// Lets talk about the For of and the higher order 

//["","",""]   array of strings

//[{},{},{}]    // array of objects 

const arr = [1,2,3,4,5]
for (const num of arr) {
    //console.log(num);
}


const greetings = "Hello World"
for (const greet of greetings) {
    if(greet == " "){
        continue
    }
   // console.log(`Each Character is ${greet}`);
}

// Maps in the JavaScript

const map  = new Map()
map.set('GR', "Germany")        // Maps Posses Unique values so it will print the Germany for one time
                                // And the values remain in  the order
map.set('GR', "Germany")
map.set('USA', "United states of America")
map.set('Fr', "France")

//console.log(map)

// Can i apply a loop in this ?
// for (const key of map) {
//     //console.log(key);   // It will give in form of each array
// }

// But we need separate values what should we do now ?

for(const [key, value] of map){      // Here is Destructured the array so i get the keys and values separately
    //console.log(key, ':-', value);   // Now it wont print as a form array
}

const myObject = {
    'Game':'NFS',
    'Game2':'spiderman'
}

// for (const [key,value] of myObject) {
//     console.log(key,':-', value);    // Now here it will give an error that object are not iterable here
// }

// actually there are some different ways to iterate the objects and we will be discussing them later

