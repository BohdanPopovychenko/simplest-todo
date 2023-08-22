const button = document.querySelector(".input-container button");
const input = document.querySelector(".input-container input");
const list = document.querySelector(".todo-list");

button.addEventListener("click", () => {
  const li = document.createElement("li");
  const deleteBtn = document.createElement("button");
  li.className = "todo-list-item";
  deleteBtn.innerText = "Delete";
  li.innerText = input.value;
  list.appendChild(li);
  li.appendChild(deleteBtn);
  input.value = "";

  deleteBtn.addEventListener("click", () => {
    list.removeChild(li);
  });
});
