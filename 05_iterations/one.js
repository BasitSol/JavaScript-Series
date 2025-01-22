// Here we are going to learn the for loop


for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        //console.log("5 is best number");
    }
    //console.log(element);
}

// Now Lets talk about the nested loop

for (let i = 0; i <=10; i++) {
    //console.log(`Outer loop value ${i}`);
    
    for (let j = 0; j <=10; j++) {
        ///console.log(`Inner Loop ${j} and Inner Loop ${i}`);
        //console.log(i + '*' + j + " = " + i*j);
    }
}

let myArray = ["Flash", "Superman", "Batman"]
//console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
   // console.log(element);
}

// Some Important keywords

// Break and continue keywords

// for (let i = 1; i <= 20; i++) {
//     if(i == 5){
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`Value of i is ${i}`);
// }


for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log(`Detected 5`);
        continue;    // Itt will skip or ignore the current iteration like it will skip the 5 
    }
    console.log(`Value of i is ${i}`);
}
