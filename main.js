// let age = 25;
// let year = 2019;

// console.log(age, year);

// age = 30;
// console.log(age);

// const points = 100;


// console.log(points);

// STRINGS

// STRING CONCATENATION
// let firstName = "Olamide";
// let lastName = "Gbadamosi";
// let fullName = firstName + " " + lastName;
// console.log(fullName);

// STRING LENGTH
// console.log(fullName.length);

// STRING METHODS
// console.log(fullName.toUpperCase());

// let email = "mario@thenetninja.co.uk"; 
// let index = email.indexOf("u");
// console.log(index);

// common string methods

// let email = "lammiejay@gmail.com";

// let result = email.lastIndexOf("a");

// let result = email.slice(0,6);

// let result = email.substring(3,12);

// let result = email.replace("m", "r");

// console.log(result);

// NUMBERS
let radius = 10;
let pi = 3.142;

// console.log(radius, pi); 

// Math Operators: +, -, /, *, **, %
// let result = radius % 3;
// let result = pi * radius**2;

// ORDER OF OPERATION - B I D M A S
// let result = 5 * (10-3)**2;

// let likes = 10;

// appending by 1 unit

// likes = likes + 1;
// This is the same as :
// likes++
// likes--

// append
// likes += 10;
// likes -= 5;
// likes *= 2;
// likes /= 2;

// console.log(likes);

// NaN - Not a Number
// i.e
// console.log(5 / 'hello');

// concatenating numbers
// let result = 'the blog has ' + likes + ' likes';

// console.log(result);

// Template Strings/ Literal
// const title = 'Best Reads of 2023';
// const author = 'Ola';
// const likes = 30;

// Concatenation Way
// let result = 'The Blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';

// Template String Way
// let result = `The blog called ${title} by ${author} has ${likes} likes`;

// console.log(result);

// Creating Html Templates
// let html = `
//     <h2>${title}</h2>
//     <p>${author}</p>
//     <span>This blog has ${likes} likes.</span>
// `;

// console.log(html);

// ARRAYS
// let room = ['ola', 'nonso', 'dara', 'seyi'];

// room[1] = 'timi';
// console.log(room);

// let ages = [19, 18, 17, 21];
// console.log(ages[3]);

// let random = ['shaun', 30, 40, 'Tobi', 655];
// console.log(random);

// getting the length of an array
// console.log(room.length);

// Array Methods
// let result = room.join(', ');
// let result = room.indexOf('dara');
// let result = room.concat(['david', 99]);
// let result = room.push('ken'); // adds to the array and gives result as new length
// result = room.pop(); //removes last value in the array and prints out the removed value

// console.log(result);
// BOOLEANS AND COMPARISONS
// console.log(true, false, "true", 'false');

// METHODS THAT CAN RETURN BOOLEANS
// let email = 'gbadamide1@gmail.com';
// let names = ['mario', 'luigi', 'toad'];

// let result = email.includes('@');
// let result = names.includes('Toad');

// console.log(result);

// COMPARISON OPERATORS
let age = 25;

// console.log(age == 25);
// console.log(age == 30);
// console.log(age != 30);
// console.log(age != 25);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age <= 25);
// console.log(age >= 25);

let name = "Olamide";

// console.log(name == 'Olamide');
// console.log(name == 'olamide');
// console.log(name > 'Nonso');
// console.log(name > 'olamide'); // in JS lowercase letters are greater than any uppercase letter

// == - abstract/loose comparison (different types can be equal)
// console.log(age == '25');
// console.log(age == 25);
// console.log(age != 25);
// console.log(age != '25');

// === - strict comparison (different tpes cannot be equal)
// console.log(age === 25);
// console.log(age === '25');
// console.log(age !== 25);
// console.log(age !== '25');

// TYPE CONVERSION
let score = '100';
 
// score = Number(score);
// console.log(score + 1); 
// console.log(typeof score);

// let result = Number('hello');
// let result = String(50);

// All integers are truthy values, 0 is falsy.
//let result = Boolean(100);
// let result = Boolean(0);

// All strings of any length bar empty strings are truthy 
// let result = Boolean('0');

// console.log(result, typeof result);

