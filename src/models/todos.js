import { $ } from "../utils/dom.js";

export default class Todos {
  constructor() {
    this.todos = [];
  }

  static addTodo = (todos) => {
    const todo = $("todo-input").value;
    $("todo-input").value = "";
    todos.push({ todo, done: false });
    return todos;
  };
}
