//If statement

if(true){

}

//Some Oprators 
// <,>,<=,>=,==,!=,===,!==

if(2!=="2"){
    console.log("executed");
}

// const temperature=41
// if(temperature<50){
//     console.log("less than 50");
// }
// else{
// console.log("temperature is greater then 50");
// }
// console.log("Execute");


//Scope related concept
// const score=200
// if(score>100){
//     const power="fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);


//Sort hand Notation
//const balance=1000
//if(balance>500) console.log("test"),
//console.log("test2");

//Sometimes we check multiple conditons
// const balance=500;
// if(balance<500){
//     console.log("less than 500");
// } else if(balance<750){
//   console.log(balance<750);
// }
// else if(balance<1000){
//     console.log("less than 1000");
// }
// else{
//     console.log("less than 1200");
// }


//reallife examples

const userLoggedIn=true;
const debitCard=true;
const loggedInFromGoogle=false;
const loggedInFromEmail=true;
if(userLoggedIn&&debitCard&&2==2){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle||loggedInFromEmail){
    console.log("Allow to singIn");
}

