// SUBMIT EVENTS
// const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');

// form.addEventListener('submit', e => {
//     e.preventDefault();
    // Method 1
    // console.log(username.value);

    // Method 2 (only works with ID or Name)
//     console.log(form.username.value)
// });

// TESTING REGEX
// const username = 'deAndre';
// const pattern = /^[a-zA-Z]{6,}$/

// let result = pattern.test(username);
// console.log(result);

// if (result) {
//     console.log('regex test passed :)');
// } else {
//     console.log('regex test failed :(');
// }

// let result = username.search(pattern);
// console.log(result);

// BASIC FORM VALIDATION
const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e => {
    e.preventDefault();
    
    // validation
    const username = form.username.value;

    if(usernamePattern.test(username)){
        // feedback good info
        feedback.textContent = 'that username is valid';
    } else {
        // feedback help info
        feedback.textContent = 'Username must contain only letters and must be 6-12 characters long';
    }
});

// KEYBOARD EVENTS
// LIVE FEEDBACK
form.username.addEventListener('keyup', e => {
    // console.log(e.target.value, form.username.value);
    if(usernamePattern.test(e.target.value)){
        // console.log('passed');
        form.username.setAttribute('class', 'success');
    } else{
        // console.log('failed');
        form.username.setAttribute('class', 'error');
    }
});