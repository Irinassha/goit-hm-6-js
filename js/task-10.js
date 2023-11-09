function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = {
  amountEl: document.querySelector("#controls input"),
  createEl: document.querySelector("button[data-create]"),
  destroyEl: document.querySelector("button[data-destroy]"),
  boxesEl: document.querySelector("#boxes"),
};
console.log(controls.amountEl);

function createBoxes(amount) {
  for (var i = 0; i < amount; i++) {
    const elem = document.createElement("div");

    elem.style.width = 30 + 10 * i + "px";
    elem.style.height = 30 + 10 * i + "px";
    elem.style.backgroundColor = getRandomHexColor();

    controls.boxesEl.append(elem);
  }
}

controls.createEl.addEventListener("click", function () {
  const amount = controls.amountEl.value;
  if (amount > 0) {
    createBoxes(amount);
  }
});

controls.destroyEl.addEventListener("click", function () {
  controls.boxesEl.innerHTML = "";
});
