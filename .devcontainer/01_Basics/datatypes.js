"use strict"; //Treat all js code as newer version

//alert("Hello Nawratna") // We are using nodejs not browser
//Where the semicolon use or not. When use multiple variable defined in the one row then use semicolon add of the all variable before last.
//But in this case your code readability will be zero
console.log(3+3) //code readabiliy should be high 
console.log("Nawratna")
//Define datatypes in javascript
let name = "Nawratna" //This is string data types
let age = 44 //This is number datatypes
let isLoggedIn = false //This is boolean datatypes
let fullName = "" //It is not null because we will defined string("").
let lastName = null //It is defined variable as null means it is empty.
let state; //It is only declare variable not defined it is called undefined.
//List of datatypes
//number range 2 to power 53
//bigint ==> it is use large type of data
//string => use for string data.we can define the string into "" and '' both.but we will use always "".
//boolean => true or false
//null => standalone value. It is use for empty value
//undefined => undefined
//symbol => unique. It is used for uniqueness value

/*
Above all the define datatypes are primitive datatypes
*/
//object //This is also datatypes
/*
How we can check the variable is which type of datatype?
*/
console.log(typeof age) // this is number type
console.log(typeof null) // this is object type
console.log(typeof undefined) //this is undefind type
