// We will be talking about the static properties

class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME: ${this.username}`);
    }

    static createId(){   // This make the method or property inaccessible to other object instances
        return `123`
    }
}
const myUser = new User('Basit')
//console.log(myUser.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}
const iphone = new Teacher('iphone','example@gmail.com')
iphone.logMe()
console.log(iphone.createId()); // Now this gives the error it means that due to static keyword it doesn't allow any child and class to inherit or 
                                // access it .

