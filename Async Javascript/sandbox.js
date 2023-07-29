// showing what async js is
// console.log(1);
// console.log(2);

// setTimeout(() => {
//     console.log('callback function fired');
// }, 2000);

// console.log(3);
// console.log(4);


// Making HTTP requests
const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    // readystatechange tracks the progress of the request
    request.addEventListener('readystatechange', () => {
        // console.log(request, request.readyState);
        if (request.readyState === 4 && request.status === 200) {
            // console.log(request, request.responseText);
            const data = JSON.parse(request.responseText)
            callback(undefined, data);
        } else if(request.readyState === 4){
            // console.log("could not fetch the data");
            callback('could not fetch data', undefined);
        }
    });

    request.open('GET', 'todos.json');
    request.send();
}

getTodos((err, data) => {
    console.log('callback fired');
    if (err) {
        console.log(err);
    } else{
        console.log(data);
    }
});
