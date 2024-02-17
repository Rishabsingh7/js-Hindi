//const tinederUser=new Object();
const tinederUser={};

tinederUser.id="089IT"
tinederUser.name="rishab"
tinederUser.isLoggedIn=false
//console.log(tinederUser);

const regularUser={
    email:"salu@gmail.com",
    fullName:{
        userfullName:{
            firstName:"rishab",
            middleName:"kumar",
            lastName:"singh"
    }
  }
}
//console.log(regularUser.fullName.userfullName.firstName);

//How to Objects marge/add
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

//const obj3={obj1,obj2};
//const obj3=Object.assign({},obj1,obj2,obj4);//Object.assing() static method copies all enumerable own properties from one or more source objects to a target object. it returns the modified target object.

const obj3={...obj1,...obj2,...obj4};
//console.log(obj3);

const users=[
    {
    id: 1,
    email:"rishab@gmail.com"
    },
    {
    id: 2,
    email:"sonu@gmail.com"
    },
    {
    id: 3,
    email:"rohan@gmail.com"
    },
]

users[1].email
//console.log(tinederUser);

//console.log(Object.keys(tinederUser));
//console.log(Object.values(tinederUser));
//console.log(Object.entries(tinederUser));

//console.log(tinederUser.hasOwnProperty('isLoggedIn'));//return true its present

//console.log(tinederUser.hasOwnProperty('firstName'));//Its return false its not avalable


const course ={
    courseName:"Js for Bignners",
    price:"999",
    courseInstructor:"rishab"
}

// console.log(course.courseName);
// console.log(course.price);
// console.log(course.courseInstructor);

//Other ways for call 
const {courseName:name}=course;
console.log(name);

//some react features likes props
const navbar=({company}) =>{

    //aap kabi bhi {} dekhenge to samjh jaiyega destructring ki ja rahi hai
}
navbar(company="rishab");

//API means apna kaam kishi dusre ke dalna ho 

//JSON KAISA DIKHTA HAI
// {
//     //YE HAI JSON FILES
//     name:"rishab",
//     "courseName":"Js for bigneers",
//     "price":"free"

// }

//kai baar API arrays ke format me bhi milti hai

[
    {},
    {},
    {}
]

//hellow kaise ho aap sab

 