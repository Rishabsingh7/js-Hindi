const account_id=144553;//const means no change value
let account_Email="rishab@gamil.com"
var account_Password="12345"
account_City="bhopal"
let account_state;//store default value
var account_var;//store default value
// account_id=2// const change not allowed 
account_Email="sonu@gmail.com"
account_Password="43553"
account_City="bihar"
console.log(account_id);

/*
prefer not to use var
because of issue in block scope and functional scope

*/
console.table([account_id,account_Email,account_Password,account_City,account_state,account_var]);