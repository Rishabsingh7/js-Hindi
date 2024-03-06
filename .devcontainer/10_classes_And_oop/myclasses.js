//ES6
/** 
class User{
      constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password
      }

      encryptPassword(){
        return `${this.password}singh`
      }
      changeUsername(){
        return  `${this.username.toUpperCase()}`
      }
}

const chai=new User("Rishab","rishab@gmail.com","123")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());
*/

//behind the scene

function user(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password

}

user.prototype.encryptPassword=function(){
    return `${this.password}singh`
}
user.prototype.changeUsername=function(){
    return `${this.username.toUpperCase()}`
}

const tea=new user("monu","monu@gmail.com","123")
console.log(tea.encryptPassword());
console.log(tea.changeUsername());
