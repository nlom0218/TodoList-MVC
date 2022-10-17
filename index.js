const $app = document.getElementById("app");

const $form = document.createElement("form");
const $input = document.createElement("input");
const $button = document.createElement("button");
$input.placeholder = "투두를 입력하세요.";
$button.textContent = "등록하기";

$form.appendChild($input);
$form.appendChild($button);
$app.appendChild($form);

function App() {
  let todos = [];

  const addTodoView = (todo) => {
    if (!document.querySelector(".todo-list")) {
      const $ul = document.createElement("ul");
      $ul.classList.add("todo-list");
      $app.appendChild($ul);
    }
    const $todoList = document.querySelector(".todo-list");
    const $li = document.createElement("li");
    $li.id = todos.length;
    $li.style.color = "black";
    $li.textContent = todo;
    $todoList.appendChild($li);
  };

  const addTodo = () => {
    const todo = $input.value;
    todos.push({ todo, done: false });
    $input.value = "";
    addTodoView(todo);
  };
  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTodo();
  });
}

new App();
