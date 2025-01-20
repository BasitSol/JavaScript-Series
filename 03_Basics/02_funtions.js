//function calculateCartPrice(n1){
    //return n1
//}
//console.log(calculateCartPrice(2)) // When We are building an ecommerce app then a fucntion might get more parameters
                                // like calculateCartPrice(100,100,89) what should we do then?
                                // We use Rest operator =>(...) to paas so many values 
                                // It's the same Spread operator just it depen on its usage 
                                // For now it use make it a rest operator so passsing multiplle values
                                // Here is means that bundle up all the values an give it to me (funtion)
function calculateCartPrice(...n1){
    return n1
}
//console.log(calculateCartPrice(34,65,32));  // => gives an array like => [34,65,32]

//*********************************HOW TO PAAS THE OBJECT INTO THE FUNCTION AND THEN USE ?***************************** */
const user = {
    username:"Basit",
    price:199
}
function handleObject(anyObject){
    console.log(`User Name is ${anyObject.username} and Price is ${anyObject.price}`)
}
//handleObject(user)

// we can also Directly paas the whole object in the function 
handleObject({
    username:"Sami",           // Here we directly passed the entire Object in the function
    price:399
})

// We can also paas the array in the function by Through variable or directly an entire array
const myNewArray = [200,500,400,600] 
function returnSecondValue(getArray){  // function returnSecondValue([300,299,199]) like that 
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));

