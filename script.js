
//Global Variables
const toDoList = document.getElementById("toDoList");
const toDoInput = document.getElementById("toDoInput");

//Hit enter Key to input item
toDoInput.addEventListener('keydown', function(){
    if (event.key == "Enter") {
        addToDoItem();
    }
})
//Select text input value and add to list
function addToDoItem() {
    let listItem = toDoInput.value;
    let li = document.createElement('li');
    li.setAttribute('class', 'toDoItem');
    li.setAttribute('onclick', 'finishToDo()');
    li.innerHTML = listItem;
    toDoList.appendChild(li);
    toDoInput.value = "";
};
//remove selected item
function finishToDo() {
    event.target.remove(this);
}