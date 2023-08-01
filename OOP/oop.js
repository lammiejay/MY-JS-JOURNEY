// const userOne = {
//     username: 'ryu',
//     email: 'ryu@thenetninja.co.uk',
//     login(){
//         console.log('the user logged in');
//     },
//     logout(){
//         console.log('the user logged out');
//     }
// }

// console.log(userOne.username, userOne.email);
// userOne.login();

// const userTwo = {
//     username: 'ryu',
//     email: 'ryu@thenetninja.co.uk',
//     login(){
//         console.log('the user logged in');
//     },
//     logout(){
//         console.log('the user logged out');
//     }
// }

// console.log(userTwo.username, userTwo.email);
// userTwo.login();


// const userThree = new User('shaun@thenetninja.co.uk', 'shaun');

// A class is a blueprint for an object, specifies how one should be made
// creating classes
class User {
    constructor(username, email){
        // setup object properties
        this.username = username;
        this.email = email;
        this.score = 0;
    } // methods are placed after the constructor
    login(){ // using an arrow function will refer to the window object
        console.log(`${this.username} just logged in`);
        return this;
    }
    logout(){ // using an arrow function will refer to the window object
        console.log(`${this.username} just logged out`);
        return this;
    }
    incScore(){
        this.score ++;
        console.log(`${this.username} has a score of ${this.score}`);
        return this;
    }
}

class Admin extends User {
    deleteUser(user){
        users = users.filter((u) => {
            return u.username !== user.username;
        });
    }
}

// what the 'new' keyword does
// 1 - it creates a new empty object {}
// 2 -it binds the value of 'this' to the new empty project
// 3 - it calls the constructor function to 'build' the object

const userOne = new User('Ola', 'lammiejay02@gmail.com'); 
const userTwo = new User('David', 'Davidthegoat@gmail.com');
const userThree = new Admin('lammie', 'gbadamide1@gmail.com');

// userOne.login().incScore().incScore().logout(); // chaining methods
console.log(userOne, userTwo, userThree);

let users = [userOne, userTwo, userThree];
console.log(users);

userThree.deleteUser(userTwo);
console.log(users);
