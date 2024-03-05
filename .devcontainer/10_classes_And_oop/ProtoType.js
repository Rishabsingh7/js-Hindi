// const newHero=["hulk","spiderman"];
// console.log(newHero);


// let myName="Rishab    "
// console.log(myName.trueLength);
//console.log(myName.length)return 10 with blanck space count    

let myHeros=["thor","spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
       console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.rishab=function(){
    console.log(`rishab is present in all objects`)
}

Array.prototype.heyRishab=function(){
    console.log(`Rishab says hello`)
}
//heroPower.rishab()
// myHeros.rishab()
// myHeros.heyRishab()
//heroPower.heyRishab()

//Inheritance

const User={
    name:"rishab",
    Email:"rishab@gmail.com"
}

const Teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvailable:false
}

const TASupport ={
    makeAssignment:'JS Assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=User


//Medern Syntax  
Object.setPrototypeOf(TeachingSupport,Teacher) 



let anotherUserName="rishabAurCode              " 
String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`)
}
anotherUserName.trueLength();
"Rishab".trueLength()
"iceTea".trueLength()