//***************************************************De-structuring of objects ******************************************/
const course ={
    name:"Js in urdu",
    price:"999",
    courseInstructor:"Basit"
}
const {courseInstructor} = course // This is an other way to access any value of the object called De-structuring using => {} brackets
console.log(courseInstructor);
const {courseInstructor:instructor} = course // This is how we can do destructuring rather then calling 
                                   // the long courseInstructor name i will call it as instructor only and it will works
console.log(instructor);

// JSON => whenEver you are calling your Any data using Apis it will show you this data in a JSON format where keys and values are in string

{
    "name":"Basit",
    "coursename":"JavaScript Mastery"
}

