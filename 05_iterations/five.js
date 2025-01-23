// Now we will learn abou the For each loop which we will be using most of the times in the future

const coding = ["js", "python", "ruby", "Java", "CPP"]


// coding.forEach( function (item) {      // Here ForEach want a call back function where function don't
//                                      // Have any name and for the parameter we can specify any name 
//                                      // and that parameter will go to each of the value in the array
//                                      // and will work according to what is being defines in the function body
//          // console.log(item);
//                                      // It's called the higher order Funtions or call back function

// } )

// Another way to use the call back fucntion

// coding.forEach( (value)=>{
//         console.log(value);    // This is some basic
// } )

// Now suppose another intereting case 

// function printMe(item){
//     console.log(item)      // Can i pass this function as well in the call back function . YES !
// }

// coding.forEach(printMe)   // Just give reference without the braces () it wi.l do printing work own

coding.forEach( (value, index, arr)=>{  // Now here is an important thing that this call back funtion have
                                        // not only access of just one parameter but it has some other parameters as well
   // console.log(value, index, arr);
                                        // Like it has access of index , and a complete array as well
})                                   // This will show in the output like that 
                                    //************** RESULT ********************** */
                                   //js 0 [ 'js', 'python', 'ruby', 'Java', 'CPP' ]
                                   //python 1 [ 'js', 'python', 'ruby', 'Java', 'CPP' ]
                                   //ruby 2 [ 'js', 'python', 'ruby', 'Java', 'CPP' ]
                                   //Java 3 [ 'js', 'python', 'ruby', 'Java', 'CPP' ]
                                   //CPP 4 [ 'js', 'python', 'ruby', 'Java', 'CPP' ]

const myCoding = [              // [{},{},{}]
    {
        LanguageName :"JavaScrpit",
        languageFileName:"js",
    },
    {
        LanguageName :"python",
        languageFileName:"py",
    },
    {
        LanguageName :"C++",
        languageFileName:"cpp",
    }
]

myCoding.forEach( (item)=> {          // Output => JavaScript
                                       //          python
                                      //           C++
    console.log(item.LanguageName);
})