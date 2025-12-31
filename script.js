const input = document.querySelector(".input-todo input");
const addBtn = document.querySelector(".input-todo button");
const list = document.querySelector(".todo-list");
const infoText = document.querySelector(".info-list span");
const clearAllBtn = document.querySelector(".info-list button");

function updateInfo() {
  const items = list.querySelectorAll("li");
  infoText.textContent = `شما ${items.length} تسک برای انجام دارید`;
}

function addTodo() {
  const value = input.value.trim();
  if (!value) return;

  const li = document.createElement("li");
  li.innerHTML = `
    ${value}
    <span class="icone">
      <i class="fa-solid fa-trash"></i>
    </span>
  `;

  list.appendChild(li);
  input.value = "";
  updateInfo();
}

addBtn.addEventListener("click", addTodo);

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") addTodo();
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash")) {
    e.target.closest("li").remove();
    updateInfo();
  }
});

clearAllBtn.addEventListener("click", () => {
  list.innerHTML = "";
  updateInfo();
});

updateInfo();
