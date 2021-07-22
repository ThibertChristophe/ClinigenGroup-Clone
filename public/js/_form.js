/**
 * On va vérifier si les input sont vide
 */

const btn_submit = document.querySelector(".btn_vert");
const listInput = document.querySelectorAll(".form_card > input");

// On va vérifier les input
btn_submit.addEventListener("click", () => {
  listInput.forEach((input) => {
    if (input.value === "") {
      input.style.border = "1px solid red";
    }
  });
});
