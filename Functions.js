// Function declaration (doesnt require ; at the end)
// function greet() {
//     console.log("hello there!");
// }

// greet();

// Function Expression (requires ; at the end)
// const speak = function(){
//     console.log("good day!");
// };

// speak();

// ARGUMENTS & PARAMETERS
// function speak(name, time){
//     console.log(`good ${time} ${name}`);
// }

// speak("Olamide", "morning"); // argument

//  RETURNING VALUES

// function calcArea(radius) {
//     return 3.14 * radius**2;
//     // console.log(area);
// }

// calcArea(5);

// const a = calcArea(5);
// console.log(a);

// REGULAR FUNCTIONS
// const calcArea = function(radius) {
//     return 3.142 * radius**2;
// };

// function calcArea1(radius) {
//     return 3.142 * radius**2;
// }

// ARROW FUNCTIONS
// const calcArea2 = (radius) => {
//     return 3.14 * radius**2
// }; 

// const area = calcArea2(5);
// console.log('area is:', area);

// practise arrow functions

// const greet = () => 'hello, world';


// const bill = (products, tax) => {
//     let total = 0;
//     for( let i = 0; i < products.length; i++ ) {
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };

// console.log( bill([10, 30, 41], 0.2));

//  CALL BACK FUNCTIONS 
// const myFunc = (callbackFunc) => {
    // do something
//     let value = 50;
//     callbackFunc(value);
// };

// myFunc(value => {
    // do something
//     console.log(value);
// });

// FOREACH method
// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`);
// }

// people.forEach(logPerson);

// get a reference to the 'ul'
const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people.forEach(person => {
    // create html template
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;