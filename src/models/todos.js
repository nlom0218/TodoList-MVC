import { $ } from "../utils/dom.js";

export default class Todos {
  constructor() {
    this.todos = [];
  }

  addTodo = () => {
    const todo = $("todo-input").value;
    $("todo-input").value = "";
    this.todos.push({ todo, done: false });
    return this.todos;
  };
}
