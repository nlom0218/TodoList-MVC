import { $app } from "../utils/dom.js";

export default class TodoListView {
  constructor() {
    this.init();
  }

  init = () => {
    const $ul = document.createElement("ul");
    $ul.classList.add("todo-list");
    $app.appendChild($ul);
  };

  addTodo = (todos) => {
    const $li = document.createElement("li");
    const $todoList = document.querySelector(".todo-list");
    $li.id = todos.length;
    $li.style.color = "black";
    $li.textContent = todos[todos.length - 1].todo;
    $todoList.appendChild($li);
  };
}
