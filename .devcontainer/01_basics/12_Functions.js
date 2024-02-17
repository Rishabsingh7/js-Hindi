
function sayMyName(){

console.log("R");
console.log("I");
console.log("S");
console.log("H");
console.log("A");
console.log("B");

}

//sayMyName(); function reference
                 //number1 number2 is parameter
//function addTwoNumbers(number1,number2){
//    console.log(number1+number2);
//}
// addTwoNumbers(4,6);//4,6 is Arrguments
// addTwoNumbers(3,5);//output 8
// addTwoNumbers("4",5);//output 45
// addTwoNumbers(3,null);//output 3
// addTwoNumbers(5,undefined);//NaN
// addTwoNumbers(3,true);//return 4 true=1+3=4 
//addTwoNumbers(3,false);//return 3 false=0+3=3


function addTwoNumbers(number1,number2){
    // let result=number1+number2;
    // return result;
    //return ke baad kuch bhi print nahi hota hai
    return number1+number2;
    console.log("rishab");
}

const result=addTwoNumbers(3,6);
//console.log("Result: ",result);

// function loginUserMessage(username){
//     // if(username===undefined){
//         if(!username){
//         console.log("Please enter a username");
//         return;
//     }
//      return `${username} just logged in`
    
// }
//console.log(loginUserMessage("rishab"));
//console.log(loginUserMessage("rishab"));//just logged in 
//console.log(loginUserMessage());//Undefined just logged in 

function loginUserMessage(username="rishab"){
    // if(username===undefined){
        if(!username){
        console.log("Please enter a username");
        return;
    }
     return `${username} just logged in`
    
}
//console.log(loginUserMessage());//defalut value rishab just logged in
//console.log(loginUserMessage("shalu"));//return shalu just logged in


//...rest operator/spread operator
function calculateCardPrice(...num1){
    return num1;

}
//console.log(calculateCardPrice(5,5,6,7));

function calculateCardPrice1(val1,val2, ...num1){
    return num1;

}
console.log(calculateCardPrice1(5,2,4,700));//jitna vlaue diya jayega usko chod ke print karata hai jise [4,700]


//Create an Objects/Objects pass
const user={
    userName:"rishab",
    price :1999
}

function handleObject(anyobject){
 
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`);
}
//handleObject(user);
//direct pass username and price
handleObject({
    userName:"shalu",
    price:2999
})

//Arrays pass
const myNewArrays=[200,399,445,666] 
function returnSecondValue(getArray){
    return getArray[3];
}
//console.log(returnSecondValue(myNewArrays));
console.log(returnSecondValue([200,399,445,666,1000]));




