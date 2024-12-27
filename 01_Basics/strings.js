const name = "basit"
const repoCount = 50

console.log(name + repoCount + "value"); // Dont use this syntax as this is outdated 

console.log(`Hello My name is ${name} and my repo count is ${repoCount}`); // string Interpolation

const gameName = new String('basit-ali') // this is another way of initializing a string

console.log(gameName[0]); // This will Print the first word
console.log(gameName.__proto__); // THis will return the empty object but in actual it has values init

console.log(gameName.length); // print the length as 8
console.log(gameName.toUpperCase()); // This will print the string in Capital form its real value wont change just a copy will change

console.log(gameName.charAt('3'));  // prints the character position of the string 
console.log(gameName.indexOf('t')); // prints the index of the character in the string

const newString = gameName.substring(0,3) // Print the String value 0,1,2 only
console.log(newString);

const anotherString = gameName.slice(-3,2) // slice will proceed (-) but substring wont
console.log(anotherString);

const newStringOne = "   basit   "
console.log(newStringOne);
console.log(newStringOne.trim()); // This methods Removes the Starting and ending spaces

const url = "http://basit.com/basit%20ali"
console.log(url.replace('%20', '-'));  // Thid will replace the value or characters in the string

console.log(url.includes('basit')); // This will tell you TRUE or FALSE based on the presence in string


console.log(gameName.split('-')); //split(separator, Limit) <= this is a Syntax 



















