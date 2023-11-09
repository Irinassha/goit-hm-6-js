const inputSizeControl = document.querySelector("#font-size-control");

const spanInputText = document.querySelector("#text");

inputSizeControl.addEventListener("input", handleInputRange);

function handleInputRange(event) {
  spanInputText.style.fontSize = event.currentTarget.value + "px";
}
