const hamburgerButton = document.querySelector(".hamburger > button");
const hamburgerButtonIMG = document.querySelector(".hamburger > button > img");
const hamburger_menu = document.querySelector(".hamburger_menu");

// Sous menu
const hamburger_menu_link_shortage = document.querySelector(
  ".hamburger_menu_link_shortage"
);

const hamburger_sousMenu_shortages = document.querySelector(
  ".hamburger_sousMenu_shortages"
);

const hamburger_menu_link_help = document.querySelector(
  ".hamburger_menu_link_help"
);

const hamburger_sousMenu_help = document.querySelector(
  ".hamburger_sousMenu_help"
);

const hamburger_menu_link_about = document.querySelector(
  ".hamburger_menu_link_about"
);

const hamburger_sousMenu_about = document.querySelector(
  ".hamburger_sousMenu_about"
);

/**
 * Affiche / retire le menu lors du click sur le menu hamburger
 */
hamburgerButton.addEventListener("click", () => {
  hamburger_menu.classList.toggle("show");
  // Switch entre les 2 images de l'hamburger ( croix et hamburger)
  if (hamburger_menu.classList.contains("show")) {
    hamburgerButtonIMG.src = "/public/img/closeHamb.svg";
  } else {
    hamburgerButtonIMG.src = "/public/img/download.svg";
  }
});

/**
 * Sous menu
 */
hamburger_menu_link_shortage.addEventListener("click", () => {
  hamburger_sousMenu_shortages.classList.toggle("show");
});
hamburger_menu_link_help.addEventListener("click", () => {
  hamburger_sousMenu_help.classList.toggle("show");
});
hamburger_menu_link_about.addEventListener("click", () => {
  hamburger_sousMenu_about.classList.toggle("show");
});
