const accountId = 144553 
let accountEmail = "piyush@gmail.com" 
var accountPassword ="122234"
accountCity = "Jaipur" // should not use this way but can be done .
let accountState; //  
// accountId = 2 //not allowed
accountEmail="hc@hc.com"
accountPassword="232323"
accountCity="benguluru"

console.log(accountId);

/* 
preffer not to use var
because of issue in block scope and functional scope

*/ 
console.table([accountId,accountCity,accountPassword,accountEmail,accountState])
