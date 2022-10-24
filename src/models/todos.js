import { $ } from "../utils/dom.js";
import {
  getLocalStorageTodos,
  setLocalStorageTodos,
} from "../utils/localStroage.js";

export default class Todos {
  constructor() {
    this.todos = [];
    this.init();
  }

  addTodo = () => {
    const todo = $("todo-input").value;
    $("todo-input").value = "";
    this.todos.push({ todo, done: false });
    setLocalStorageTodos(this.todos);
  };

  toggleTodo = (todoId) => {
    const isDone = this.todos[todoId].done;
    this.todos[todoId].done = isDone ? false : true;
    setLocalStorageTodos(this.todos);
  };

  deleteTodo = (todoId) => {
    this.todos.splice(todoId, 1);
    setLocalStorageTodos(this.todos);
  };

  init = () => {
    const localTodos = getLocalStorageTodos();
    if (localTodos) {
      this.todos = localTodos;
      return;
    } else {
      localStorage.setItem("todos", JSON.stringify([]));
    }
  };
}
