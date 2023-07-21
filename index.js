
const doneTodo  = function(todoItem){
    const button = todoItem.querySelector(".done");
    button.addEventListener("click", () => {
        const text = todoItem.querySelector(".text");
        text.style.textDecoration = "line-through";
    })
}
const removeTodo  = function(todoItem){
    const button = todoItem.querySelector(".remove");
    button.addEventListener("click", () => {
        todoItem.remove();
    })
}
const hideTodo  = function(todoItem){
    const button = todoItem.querySelector(".remove");
    button.addEventListener("click", () => {
        todoItem.style.display = "none";
    })
}


const TodoList = document.querySelector(".todo-list");
const form = document.querySelectorAll(".form-todo input");

//events for existing todo
const todoitems = TodoList.getElementsByTagName("li");
// console.log(todoitems);
for(let todoItem of todoitems){
    doneTodo(todoItem);
    hideTodo(todoItem);
}
// doneTodo(TodoList.getElementsByTagName("li"))

//add new todo
const addtodo = function () {
    const ListItem = TodoList.querySelector(".listitem");
    const li = ListItem.cloneNode(true);
    li.childNodes[0].textContent = form[0].value;
    console.log(form[0].textContent);
    TodoList.append(li);
    form[0].value = "";
    //events for new todo
    doneTodo(li);
    removeTodo(li);
}
form[1].onclick = function (event) {
    event.preventDefault();
    addtodo();
}



