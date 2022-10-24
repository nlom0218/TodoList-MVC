import { $ } from "../utils/dom.js";

export default class Todos {
  constructor() {
    this.todos = [];
    this.init();
  }

  addTodo = () => {
    const todo = $("todo-input").value;
    $("todo-input").value = "";
    this.todos.push({ todo, done: false });
    localStorage.setItem("todos", JSON.stringify(this.todos));
  };

  toggleTodo = (todoId) => {
    const isDone = this.todos[todoId].done;
    this.todos[todoId].done = isDone ? false : true;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  };

  deleteTodo = (todoId) => {
    this.todos.splice(todoId, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  };

  init = () => {
    const todoList = JSON.parse(localStorage.getItem("todos"));
    if (todoList) {
      this.todos = todoList;
      return;
    } else {
      localStorage.setItem("todos", JSON.stringify([]));
    }
  };
}
