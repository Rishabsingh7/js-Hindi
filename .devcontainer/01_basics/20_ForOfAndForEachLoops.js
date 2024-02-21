console.log("For Of Loops and For Each Loops");

//["","",""]
//[{},{},{}]

const arr=[1,2,3,4,5,6]
for (const num of arr) {
    //console.log(num);
    
}

const greetings="Hello World!";
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
}

//Maps in JavaScripts
const map=new Map()
map.set('IN',"India");
map.set('USA',"United States of America");
map.set('Fr',"France");

//console.log(map);
for(const [key,value] of map){
//console.log(key,':-',value);
}

const myObject={
    'game1':'NFS',
    'game2':'Spiderman',
    'game3':'Candicross'
}

//ye wala code kaam nahi karega
//myObject is not iterable
// for (const [key,value] of myObject) {
//      console.log(key,':-',value);
// }


const myObjects={
    js:'javaScript',
    cpp:'C++',
    rb:'ruby',
    swift:'swift by apple'
}

for(const key in myObjects){
    //console.log(`${key} shortcut is for ${myObjects[key]}`);
}

const programming =["js","rb","py","java","cpp","c"]
for(const key in programming){
 //console.log(programming[key]);
}


// const map=new Map()
// map.set('IN',"India");
// map.set('USA',"United States of America");
// map.set('Fr',"France");
//  for(const key in map){
//     console.log(key);
//  }


  //const coding=["html","css","js","ruby","java","python","cpp"]
//  coding.forEach(function (item) {
//     console.log(item);
//  })

// coding.forEach( (val) =>{
//     console.log(val);
// })

//function printMe(item){
    //console.log(item);
//}
//coding.forEach(printMe);

//coding.forEach((item,index,arr)=>{
    //console.log(item,index,arr);
//})

const myCoding=[
   {
    languageName:"javaScript",
    languageFileName:"js"
   },
   {
    languageName:"java",
    languageFileName:"java"
   },
   {
    languageName:"c++",
    languageFileName:"cpp"
   },
   {
    languageName:"python",
    languageFileName:"py"
   },
   {
    languageName:"Ruby",
    languageFileName:"rb"
   },
]

myCoding.forEach((item)=>{
   console.log(item.languageName);
   console.log(item.languageFileName);
})