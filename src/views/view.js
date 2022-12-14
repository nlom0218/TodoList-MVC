import { $, $app } from "../utils/dom.js";

export default class View {
  constructor() {
    this.render();
  }
  render() {
    const template = `
        <form id="todo-form">
            <input 
                placeholder="투두를 입력하세요." 
                id="todo-input"
                autocomplete="off"
            />
            <button>등록하기</button>
        </form>
        <ul id="todo-list">
        </ul>
    `;
    $app.innerHTML = template;
  }

  static todoRender = (todos) => {
    const template = todos
      .map(({ todo, done }, index) => {
        return `<li data-todo-id=${index}>
            <span style="text-decoration: ${
              done && "line-through"
            }">${todo}</span>
            <button id="todo-done-btn">${done ? "완료함" : "완료"}</button>
            <button id="todo-delete-btn">삭제</button>
        </li>
        `;
      })
      .join("");
    $("todo-list").innerHTML = template;
  };
}
