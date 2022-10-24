export const getLocalStorageTodos = () => {
  return JSON.parse(localStorage.getItem("todos"));
};

export const setLocalStorageTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
