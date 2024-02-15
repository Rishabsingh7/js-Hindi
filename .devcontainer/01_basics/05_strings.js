//+++++++++++ Strings ++++++++++++++
const name="rishab"
const repoCount=50

//console.log(name+repoCount+" Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

//Decleared String 

const gameName=new String('rishab-singh-rajput');
console.log(gameName);
console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName[2]);
console.log(gameName[3]);
console.log(gameName[4]);
console.log(gameName[5]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('s'));

const newString=gameName.substring(0,6);
console.log(newString);

const anotherString =gameName.slice(-8,6);
console.log(anotherString);

const newStringOne="      rishab     ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url="https://rishabuc.com/rishab%20singh";
console.log(url.replace('%20','_'));

//if you want to ask somethings in string
console.log(url.includes('rishab'));//return true
console.log(url.includes('sohan'));//return false

//String convert in Arrays
console.log(gameName.split('-'));