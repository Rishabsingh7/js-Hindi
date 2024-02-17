//We create basics objects

const user={
    userName:"rishab",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.userName}, welcome to website`);
        //console.log(this);
    }
}
// user.welcomeMessage();//Its default return value 
// user.userName="shalu"
// user.welcomeMessage();

//console.log(this);//return empty objects {}

//Note browser ke under global object hai wo Window Objects hai  


// function chai(){
//     let userName="rishab"
//     console.log(this.userName);
// }
// chai();

// const chai=function(){
//     let userName="rishab"
//     console.log(this.userName);
// }
// chai();


//ArrowFunction
const chai=()=>{
    let userName="rishab"
    //console.log(this);
}
chai();

//Arrow Functions Basica syntax
// const addTwo=(num1,num2)=>{
//    return num1+num2; //Explicite return 
// }
// console.log(addTwo(2,3));

//Implicit return
//const addTwo=(num1,num2)=> num1+num2;
//const addTwo=(num1,num2) =>(num1+num2);
//console.log(addTwo(2,3));

//when we return object
const addTwo=(num1,num2) =>({userName:"rishab"})
console.log(addTwo(3,4));

const myArray=[2,4,5,6,7]
