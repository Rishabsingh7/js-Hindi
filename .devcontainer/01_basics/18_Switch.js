
//Basics Syntex of switch statement 
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month=10;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Fen");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("Aril");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("Sep");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;

    default:
        break;
}

//+++++++++ Truthy value
const userEmail="rishab@.gmail.com";
if(userEmail){
    console.log("Got user email");
} 
else{
    console.log("Don't have user email");
}

//falsy values
// false,0,-0,BinInt 0n, "",null,undefined,NaN

//Truthy value
// True,1,"0",'false'," ",[],{},function(){},

const useremail=[];
if(useremail.length===0){
    console.log("Array is empty");
}

const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}

//Some important keys
//false==0;//return true
//false=='';//return true
//0=='';//return true

//Nullish Coalescing Opertator (??):
//Its apply only two keys 1 Null 2 Undefined

let val1;
//val1=5??10;//return 5
//val1=null??10;//return 10
//val1=undefined??15;//return 15
//val1=null??undefined;//return Undefined
//val1=undefined??null;//return null
val1=null??10??20;//return 10
console.log(val1);

// Terniary Operator

//condition ? true : false
const iceTeaPrice=100;
iceTeaPrice<=80?console.log("less than 80"):console.log("more than 80")
