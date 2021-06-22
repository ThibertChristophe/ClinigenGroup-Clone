const menuShort = document.querySelector(".short");
const sousMenu_short = document.querySelector(".shortages");
sousMenu_short.style.left = menuShort.getBoundingClientRect().left + 90 + "px";
window.addEventListener("resize", () => {
  let coord = menuShort.getBoundingClientRect().left - 20;
  sousMenu_short.style.left = coord + "px";
});
