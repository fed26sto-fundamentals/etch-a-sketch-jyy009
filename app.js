const container = document.querySelector(".container");

for (i = 0; i < 256; i++) {
  const gridItem = document.createElement("div");
  gridItem.classList.toggle("grid-item");
  gridItem.textContent = "test";
  container.appendChild(gridItem);
}

const button = document.createElement("button");
button.classList.toggle("button");
button.textContent = "Redo"
container.insertAdjacentElement("beforebegin", button)

// change color of grid item on hover
const hoverItem = document.querySelectorAll(".grid-item");

// hoverItem.forEach((item) => {
//   let isColored = false;

//   item.addEventListener("mouseover", () => {
//     if (!isColored) {
//       item.style.backgroundColor = "#aa83c5";
//       item.style.color = "#ffebcd";
//       isColored = true;
//     }
//     if (isColored) {
//       item.addEventListener("mouseout", () => {
//         item.style.backgroundColor = "";
//         item.style.color = "";
//         isColored = false;
//       });

//     }
//     })
//   })

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
