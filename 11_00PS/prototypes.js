// This is all about the ProtoType and how they work.
let myName = "Basit     "
//console.log(myName.trim().length); // this will trim the spaces and give the actual length of the string

//console.log(myName.length); there it will consider the spaces as well and print 10 which is not a true length of string 
// So for that what if i can make my own method to find the true length of the string 

//console.log(myName.truelength)
// so here we are going to create a method called truelength.


let heroes = ["Thor", "Captain", "Winter-Soldier"]

let heroPower = {
    "Thor": "Mjolnir",
    "Captain": "Shield",
    "Winter-Soldier": "Super Soldier Serum",

    getSpiderPower: function() {
        console.log(`Captain Power is ${this.Captain}`);
        
    }
}
// Here i created a new property/Method in an object and the array, string and function can have that .
Object.prototype.basit = function(){
    console.log(`Basit is present in all objects`);
}
//heroPower.basit()
//heroes.basit()


// What if i give this power to just array then will it be go towards the object as well or not ?

Array.prototype.heyBasit = function(){
    console.log(`This is array power Basit available in all things`);
}

//heroPower.heyBasit()   // It won't have the access to the heyBasit function

//heroes.heyBasit()    // Here array has power and this power wont be present in string and function its only the array power here .


// Inheritence 

const User = {
    name: "Basit",
    age: 25,
    loginPass :123
}
const teacher = {
    makeVideo: true,
}
const teachingSupport = {
    isAvailable: false
}                           // In past dev used to make each object coz there were no such functionality or classes at that time.
const TASupport ={
    Assignment : "JS Assignment",
    fulltime :true,
    __proto__: teachingSupport     // Now it borrows the properties from the teachingSupport object (referenced).
}

teacher.__proto__ = User    // You can also asign the properties of user to the teacher outside that way. 
// This all is called a prototypal inheritence in JS . how you can access others properties .
// This is pretty old approach you wont/rarely see this is new codespaces .

// Modern Syntax

Object.setPrototypeOf(teachingSupport, teacher) // This is the modern way of doing it .
                                                // There is how TeachingSupport access the teacher property
                                                // This is called prototypal inheritence in a modern way  .

let anotherUserName = "NewTechnique      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is :${this.trim().length}`);
}
anotherUserName.trueLength() // This will give you the length of the string without the spaces .
"Simultaneously".trueLength()
"iceTea".trueLength()

