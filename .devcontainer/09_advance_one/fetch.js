console.log("To Kaise ho App Log!");

fetch('https://api.github.com/users/Rishabsingh7')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))