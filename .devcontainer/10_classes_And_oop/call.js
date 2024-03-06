function SetUsername(username){
    //complex DB calls
    this.username=username
    console.log("called")
}

function createUser(username,email,password){
    SetUsername.call(this,username);//here is not call only given reference
    //.call is refrence hold
    this.username=username
    this.email=email
    this.password=password
}

const chai=new createUser("chai","chai@fb.com","123")
console.log(chai);