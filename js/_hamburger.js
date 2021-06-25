const main = document.querySelector("main");
const hamburgerButton = document.querySelector(".hamburger > button");
const hamburgerButtonIMG = document.querySelector(".hamburger > button > img");
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
  // Switch entre les 2 images de l'hamburger ( croix et hamburger)
  if (hamburger_menu.classList.contains("show")) {
    hamburgerButtonIMG.src = "/img/closeHamb.svg";
  } else {
    hamburgerButtonIMG.src = "/img/download.svg";
  }
});

/**
 * Sous menu
 */
hamburger_menu_link_shortage.addEventListener("click", () => {
  console.log(hamburger_sousMenu.classList);
  hamburger_sousMenu.classList.toggle("show");
});
