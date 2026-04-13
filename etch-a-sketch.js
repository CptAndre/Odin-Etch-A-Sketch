const container = document.querySelector(".container");
const size = 16;

for (let i = 0; i < size * size; i++) {
  const cell = document.createElement("div");
  cell.classList.add("grid-block");
  container.appendChild(cell);
}