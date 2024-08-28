//There are two types of data types in javascript.1: Primitive and 2: Non Primitive or Reference type
//1: Primitive has 7 types of data types. string, number, boolean, null, undefined, symbol, bigInt

let name = "Nawratna Kumar"
const age = 44
let loggedIn = true
const checkNull = null
let oddEven;
let bigNumber = 123456789987n
let id = Symbol("123")
let anotherId = Symbol("123")
//console.log(id === anotherId);//Output is false its not right answer

//Non Primitive or reference type such as Array, Object, Functions
//Array Declaration
let familyName = ["Nawratna","Rishav","Vagisha"];
let familyAge = [44,7,2]
//console.log(familyAge);

//Object Declaration
let myObj = {
    myName:"Nawratna",
    myAge: 44,
    myAccType: "Saving"
}
//console.log(myObj)

//Function Declaration

let myFunction = function(){
    console.log("Hello World!");
    
}
console.log(myFunction());
//How to find out the data type of the variable? We will use typeof functions
console.log(typeof myObj);

