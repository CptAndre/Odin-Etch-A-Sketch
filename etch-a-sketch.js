const container = document.querySelector(".container");
const sizeInput = document.getElementById("text-input");
const submitButton = document.getElementById("grid-definer");

function createGrid(size) {
  container.innerHTML = "";

  const cellSize = 100 / size;

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-block");
    cell.style.width = `${cellSize}%`;
    cell.style.height = `${cellSize}%`;
    cell.addEventListener("mouseenter", () => {
    cell.style.backgroundColor = "gray";
    });
    container.appendChild(cell);
  }
}

submitButton.addEventListener("click", () => {
  const size = Number.parseInt(sizeInput.value, 10);

  if (Number.isNaN(size)) {
    alert("Please enter a number.");
    return;
  }

  if (size < 2 || size > 100) {
    alert("Please enter a number between 2 and 100.");
    return;
  }

  createGrid(size);
});

createGrid(16);