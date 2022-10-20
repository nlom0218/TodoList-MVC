import Todos from "../models/todos.js";
import { $ } from "../utils/dom.js";
import View from "../views/view.js";

export default class Controller {
  constructor() {
    this.todosModel = new Todos();
    this.view = new View();
    this.eventHandler();
  }

  addTodo = () => {
    this.todosModel.addTodo();
    View.todoRender(this.todosModel.todos);
  };

  toggleTodo = (todoId) => {
    this.todosModel.toggleTodo(todoId);
    View.todoRender(this.todosModel.todos);
  };

  eventHandler = () => {
    $("todo-form").addEventListener("submit", (e) => {
      e.preventDefault();
      this.addTodo();
    });
    $("todo-list").addEventListener("click", (e) => {
      const {
        parentNode: {
          dataset: { todoId },
        },
      } = e.target;
      this.toggleTodo(todoId);
    });
  };
}
