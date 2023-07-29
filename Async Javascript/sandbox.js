// showing what async js is
// console.log(1);
// console.log(2);

// setTimeout(() => {
//     console.log('callback function fired');
// }, 2000);

// console.log(3);
// console.log(4);


// Making HTTP requests
// const getTodos = (resource) => {
//     const request = new XMLHttpRequest();

//     return new Promise((resolve, reject) => {
        // readystatechange tracks the progress of the request
    //     request.addEventListener('readystatechange', () => {
    //         if (request.readyState === 4 && request.status === 200) {
    //             const data = JSON.parse(request.responseText)
    //             resolve(data);
    //         } else if(request.readyState === 4){
    //             reject('error getting resource')
    //         }
    //     });

    //     request.open('GET', resource);
    //     request.send();

    // })

// }

// chaining promises
// getTodos('todos/luigi.json').then(data => {
//     console.log('promise 1 resolved:', data);
//     return getTodos('todos/mario.json');
// }).then(data => {
//     console.log('promise 2 resolved:', data)
//     return getTodos('todos/shaun.json');
// }).then(data => {
//     console.log('promise 3 resolved:', data);
// }).catch(err => { // catches any error from either and displays where from
//     console.log('promise rejected:', err);
// })

// callback hell
// getTodos('todos/luigi.json', (err, data) => {
//         console.log(data);
//         getTodos('todos/mario.json', (err, data) => {
//             console.log(data);
//             getTodos('todos/shaun.json', (err, data) => {
//                 console.log(data);
//             });
//         });
// });

// promise example

// const getSomething = () => {

//     return new Promise((resolve, reject) => {
        // fetch something
        // resolve('some data'); // if its a success
        // reject('some error'); // if its an error
//     });

// }

// getSomething().then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// });

// getSomething().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err)
// })

// = Fetch API = //

// fetch('todos/luigi.json').then(response => {
//     console.log('resolved', response);
//     return response.json(); //returns a promise which is the data in the JSON
// }).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log('rejected', err);
// });

// async & await
const getTodos = async () => { //an async func always returns a promise 

    const response = await fetch('todos/luigi.json');
    if (response.status !== 200) {
        throw new Error('cannot fetch the data');
    }

    const data = await response.json();
    return data;

}

getTodos()
    .then(data => console.log('resolved:', data ))
    .catch(err => console.log('rejected:', err.message));
