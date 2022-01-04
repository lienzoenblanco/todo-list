let globalTodos = [];

function printTodos() {
  const ul = document.querySelector(".todo-list");
  let content = `<li><input id="data" type="text" placeholder="What needs to be done?" onkeyup="todoInputPressed(event)" /></li>`;
  globalTodos.forEach(function(item, position) {
    content =
      content +
      `<li>${item}<button class="button-remove" onClick='remove(${position})'>🗑</button></li>`;
  });
  ul.innerHTML = content;
  const inputData = document.querySelector("#data");
  inputData.focus();
}

function addOneTodo(label) {
  if (label.trim().length !== 0) {
    globalTodos.push(label);
  }
  printTodos();
}

function todoInputPressed(event) {
  if (event.keyCode != 13) {
    return;
  }
  addOneTodo(event.target.value);
}

function remove(position) {
  globalTodos = globalTodos.filter(function(item, index) {
    return index != position;
  });
  printTodos();
}

window.addOneTodo = addOneTodo;
window.todoInputPressed = todoInputPressed;
window.remove = remove;
printTodos();
