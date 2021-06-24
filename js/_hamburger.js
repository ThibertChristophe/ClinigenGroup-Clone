const hamburgerButton = document.querySelector(".hamburger > button");
const hamburger_menu = document.querySelector(".hamburger_menu");

const hamburger_menu_link_shortage = document.querySelector(
  ".hamburger_menu_link_shortage"
);

const hamburger_sousMenu = document.querySelector(".hamburger_sousMenu");

/**
 * Affiche / retire le menu lors du click sur le menu hamburger
 */
hamburgerButton.addEventListener("click", () => {
  hamburger_menu.classList.toggle("show");
});

/**
 * Sous menu
 */
hamburger_menu_link_shortage.addEventListener("click", () => {
  console.log(hamburger_sousMenu.classList);
  hamburger_sousMenu.classList.toggle("show");
});
