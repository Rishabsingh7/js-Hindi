class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createId(){
        return Math.floor(Math.random() * 1000000);
    }

}
const rishab=new User("rishab")
//console.log(rishab.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email=email
    }
}

const iphone=new Teacher("iphone","iphone@gmail.com")
console.log(iphone.logMe());