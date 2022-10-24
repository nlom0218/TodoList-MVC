import Todos from "../models/todos.js";
import { $ } from "../utils/dom.js";
import View from "../views/view.js";

export default class Controller {
  constructor() {
    this.todosModel = new Todos();
    this.view = new View();
    View.todoRender(this.todosModel.todos);
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

  deleteTodo = (todoId) => {
    this.todosModel.deleteTodo(todoId);
    View.todoRender(this.todosModel.todos);
  };

  eventHandler = () => {
    $("todo-form").addEventListener("submit", (e) => {
      e.preventDefault();
      this.addTodo();
    });

    $("todo-list").addEventListener("click", ({ target }) => {
      const { id } = target;
      const { todoId } = target.closest("li").dataset;
      if (id === "todo-done-btn") {
        this.toggleTodo(todoId);
        return;
      }
      if (id === "todo-delete-btn") {
        this.deleteTodo(todoId);
        return;
      }
    });
  };
}
