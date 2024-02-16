//Singleton
//Object.create

//object literals

const mySymbol=Symbol("key1")

//How to decleard Objects
const JsUser ={
    firstName:"rishab",
    middleName:"kumar",
    lastName:"singh",
    "fullName":"rishab kumar singh",
    [mySymbol]:"mykey1",
    age:20,
    location:"Bhopal",
    email:"rishab@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
console.log(JsUser.firstName);//Its wrong ways for call any objects
console.log(JsUser.fullName);
console.log(JsUser["firstName"]);
//console.log(typeof JsUser.mySymbol);//It's return string dataTypes when we write without [] brackets

console.log(JsUser[mySymbol]);

JsUser.email="singh@gmail.com";//change the email value

//Object.freeze(JsUser);//Object freeze karne ke baad usme kuch change nahi kiya ja sakta hai
JsUser.email="singh@Microsoftgmail.com";
console.log(JsUser);

//Function declered in js
JsUser.greeting=function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo =function(){
    console.log(`Hello JS User,${this.name}`);
}
console.log(JsUser.greeting());//
console.log(JsUser.greetingTwo());//
