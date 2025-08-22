
let todos = [];

function Send (){
    let todoInput = document.getElementById ("tInput");
    let todoText = todoInput.value.trim();
    if(todoText) {
        todos.push(todoText);
        todoInput.value = "";
        rendered();
    }   
}

function rendered() {
    let todolist = document.getElementById("todoList")
    todolist.innerHTML="";
    todos.forEach ((item , index) => {
    let todoItem = document.createElement("div");
    todoItem.classList.add("todoItem");
    todoItem.innerHTML = `
    <div class="box">
             <div class="card1">
              <input class="checkbox" type="checkbox">
              <label>${item}</label>
            </div>
            <div class="card2">
               <img onclick="editTodo(${index})" src="./pencil.svg" alt="">
               <img onclick="deleteTodo(${index})" src="./trash-svgrepo-com 1.svg" alt="">
            </div>
            </div>`;

    todolist.appendChild(todoItem);
   })
}

function deleteTodo(index) {
 todos.splice(index, 1);
  rendered();
}

function editTodo(index) {
 let newValue = prompt("Tahrirlang", todos[index]);
 if(newValue !== null){
    todos[index] = newValue.trim();
    rendered();
 }
}

function Clear(){
 if(todos.length === 0){
    alert("Hech narsa topilmadi")
 }
 else{
    alert("Barchxabarlar ochiriladi")
    todos = []
    rendered()
 }

}
