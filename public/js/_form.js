/**
 * On va vérifier si les input sont vide
 */

const btn_submit = document.querySelector(".btn_vert");
const listInput = document.querySelectorAll(".form_card > input");

// On va vérifier les input
btn_submit.addEventListener("click", () => {
  listInput.forEach((input) => {
    const label_cache = input.parentNode.querySelector(".mustBeFill");
    if (input.value === "") {
      input.style.border = "1px solid red";
      label_cache.style.display = "block";
    } else {
      input.style.border = "1px solid rgb(221, 221, 221)";
      label_cache.style.display = "none";
    }
  });
});
