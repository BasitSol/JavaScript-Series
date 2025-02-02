// We will be learning about the call stack size
class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){                    // NOTE : You must use the same property name when creating getter , setter .Like there is email()
        this._email = value
    }
   
    get password(){
        return this._password.toUpperCase()          // We need to define the setter as well otherwise it gives an error   
    }
    set password(value){
        this._password = value               // You can use diff approach by using another variable / there the password got overwritten
                                           // when it comes from the constructor to setter function 
    }
}
const basit = new User('example@gmail.com', 'abchg');
console.log(basit.password);  // Here it gives the max call stack size exceeded error
                             // Coz at that place there exist a race between them constructor is setting value and setter is also setting 
                            // value so in that way the call stack size become exceeded
                            // what's the solution to that problem ? Answer : changing the variable name so the value got overwritten
console.log(basit.email);   


// Key POints : We can also implement all this(getter,Setter) in functions based syntax and we can also try this in object based syntax.


