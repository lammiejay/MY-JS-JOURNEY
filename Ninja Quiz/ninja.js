const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const finalScore = document.querySelector('span');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // check answers
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });

    // show result on page

    // scrolls to top when submit is clicked to show result
    scrollTo(0, 0);
    result.classList.remove('d-none');
    // finalScore.textContent = `${score}%`;
    // OR
    // result.querySelector('span').textContent = `${score}`;

    let output = 0;
    const timer = setInterval(() => {
        finalScore.textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10)

});

// window object (global object)
// console.log('hello'); is the same as Window.console.log('hello');

// setTimeout(() => {
    // alerts hello there after 3000ms == 3seconds
//     alert('hello there!');
// }, 3000); 

// let i = 0;
// const timer = setInterval(() => {
//     console.log('hello');
//     i++;
//     if(i === 5) {
//         clearInterval(timer);
//     }
// }, 1000);