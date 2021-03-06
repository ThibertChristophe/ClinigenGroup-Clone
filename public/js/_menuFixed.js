const menu = document.querySelector(".search");
const blurDiv = document.querySelector(".blur");
const searchSignIn = document.querySelector(".searchSignIn");

let menu_coord = menu.getBoundingClientRect();

/**
 * Detecte quand on doit decrocher et fixer le menu search
 *  lors du scroll de la page
 */
window.addEventListener("scroll", () => {
  menu_coord = menu.getBoundingClientRect().top;
  const { scrollTop } = document.documentElement;
  // On accroche le menu
  if (menu_coord <= -25) {
    menu.classList.add("search-fixed");
    hamburger_menu.style.position = "fixed";
    hamburger_menu.style.top = "65px";
    hamburger_menu.style.left = "50%";
    hamburger_menu.style.transform = "translateX(-50%)";
  }
  // On le decroche
  if (scrollTop <= 25) {
    menu.classList.remove("search-fixed");
    hamburger_menu.style.position = "relative";
    hamburger_menu.style.top = "0";
    hamburger_menu.style.left = "0";
    hamburger_menu.style.transform = "none";
  }
  // fait apparaitre le fond blanc transparent qui est en dessous du menu hamburger
  if (menu.classList.contains("search-fixed")) {
    blurDiv.classList.add("show");
    searchSignIn.style.visibility = "visible";
  } else {
    blurDiv.classList.remove("show");
    searchSignIn.style.visibility = "hidden";
  }
});
