const textInputVal = document.querySelector("#validation-input");
console.log(textInputVal);

textInputVal.addEventListener("blur", () => {
  const value = textInputVal.value;

  if (value.length != textInputVal.dataset.length) {
    textInputVal.classList.remove("valid");
    textInputVal.classList.add("invalid");
  } else {
    textInputVal.classList.remove("invalid");
    textInputVal.classList.add("valid");
  }
  return value;
});
