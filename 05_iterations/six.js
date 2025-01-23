// Now we will be talking more about the foreach and methods

// const coding = ["js", "ruby", "C++", "python"]

// const values = coding.forEach( (value)=> {  // What if we store the call back fucntion value in some variable
//                                         // what will be return by this function ?
//                                         // Answer is undefined !
//                                         // Ultimately forEach returns nothing no value if you want or not 
//     console.log(value);
// })
// console.log(values);

const myNums = [1,2,3,4,5,6]

// // Methods

// let newNums = myNums.filter( (num)=> {
//     return num > 4
// })          // Filter also takes the call back function
                                                       // But unlike the forEach Filter returns the value 
//console.log(newNums);  // => 5,6

// const newNums = []
// myNums.forEach( (num)=> {
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books = [
    {title:'Book One', genre:'Fiction', publish:1981},
    {title:'Book Two', genre:'Non-Fiction', publish:1988},
    {title:'Book Three', genre:'History', publish:1994},
    {title:'Book Four', genre:'Science', publish:1999}
]

const userBooks = books.filter( (bk)=> bk.genre === 'History')
const publishDate = books.filter( (bk)=> bk.publish >1985)
//console.log(userBooks);
//console.log(publishDate);

const newnum = myNums.map( (num)=> num*10).map( (num)=> num+1) // It will first multiply nums by 10
                                                             // Then add 1 in the answer
console.log(newnum);
    









