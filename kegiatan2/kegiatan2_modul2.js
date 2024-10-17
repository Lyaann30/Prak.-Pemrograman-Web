const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

function addTodo() {
    const todoText = todoInput.value;

    if (todoText === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li');

    const input = document.createElement('input');
    input.type = 'text';
    input.value = todoText;
    input.disabled = true;
    input.classList.add('todo-text');

    // Membuat tombol edit dengan ikon
    const editButton = document.createElement('button');
    editButton.classList.add('edit-button');
    editButton.innerHTML = '<i class="fas fa-edit"></i>';  // Ikon edit
    editButton.onclick = () => editTodo(input, editButton);

    // Membuat tombol delete dengan ikon
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';  // Ikon delete
    deleteButton.onclick = () => deleteTodo(li);

    li.appendChild(input);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    todoList.appendChild(li);

    todoInput.value = '';
}

function editTodo(input, button) {
    if (input.disabled) {
        input.disabled = false;
        button.textContent = 'Save';
        input.focus();
    } else {
        input.disabled = true;
        button.textContent = 'Edit';
    }
}

function deleteTodo(li) {
    todoList.removeChild(li);
}