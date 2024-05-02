const todoArea= document.getElementById('todos')
var checkboxes = document.querySelectorAll('input[type="checkbox"]');
const storedTodoJSON = localStorage.getItem('todos');
const storedTodoArray = JSON.parse(storedTodoJSON);
var todos=storedTodoArray && Array.isArray(storedTodoArray)?storedTodoArray:[]
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change',()=>{
        var label = checkbox.parentElement
        console.log(label);
        if (checkbox.checked) {
            label.classList.add("completed");
        } else {
            label.classList.remove("completed");
        }
    })
});
function completed(index){
    const checkbox=document.getElementById(`checkbox${index}`)
    const label=checkbox.parentElement
    // console.log(checkbox.checked,label);
    if (checkbox.checked) {
        label.classList.add("completed");
    } else {
        label.classList.remove("completed");
    }
    checkbox.classList.add()
}

function addTodo(){
    const todoInput=document.getElementById('todoInput')
    if(todoInput.value.trim()!==''){
        if(!todos.includes(todoInput.value.trim())){
            todos.push(todoInput.value.trim())
            var todoJSON = JSON.stringify(todos);
            localStorage.setItem('todos', todoJSON);
            renderTodos()
        }
        else{
            alert(`${todoInput.value.trim()} already added.Please try to add with another name`)
        }
    }
    
    todoInput.value=''
}
function renderTodos(){
    todoArea.innerHTML=''
    todos.map((todo, index) => 
    todoArea.innerHTML+=`
    <div key={${index}} class="todo">
        <label for="checkbox${index}" class="todoText"><input onchange="completed(${index})" type="checkbox" class="check" id="checkbox${index}">${todo}</label>
        <div onclick="deleteTodo(${index})">
            <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
            </svg>
        </div>
    </div>
    `)
}
function deleteTodo(index) {
    todos.splice(index,1)
    var todoJSON = JSON.stringify(todos);
    localStorage.setItem('todos', todoJSON);
    renderTodos()
}
renderTodos()
