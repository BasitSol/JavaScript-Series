// Now we will talk about that how we can iterate through the objects 

const obj = {
    js :'JavaScipt',
    cpp: 'C++',
    rb: 'Ruby',
    swift:'Swift By apple'
}

for (const key in obj) {
    //console.log(key); // It will give the Keys of the object 
    //console.log(obj[key]);  // It will give the values of the object 
    ///console.log(`${key} Shortcut is for ${obj[key]}`);
}

// Can we apply the for in loop on arrays

const programming = ["js", "ruby", "python", "CPP"]
for (const key in programming) {
    //console.log(key);  // It will print the keys so here the keys are indexes like 0,1,2,3 in output
    //console.log(programming[key]);   // Now it will give you the values 
}

// Can we apply the for in Loooop on Map?

// const map  = new Map()
// map.set('GR', "Germany")        
// map.set('GR', "Germany")
// map.set('USA', "United states of America")
// map.set('Fr', "France")

// for (const key in map) {
//     console.log(key);   // It will not work and gives no ouput
// }

// Maps are not iterable yes there are some ways to iterate over the map but not here with these loops

