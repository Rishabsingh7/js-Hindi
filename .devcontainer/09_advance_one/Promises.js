const promiseOne=new Promise(function(resolve, reject) {
  //DO an async task
  //DB calls, cryptography, network
  setTimeout(function(){
    console.log('Async task is compelete');
    resolve()
  },2000)
  
})

promiseOne.then(function(){
    console.log("Promise consumed");
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },2000)
}).then(function(){
    console.log("Async 2 resolved");
})


//Third Promised
const promiseThree=new Promise(function(resolve,reject){
   setTimeout(function(){
      resolve({username:"rishab",email:"rishab@gmail.com"})
   },2000)
})

promiseThree.then(function(user){
    console.log(user)
})


//Promise Four 
const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function() {
        //let error=false;
        let error=true;
        if(!error){
            resolve({username:"rishab",password:"123"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    }, 2000);
})
 promiseFour
 .then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
 console.log(username);
})
.catch(function(error){
    console.log(error)
}).finally(() => console.log("The Promise is resolved or rejected "))


//Promise Five 
const promiseFive =new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        //let error=false
        if(!error){
            resolve({username:"JavaScript",password:"123"})
        } else{
            reject('ERROR:JS went wrong')
        }
    },2000)
})

async function consumePromiseFive(){
   try{
    const response=await promiseFive
    console.log(response);
   }catch(error){
    console.log(error)
   }
}
consumePromiseFive()


//Next Class Topics
// async function getAllUser(){
//     try{
//         const response=fetch('https://api.github.com/users/Rishabsingh7')
//        // console.log(response);
//      const data=await response.json()
//      console.log(data);
//     }catch(error){
//         console.log("E: ",error);
//     }
// }
// getAllUser()


fetch('https://api.github.com/users/Rishabsingh7')
.then((response)=>{
    return response.json()
})
.then((data)=>{
 console.log(data);
})
.catch((error) => console.log(error))