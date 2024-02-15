console.log("dataType_Summary");
//Basically two types of dataTypes 
/** 1 Primitive dataTypes
There are seven types of Primitive dataTypes 
1 String
2 Number
3 Boolean
4 Null
5 undefined
6 Symbol
7 BigInt 

Notes ->JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.


*/
// const score=100;
// const scoreValue=100.3;
// const isLoggedIn=false;
// const outsideTemp=null;//object
// let userEmail;

// const id=Symbol('123')
// const anotherId=Symbol('123')
// console.log(id===anotherId);//false

// const bigNumber=54545454542n;

// Find the dataTypes of any
// console.log(typeof score); //number
// console.log(typeof scoreValue); //number
//console.log(typeof isLoggedIn);//boolean 
//console.log(typeof outsideTemp);//object
//console.log(typeof userEmail);//undefined
//console.log(typeof id);//symbol
//console.log(typeof anotherId);//symbol



//2 Reference (Non-Primitive dataTypes)
/**
 1 Arrays
 2 Objects
 3 Functions
 */

 const heros=["ranveer","ayushman","hritik","tiger"];//Objects
 let myObject={
    name:"rishab",
    age:20,
 }

const myFunctin=function (){
    console.log("Hello World");
    console.log("To kaise ho aap log");
}
myFunctin();

// Find the dataTypes of any
// console.log(typeof myFunctin);
// console.log(typeof myObject);
// console.log(typeof heros);


//  ++++++++++++++++++++++++++++++++++++
//Basically two types of Memory
//Stack(Primitive) stack me copy milta hai  , Heap(Non-Primitive) heap me reference milta hai

let myName="rishab kumar singh"
let anotherName=myName;
anotherName="monu kumar singh"
console.log(myName);
console.log(anotherName);


let userOne ={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo =userOne
userTwo.email="rishab@gmail.com"
userTwo.upi="rishab@ybl"
console.log(userOne.email);
console.log(userTwo.email);
console.log(userOne.upi);
console.log(userTwo.upi);