import { $app, $input, $todoList } from "../utils/dom.js";

export default class Todos {
  constructor() {
    this.todos = [];
  }
  addTodo = () => {
    const $input = document.querySelector("input");
    const todo = $input.value;
    this.todos.push({ todo, done: false });
    $input.value = "";
    return this.todos;
  };
}
