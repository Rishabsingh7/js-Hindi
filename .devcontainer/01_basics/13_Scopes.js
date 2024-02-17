console.log("{}=>Scope Tutorials");

let a=40;//Global scopes


if(true){
    let a=10;
    const b=20;
    var c=30;
    console.log("INNER: ",a);
     //Its block scope
}

// for (let i = 1; i <=10; i++) {
//     console.log(i*5);  
// }


console.log(a);
//console.log(b);
// console.log(c);

//How to scope work in function 
//Nested Scope

function one(){
    const userName="rishab"
    
    function two(){
        const website="gitHub"
        console.log(userName);
    }
    //console.log(website);
    two();
}
//one();


if(true){
    const userName="rishab"
    if(userName==="rishab"){
        const website="github"
        console.log(userName +" "+ website);
    }
    //console.log(website);
}
//console.log(userName);


// +++++++++++ interesting +++++++++

function addOne(num){
    return num+1;
}
//console.log(addOne(5));
addOne(6);

const addTwo=function(num){
    return num+2;
}
//console.log(addTwo(5));
addTwo(5);