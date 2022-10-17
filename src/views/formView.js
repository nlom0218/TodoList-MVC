import { $app } from "../utils/dom.js";

export default class FormView {
  constructor() {
    this._form = null;
    this.init();
  }
  init = () => {
    const $form = document.createElement("form");
    const $input = document.createElement("input");
    const $button = document.createElement("button");
    $input.placeholder = "투두를 입력하세요.";
    $button.textContent = "등록하기";
    $form.appendChild($input);
    $form.appendChild($button);
    $app.appendChild($form);
    this._form = $form;
  };
}
