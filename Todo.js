// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     console.log('you clicked me');
// });

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//     item.addEventListener('click', e => {
        // console.log('item clicked');
        // console.log(e);
        // console.log(e.target);
        // console.log(item);
//         e.target.style.textDecoration = 'line-through';
        

//     });
// });

// ADDING AND REMOVIN ELEMENTS FROM THE DOM
// const ul = document.querySelector('ul');

// theres a remove method:
// ul.remove();

// const button = document.querySelector('button');

// button.addEventListener('click', () => {
    // Method 1
    // ul.innerHTML += '<li>something new</li>';

    // Method 2
    // const li = document.createElement('li');
    // li.textContent = 'something new to do';

    // add to the top
    // ul.prepend(li);

    // add to the bottom
    // ul.append(li);
// })

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//     item.addEventListener('click', e => {
        // e.target.style.textDecoration = 'line-through';
        // e.target.remove();
        // EVENT BUBBLING
        // to prevent event bubbling up to parent
//         e.stopPropagation();
//         console.log('event in li');
//     });
// });

// ul.addEventListener('click', e => {
    // console.log('event in ul');

    // EVENT DELEGATION
    // console.log(e.target);
    // if (e.target.tagName === 'LI') {
    //     e.target.remove();
//     }
// })

// MORE DOM EVENTS
// const copy = document.querySelector('.copy-me');

// copy.addEventListener('copy', () => {
//     console.log('OI! my content is copyright!');
// });

// const box = document.querySelector('.box');

// box.addEventListener('mousemove', e => {
    // console.log(e);
    // console.log(e.offsetX, e.offsetY);
//     box.textContent = `x pos - ${e.offsetX}  y pos - ${e.offsetY}`;
// });

// document.addEventListener('wheel', e => {
    // console.log(e);
//     console.log(e.pageX, e.pageY);
// });

// BUILDING A POPUP
