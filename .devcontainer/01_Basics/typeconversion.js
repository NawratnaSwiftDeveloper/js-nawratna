//let score = "33"
//let score = "33abc"
//let score = null
//let score = undefined
let score = true

//console.log(typeof score) //string,string,object,undefined,boolean
//console.log(typeof(score));//string,string,object,undefined,boolean

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);//number,number,number,number,number
//console.log(valueInNumber);//33,NaN(Not a number),0,NaN,1

//"33" => 33
//"33abc" => NaN
//true => 1; false => 0

//let isLoggedIn = 0
//let isLoggedIn = 1
//let isLoggedIn = "Nawratna"
//let isLoggedIn = ""
//let isLoggedIn = null
let isLoggedIn = undefined
let valueInBoolean = Boolean(isLoggedIn)
//console.log(valueInBoolean);//false, true, true, false, false, false

//1 => true; 0 => false
//"Nawratna" => true; "" => false; null => false; undefined => false

//let numberToString = 33
//let numberToString = "33"
//let numberToString = "33abc"
//let numberToString = ""
//let numberToString = null
let numberToString = undefined
let valueInString = String(numberToString)
console.log(valueInString);//33,33,33abc,,null,undefined
console.log(typeof valueInString);//string,string,string,string,string,string

