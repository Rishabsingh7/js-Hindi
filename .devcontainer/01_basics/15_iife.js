//Immediately Invoked Function Expressions(IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`)
})() ;
//global scope ke polution ko hatane ke liye iife ka use kiya

((name)=>{
    //simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})("rishab")