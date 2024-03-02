const user={
    username:'rishab',
    loginCount:8,
    signedIn:true,

    getUserDetails:function(){
     //console.log("Got user datails from database");
    // console.log(`Username: ${this.username}`);
    console.log(this);
    }
}
//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);//return Empty {}

function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greeting =function(){
        console.log(`Welcome ${this}`)
    }

    return this;
}
const userOne=new User("Rishab",12,true);
const userTwo=User("Jain",11,false);
console.log(userOne.constructor);
console.log(userTwo);