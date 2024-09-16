const container = document.querySelector(".container");

// create button for resetting grid
const buttonDiv = document.createElement("div");
buttonDiv.classList.toggle("button-div");
container.insertAdjacentElement("beforebegin", buttonDiv);

const header = document.createElement("h1");
header.classList.toggle("header");
header.textContent = "Etch-a-Sketch";
buttonDiv.insertAdjacentElement("beforebegin", header);

const button = document.createElement("button");
button.classList.toggle("button");
button.textContent = "New Grid";
buttonDiv.appendChild(button);

//create initial grid
let gridSize = 16;

for (i = 0; i < gridSize * gridSize; i++) {
  const gridItem = document.createElement("div");
  gridItem.classList.toggle("grid-item");
  // gridItem.textContent = "x";
  gridItem.style.height = `${600 / gridSize}px`;
  gridItem.style.width = `${600 / gridSize}px`;
  gridItem.style.flexBasis = `calc(100% / ${gridSize})`;

  container.appendChild(gridItem);
}

// change color of grid item on hover
const hoverItem = document.querySelectorAll(".grid-item");

hoverItem.forEach((item) => {
  let isColored = false;

  item.addEventListener("mouseover", () => {
    if (!isColored) {
      item.style.backgroundColor = "#d8acdd";
      isColored = true;
    } else {
      item.style.backgroundColor = "";
      isColored = false;
    }
  });
});

// function to create new grid
const createNewGrid = () => {
  let getNewGridSize = Number(prompt("Enter the new grid size"));

  const oldGridItems = document.querySelectorAll(".grid-item");
  oldGridItems.forEach((item) => {
    item.remove();
  });

  for (i = 0; i < getNewGridSize * getNewGridSize; i++) {
    if (getNewGridSize > 100 || getNewGridSize <= 0) {
      throw new Error(alert("size must be less than 100"));
    }
    newGridItem = document.createElement("div");
    newGridItem.classList.toggle("grid-item");
    newGridItem.style.height = `${600 / getNewGridSize}px`;
    newGridItem.style.width = `${600 / getNewGridSize}px`;
    // newGridItem.textContent = "X";

    container.appendChild(newGridItem);
  }

  const newHoverItem = document.querySelectorAll(".grid-item");

  newHoverItem.forEach((item) => {
    let isColored = false;

    item.addEventListener("mouseover", () => {
      if (!isColored) {
        item.style.backgroundColor = "#aa83c5";
        item.style.color = "#ffebcd";
        isColored = true;
      } else {
        item.style.backgroundColor = "";
        item.style.color = "";
        isColored = false;
      }
    });
  });
};

button.addEventListener("click", createNewGrid);
