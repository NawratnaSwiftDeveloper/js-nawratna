const accountId = 123123
let accountEmail = "nawratna@google.com"
var accountPassword = "11223344"
accountCity = "Khagaria"
let accountState

//accountId = 232 //TypeError: Assignment to constant variable.
accountEmail = "nav@hotmail.co.in"
accountPassword = "99887766"
accountCity = "New Delhi"
/*
prefer not to use var
because of issue in block scope and functional scope.
*/
console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])