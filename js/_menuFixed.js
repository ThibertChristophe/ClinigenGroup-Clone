const menu = document.querySelector(".search");

let menu_coord = menu.getBoundingClientRect();

/**
 * Detecte quand on doit decrocher et fixer le menu search
 *  lors du scroll de la page
 */
window.addEventListener("scroll", () => {
  menu_coord = menu.getBoundingClientRect().top;
  const { scrollTop } = document.documentElement;
  if (menu_coord <= -25) {
    menu.classList.add("search-fixed");
  }
  if (scrollTop <= 25) {
    menu.classList.remove("search-fixed");
  }
});
