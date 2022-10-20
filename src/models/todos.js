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
    const isDone = this.todos[todoId].done;
    this.todos[todoId].done = isDone ? false : true;
  };

  deleteTodo = (todoId) => {
    this.todos.splice(todoId, 1);
  };
}
