console.log("Arrays");
//[] square brackets
// () Parentheses
//{} curly braces
//javaScript array-copy-operations create shallow copies (All standard built-in copy operations with any javaScript objects create shallow copies.rather than deep copies)

const myArr=[0,2,3,4,5,6,7,8];
const myHeros=["tiger","ranbir","sushant"];
const myArr2=new Array(1,2,3,4,5);
//console.log(myArr[1]);

//Arrays Methods
//myArr.push(7);//Add the value in last index Arrays
// myArr.push(9);//Add the value in Arrays
// // myArr.pop();//delete the value of last indext in arrays

//myArr.unshift(9)//unshift add value of start index
//myArr.shift();//shift method delete first index element

//console.log(myArr.includes(9));//return boolean value
//console.log(myArr.indexOf(9));//exist karege to index value return karega otherwise -1 return karega

// const newArr=myArr.join()
// console.log(myArr);
// console.log(typeof newArr);

//slice, splice method
console.log("A",myArr);
const myn1=myArr.slice(1,3);
console.log(myn1);
console.log("B",myArr)

const myn2=myArr.splice(1,3);
console.log("C",myArr);
console.log(myn2);



