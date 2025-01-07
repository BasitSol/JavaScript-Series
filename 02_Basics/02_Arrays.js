const marvel_heroes = ["THOR", "SpiderMan", "IronMan"]
const dc_heroes = ["SuperMan", "Flash", "BatMan"]
//marvel_heroes.push(dc_heroes) // This will Give Us the array in an array
                        // Array can take any kind of data So thats why here is take this array as data
                        // It has 4 elements now an array becomes a single element at last index
//console.log(marvel_heroes);
//console.log(marvel_heroes[3]); // Will give the complete data which is actually an array 
//console.log(marvel_heroes[3][1]); // Will give you the second element in the Inside array => Flash

//const all_Heroes = marvel_heroes.concat(dc_heroes) //Unlike push Concat give you the new array after combinig two arrays
//console.log(all_Heroes);

//***********************************Spread Operator(...)****************************************** */

const all_Heroes = [... marvel_heroes, ... dc_heroes] // Now this will no longer an array and it spread
                                                    // Out all the elements and behave like a concat
                                                    // Combining the array elements how much you want.
                                                    // There is no limitation here like the Concat
//console.log(all_Heroes);
const another_array = [1, 2, 3, [4, 5, 6], 7, 8, [6, 7,[3, 4]]]

const  real_array = another_array.flat(Infinity)  // This flat will ultimately combines the complex syntax
                                            // Structures of the arrays & its elements into single array
                                            // Inifnity Means for inifnity depth you Have to combine them
console.log(real_array);                    

//console.log(Array.isArray("Basit")); // False
//console.log(Array.from("Basit"));  // [ 'B', 'a', 's', 'i', 't' ] 
                                 // It will convert it in a array 

console.log(Array.from({name:"Basit"})); // [] <= Give Empty Array// Interesting interview Case
                                        // Coz it wont be able to directly convert this name 
                                        // you have to give the either you want to make keys array
                                        // or values arrays
let score1 = 100
let socre2 = 200
let score3 = 300

console.log(Array.of(score1, socre2, score3)); //You can also use Array.of()to combine the set of elements
                                              


















