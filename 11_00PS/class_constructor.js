// Now we will be talking about the class constructor

// ES6 K bad ki kahani

// class User{
//     // you can add properties, functions and constructor 
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}ABC`
//     }
//     changeUserName(){
//         return `${this.username.toUpperCase()} changed`
//     }
// }
// const chain = new User('Basit','example@gmail.com','123')
// console.log(chain.encryptPassword());
// console.log(chain.changeUserName());


//Behind the scene 

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}
User.prototype.encryptPassword = function(){
    return `${this.password}ABC`
}
User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()} changed`
}
const tea = new User('teasing', 'example@gmail.com', '123')
console.log(tea.changeUserName());
