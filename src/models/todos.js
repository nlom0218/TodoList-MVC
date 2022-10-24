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
  };

  toggleTodo = (todoId) => {
    const isDone = this.todos[todoId].done;
    this.todos[todoId].done = isDone ? false : true;
  };

  deleteTodo = (todoId) => {
    this.todos.splice(todoId, 1);
  };

  init = () => {
    const todoList = localStorage.getItem("todos");
    if (todoList) {
      this.todos = todoList;
      return;
    } else {
      localStorage.setItem("todos", JSON.stringify([]));
    }
  };
}
