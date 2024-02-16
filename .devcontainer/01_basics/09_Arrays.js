const marvel_heros=["thor","Ironman","spiderman"];
const dc_heros=["superman","flash","batman"];
//marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);
// console.log(marvel_heros[3][1]);
// console.log(marvel_heros[3][2]);


//const allHeros=marvel_heros.concat(dc_heros);
//console.log(allHeros);

const All_new_heros=[...marvel_heros,...dc_heros];
console.log(All_new_heros);

const Another_Arrays=[1,2,3,[4,5,6],7,[6,7,[8,9]]];

const real_another_arrays=Another_Arrays.flat(Infinity);
console.log(real_another_arrays);

console.log(Array.isArray("rishab"));//return false
console.log(Array.from("rishab"));//from convert in arrays 
console.log(Array.from({name:"rishab"}));//its return empty arrays

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));