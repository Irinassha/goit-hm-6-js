const bodyColor = document.querySelector("body");

const btnChange = document.querySelector("button");

const spanColor = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnChange.addEventListener("click", () => {
  const colors = getRandomHexColor();
  bodyColor.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = colors;
});
