// const mynewObj={username:"username"}
// console.log(mynewObj);

//getOwnPropertyDescriptor it is tells something Objects hidden 

const descripter=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter);


//console.log(Math.PI);
//Math.PI=5
//console.log(Math.PI);

const chai={
    name:'ginger chai',
    price:250,
    isAvailable:true,

    orderChai:function(){
        console.log("Chai nahi bani")
    }

}
//console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// Object.defineProperty(chai,'name',{writable:false,
//     enumerable:false
// })

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));


for(let [key,value] of Object.enteries(chai)){
    if(typeof value !=='function'){
        console.log(`${key} : ${value}`);
    }













    
}