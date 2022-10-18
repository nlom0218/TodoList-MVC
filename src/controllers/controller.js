import Todos from "../models/todos.js";
import { $, $app } from "../utils/dom.js";
import View from "../views/view.js";

export default class Controller {
  constructor() {
    this.todos = new Todos();
    this.view = new View($app);
    this.eventHandler();
  }

  addTodo = () => {
    const newTodos = Todos.addTodo(this.todos.todos);
    View.todoRender(newTodos);
  };

  eventHandler = () => {
    $("todo-form").addEventListener("submit", (e) => {
      e.preventDefault();
      this.addTodo();
    });
  };
}
