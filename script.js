const toDoList = document.getElementById("toDoList");
const toDoInput = document.getElementById("toDoInput");



function addToDoItem() {
    let listItem = toDoInput.value;
    let li = document.createElement('li');
    li.setAttribute('class', 'toDoItem');
    li.innerHTML = listItem + '<input type="button" value="done" onclick="finishToDo()">';
    toDoList.appendChild(li);
};

function finishToDo() {
    console.log(toDoList);
    
}