const container = document.querySelector(".container");

for (i = 0; i < 256; i++) {
  const gridItem = document.createElement("div");
  gridItem.classList.toggle("grid-item");
  gridItem.textContent = "test"
  container.appendChild(gridItem);
}


const button = document.createElement("button");
button.classList.toggle("button");
button.textContent = "Redo";
container.insertAdjacentElement("beforebegin", button);



// change color of grid item on hover
const hoverItem = document.querySelectorAll(".grid-item");

hoverItem.forEach((item) => {
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

// function to create new grid
const createNewGrid = () => {
  const gridSize = prompt("Enter the new grid size");
  const totalCells = gridSize * gridSize;

  const oldGridItems = document.querySelectorAll(".grid-item");
  oldGridItems.forEach((item) => {
    item.remove()
  })

  for (i = 0; i < totalCells; i++) {
    if (gridSize > 100) {
      throw new Error (
        alert("size must be less than 100")
      )
      return;
    }
    newGridItem = document.createElement("div");
    newGridItem.classList.toggle("grid-item")
    newGridItem.textContent = "test"

    container.appendChild(newGridItem);
  }

  const newHoverItem = document.querySelectorAll(".grid-item")

  newHoverItem.forEach(item => {
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
  })
  })
};

button.addEventListener("click", createNewGrid);