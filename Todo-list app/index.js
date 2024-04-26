const addBtn = document.getElementById("addBtn");
const textBox = document.getElementById("text");
const todoListContainer = document.getElementById("todo-list");
const counterSpanElem = document.getElementById("counter");
const horizontalRule = document.querySelector("hr");

let textInput = "";
let counter = 0;

addBtn.addEventListener("click", () => {
    textInput = textBox.value;
    if(textInput == "") {
        alert("Cannot add an empty task to To-do List");
    }
    else
        add_To_TodoList(textInput);
        // Clear the text box after click event is fired
        textBox.value = "";
});

textBox.addEventListener("keyup", (e) => {
    textInput = textBox.value;
    if(e.key == "Enter") {
        if(textInput == "") {
            alert("Cannot add an empty task to To-do List");
        }
        else
            add_To_TodoList(textInput);
        // Clear the text box after Enter key event is fired
        textBox.value = "";
    }
});

function updateCounter() {
    if(counter != 0) {
        horizontalRule.hidden = false;
    } else horizontalRule.hidden = true;
    counterSpanElem.innerHTML = "<i><b>Task</b></i> Items: " + counter;
}

function deleteListItem(ListItem) {
    ListItem.remove();
    counter -= 1;
    updateCounter();
}

function add_To_TodoList(textInput) {
    const deleteBtn = createButton("Delete");
    const ListItem = createListItem(textInput);  // Returns an HTMLElement:List

    deleteBtn.addEventListener("click", () => deleteListItem(ListItem));

    ListItem.appendChild(deleteBtn);
    todoListContainer.append(ListItem);

    counter += 1;
    updateCounter();
}

function createListItem(textInput) {
    const listElem = document.createElement("li");
    listElem.innerHTML = textInput;
    return listElem;
}

function createButton(text) {
    const btn = document.createElement("button");
    btn.innerHTML = text;
    return btn;
}