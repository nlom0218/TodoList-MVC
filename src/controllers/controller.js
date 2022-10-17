import Todos from "../models/todos.js";
import FormView from "../views/FormView.js";
import TodoListView from "../views/TodoListView.js";

export default class Controller {
  constructor() {
    this.formView = new FormView();
    this.todoListView = new TodoListView();
    this.todos = new Todos();
    this.addEvent();
  }

  addTodo() {
    const todos = this.todos.addTodo();
    this.todoListView.addTodo(todos);
  }

  addEvent = () => {
    this.formView._form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.addTodo();
    });
  };
}
