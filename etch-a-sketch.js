const container = document.querySelector(".container");
const sizeInput = document.getElementById("text-input");
const submitButton = document.getElementById("grid-definer");
const randomizerButton = document.getElementById("randomizer-toggle");

let randomMode = false;

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

randomizerButton.addEventListener("click", () => {
  randomMode = !randomMode;
  randomizerButton.textContent = randomMode ? "Randomizer ON" : " Randomizer OFF";
});

function createGrid(size) {
  container.innerHTML = "";

  const cellSize = 100 / size;

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-block");
    cell.style.width = `${cellSize}%`;
    cell.style.height = `${cellSize}%`;
    cell.addEventListener("mouseenter", () => {
      const color = randomMode ? getRandomColor() : "gray";
      cell.style.backgroundColor = color;
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