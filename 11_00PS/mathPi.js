// This is actually related to object 

//Object.getOwnPropertyDescriptor()
console.log(Math.PI);
Math.PI = 5
console.log(Math.PI);   // IT wont overwrite it remains the same value. WHy are we not getting its value changed ?

const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(descriptor);   // There we can define pur own objects properties as well 


const chain = {
    name : 'Ginger Tea',
    price: 250,
    isAvailable: true,

    orderChai :function(){
        console.log('Ordering Chai');
    }
}
//console.log(chain);  // Now the question do this has also a descriptor properties ? if that so how i can change this ?

//console.log(Object.getOwnPropertyDescriptor(chain));  // this will give UNdefines coz you have to define in the descriptor which 
                                                    // property description you want to see .

//console.log(Object.getOwnPropertyDescriptor(chain, 'name')); // Now as you defined which property you want to see so it will give you the descriptor of that property.

// Now javascript give you athority to change the property of your own created object .
// you can defines the property on you own .

Object.defineProperty(chain, 'name', {
    writable :false,       // Enumerable false let you apply iteration some of the value and make it non iterable .
    enumerable :false      //False means you can't apply loop on this and do not iterate on this. lke here is Name value which wont iterate but rest will iterate
})
console.log(Object.getOwnPropertyDescriptor(chain, 'name'));  // Here you successfully changed the property of your own created object .

for (let [key,value] of Object.entries(chain)) {
    if(typeof value !== 'function'){    // You will handle it in the real world scenario case 
    console.log(`${key}: ${value}`);
}
}
