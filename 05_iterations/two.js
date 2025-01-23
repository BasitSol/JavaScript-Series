// Here we are going to learn the while and do while looop 

let index = 0
while(index <= 10){
    //console.log(`Value of the index is ${index}`);
    index = index + 2
}

let myArr = ["Flash", "Batman", "SpiderMan", "SuperMan"]
let arr = 0;
while(arr < myArr.length){
    //console.log(`Value is ${myArr[arr]}`);
    arr = arr + 1
}

let score = 11

do {
    console.log(`Score is ${score}`);   // In do while the statement would print atleast one time 
                                        // As it first print and then check the conditions
    score++
} while (score <= 10);