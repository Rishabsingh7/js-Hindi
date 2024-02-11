console.log("Conversion Operations");

//let score="33" =>33
//let score="33abc"; =>Nan Not an Number
//let score=null;
//let score=undefined;
//let score=true;  =>1
//let score=false; =>0
//   let score="rishab";
// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber=Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

//let isLoggedIn=0;//false return
//let isLoggedIn=1;//true return
//let isLoggedIn="";//false return
let isLoggedIn= "rishab";//true return

let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


let someNumber=33
let stringNumber=String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);



// ********************* Operations ************************

let value=3;
let negValue=-value
console.log(negValue);  //output -3

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);2^3
console.log(2/2);
console.log(4%4);

let str1="hello";
let str2=" rishab";
let str3=str1+str2;
console.log(str3);

console.log("2"+4);//output 24
console.log(2+"4");//output 24
console.log("2"+2+2);//output 222
console.log(2+2+"2");//output 42
console.log(2+"2"+2);//output 222

console.log((3+4)*5%3);
console.log(true);//output true
console.log(+true);//1
console.log(-true);//-1
console.log(+"");//0


let num1,num2,num3
num1=num2=num3=2+2;
console.table(["num1= "+num1,"num2= "+num2,"num2= "+num3]);

let gameCounter=100;
++gameCounter;//prefix
console.log(gameCounter);
let gamecounter=100;
gamecounter++;//postfix
console.log(gamecounter);