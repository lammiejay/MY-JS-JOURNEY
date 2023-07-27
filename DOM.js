// const para = document.querySelector('p');
// const para2 = document.querySelector('.error');
// const para3 = document.querySelector('div.error');

// console.log(para);
// console.log(para2);
// console.log(para3);

// const paras = document.querySelectorAll('p');

// const errors = document.querySelectorAll('.error');
// paras.forEach(para => {
//     console.log(para);
// })

// console.log(paras[2]);
// console.log(errors);


// get an element by ID
// const title = document.getElementById('page-title');
// console.log(title);

// get elements by their class name 
// const errors = document.getElementsByClassName('error');
// console.log(errors);

// get elements by their tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras[0]);

// manipulating the DOM
// const para = document.querySelector('p');

// console.log(para.innerText);
// para.innerText = ' Olamide is awesome';

// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' new text';
// });

// const content = document.querySelector('.content');

// console.log(content.innerHTML);
// content.innerHTML = '<h2>This is a new h2 tag</h2>';

// const people = ['mario', 'luigi', 'ryu', 'chun-li'];

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// });

// GETTING AND SETTING ATTRIBUTES
// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.netnaija.com');
// link.innerText = 'TheNetnaija  website';

// const mssg = document.querySelector('p');

// console.log(mssg.getAttribute('class'));
// to edit the attribute:
// mssg.setAttribute('class', 'success');

// to add an attribute:
// mssg.setAttribute('style', 'color: purple');

// to add to an already set attribute:
// console.log(mssg.style);
// console.log(mssg.style.color);

// mssg.style.margin = '50px';
// mssg.style.color = 'crimson';
// mssg.style.fontSize = '60px';

// to remove an already set attribute
// mssg.style.margin = '';

// ADDING AND REMOVING CLASSES FROM ELEMENTS
// const content = document.querySelector('p');

// console.log(content.classList);

// remove class
// content.classList.remove('error');

// add class
// content.classList.add('error');

// replace class
// content.classList.replace('error', 'success');

// TOGGLING CLASSES
// Add
// title.classList.toggle('test');
// Remove
// title.classList.toggle('test');

// EXERCISE
// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     if(para.textContent.includes('error')){
//         para.classList.add('error');
//     }
//     else if(para.innerText.includes('success')){
//         para.classList.add('success');
//     } else{
//         para.classList.add('lorem');
//     }
// })

// console.log(paras);

// const title = document.querySelector('.title');

// Lesson 9
// CHILDREN RELATIONS
const article = document.querySelector('article');

// console.log(article.children);

//  To convert an HTML collection to an array use Array.from(); 
// console.log(Array.from(article.children));
// console.log(article.children);

// Array.from(article.children).forEach(child => {
//     child.classList.add('article-element');
// })

// PARENT RELATIONS
const title = document.querySelector('h2');
console.log(title.parentElement);
console.log(title.parentElement.parentElement);

// SIBLING RELATIONS
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);
 
// CHAINING
console.log(title.nextElementSibling.parentElement.children);