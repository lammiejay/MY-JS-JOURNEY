const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
    `;

    list.innerHTML += html;
} 

addForm.addEventListener('submit', e => {
    e.preventDefault();
    // .trim() removes whitespace before or after the actual text in an input field
    const todo = addForm.add.value.trim();

    // this ensures that the todo actually has content
    if (todo.length) {
        generateTemplate(todo);
        // clears the input field after submitting
        addForm.reset();
    }

});

// delete todos
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});