// Here we are going to discuss about the reduce  method

// const initial_Value = 0
//const sum = Array.reduce( (accumulator,currentValue)=> accumulator + curentValue,initial_Value)
//console.log(sum);

// Procedure 
// It first need to start a value with the initail value here is 0
// then the reduce method will work there is am accumulator and cuurentValue (which is the array value)
// Accumulator got the initial value for just one time at start after that the summ of accumulator and 
// currentVAlue will be assigned to the accumulator and so on


const myNum = [1,2,3,4,5]
// const myTotal = myNum.reduce( function(acc, cv){
//     console.log(`ACC:${acc} and CurrentVAl ${cv}`);
    
//     return acc + cv
// } , 0)

const myTotal = myNum.reduce( (acc, cv) => acc+cv, 0 )
console.log(myTotal);

const shoppingCart = [
    {itemName:"JS", price:299},
    {itemName:"WebDev", price:399},
    {itemName:"mobile dev", price:599},
    {itemName:"DataScience", price:1299}
]
const addPrices = shoppingCart.reduce( (acc, item)=> acc+ item.price,0)
console.log(addPrices);

