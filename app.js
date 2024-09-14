const container = document.querySelector(".container");

for (i = 0; i < 256; i++) {
  const gridItem = document.createElement("div");
  gridItem.classList.toggle("grid-item");
  gridItem.textContent = "test";
  container.appendChild(gridItem);
}

// change color of grid item on hover
const hoverItem = document.querySelectorAll(".grid-item");

hoverItem.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.backgroundColor = "#aa83c5";
    item.style.color = "#ffebcd";
  });
});

hoverItem.forEach((item) => {
  item.addEventListener("mouseout", () => {
    item.style.backgroundColor = "";
    item.style.color = "";
  });
});
