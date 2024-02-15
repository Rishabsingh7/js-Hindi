console.log("Nums_and_Math");

// const score=400;

// const balance =new Number(1000);
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toFixed(2));//1000.00
// console.log(balance.toString().length);

// const otherNumber=123.6455;
// console.log(otherNumber.toPrecision(5));//123.65

// const hundreds=1000000;
// console.log(hundreds.toLocaleString());//Its return us values
// console.log(hundreds.toLocaleString('en-IN'));//Its return indian values

// +++++++++++++ Maths +++++

console.log(Math);
console.log(Math.abs(-4));//abs change negative value to positive values
console.log(Math.round(4.3));
console.log(Math.ceil(4.5));//Output 5
console.log(Math.floor(4.5));//Output 4
console.log(Math.sqrt(36));//Output is 6

console.log(Math.min(5,7,9,5,4,1));
console.log(Math.max(5,7,9,5,4,1));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);


const min=1;
const max=100;
console.log(Math.floor(Math.random()*(max-min+1))+min);