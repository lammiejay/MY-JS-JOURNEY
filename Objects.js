// Object Literals

// let user = {
//     name: "Ola",
//     age: 20,
//     email: "lammiejay02@gmail.com",
//     location: "Lagos",
//     blogs: ["my journey as a developer", "balancing work and school"],
//     login(){
//         console.log('the user logged in');
//     },
//     logout(){
//         console.log('user logged out');
//     },
//     // to access the posts inside the array blogs
//     // we cannot just call it straight we have to use the 'this' keyword

//     // cannot use arrow function for "this" keyword
//     logBlogs() {
//         console.log(this.blogs);
//         console.log('this user has written the following blogs:');
//         this.blogs.forEach(blog => {
//             console.log(blog);
//         })
//     }
// }; 

// console.log(user);
// console.log(user.name);
// OR
// console.log(user['name']);

// user.age = 19;
// console.log(user.age);

// console.log(typeof user);

// adding methods to an object

// user.login();
// user.logout();

// accessing the blogs content

// const blogs = [
//     {title: 'why mac & cheese rules', likes: 30},
//     {title: '10 things to make with marmite', likes: 50}
// ];

// let user = {
//     name: "Ola",
//     age: 20,
//     email: "lammiejay02@gmail.com",
//     location: "Lagos",
//     blogs: [
    //     {title: 'why mac & cheese rules', likes: 30},
    //     {title: '10 things to make with marmite', likes: 50}
    // ],
    // login(){
    //     console.log('the user logged in');
    // },
    // logout(){
    //     console.log('user logged out');
    // },
    // to access the posts inside the array blogs
    // we cannot just call it straight we have to use the 'this' keyword

    // cannot use arrow function for "this" keyword
    // logBlogs() {
        // console.log(this.blogs);
//         console.log('this user has written the following blogs:');
//         this.blogs.forEach(blog => {
//             console.log(blog.title, blog.likes);
//         })
//     }
// }; 


// user.logBlogs();
// console.log(this);

// MATH OBJECTS

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// RANDOM NUMBERS
const random = Math.random();

console.log(random);
console.log(Math.round(random * 100)); 