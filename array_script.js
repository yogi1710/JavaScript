const todoList =  [];
const todoList1 = [];
const todoList2 = [];

renderTodoList();

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    todoList.push(name);
    console.log(todoList);

    inputElement.value = '';
}


function renderTodoList(){
    let todoListHTML = '';

    for(let i = 0; i<todoList1.length; i++){
        const todo = todoList1[i];
        const html = `<p>${todo}</p>`;
        todoListHTML += html;
    }
    
    console.log(todoListHTML);
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;    
}

function addTodoLoop(){
    const inputElement = document.querySelector('.js-input-loop');
    const name = inputElement.value;
    todoList1.push(name);

    console.log(todoList1);
    inputElement.value = '';

    renderTodoList();
    
}

function addTodoCalender(){
    const inputElement = document.querySelector('.js-input-calender');
    const inputDate = document.querySelector('.js-input-date');
    const name = inputElement.value;
    const date = inputDate.value;
    todoList2.push({name : name, 
        dueDate : date});

    // console.log(todoList2);
    inputElement.value = '';

    renderTodoCalender();
    
}

function renderTodoCalender(){
    let todoListHTML = '';

    for(let i = 0; i<todoList2.length; i++){
        const todoObject = todoList2[i];
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick="
                todoList2.splice(${i}, 1);
                renderTodoCalender();
            " class="delete-todo-button">Delete</button>
            `;
        todoListHTML += html;
    }
    
    // console.log(todoListHTML);
    document.querySelector('.js-todo-calender').innerHTML = todoListHTML;    
}