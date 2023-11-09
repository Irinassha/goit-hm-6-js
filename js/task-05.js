const inputTextUser = document.querySelector("#name-input");
const spanUserInp = document.querySelector("#name-output");

// inputTextUser.addEventListener('focus', () => {
//     console.log("focus");

//     inputTextUser.style.outlineColor = "transparent";
//     inputTextUser.style.outlineOffset = "2px";
//     inputTextUser.style.borderColor = "teal";
// });

// inputTextUser.addEventListener('blur', () => {
//     console.log('blur');
// });

// inputTextUser.addEventListener('change', () => {
// console.log('chande')
// });

inputTextUser.addEventListener("input", () => {
  const value = inputTextUser.value;

  if (value === "") {
    spanUserInp.textContent = "Anonymous";
    return;
  }
  spanUserInp.textContent = `${value}`;
});
