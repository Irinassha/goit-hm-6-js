const form = document.querySelector(".login-form");
const inputs = document.querySelectorAll("input");
const sabmitForm = document.querySelector("button");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  console.log(`email: ${email.value}`, `password: ${password.value}`);

  form.reset();
});

inputs.forEach((input) => {
    sabmitForm.addEventListener("click", () => {
        // const value = input.value;
        if (input.value === "") {
            alert("Всі поля мають бути заповненні!");
            return;
        }
    });
    return;
});
