import { $ } from "../utils/dom.js";

export default class Todos {
  constructor() {
    this.todos = [];
  }

  addTodo = () => {
    const todo = $("todo-input").value;
    $("todo-input").value = "";
    this.todos.push({ todo, done: false });
  };

  toggleTodo = (todoId) => {
    this.todos[todoId].done = true;
  };

  deleteTodo = (todoId) => {
    this.todos.splice(todoId, 1);
  };
}
