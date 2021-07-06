/**
 * Fais défiler le slider de l'index
 */
const slider1 = document.querySelector(".slider1");
const slider2 = document.querySelector(".slider2");
const slider3 = document.querySelector(".slider3");

const slider_dot_1 = document.querySelector(".slider_dot_1");
const slider_dot_2 = document.querySelector(".slider_dot_2");
const slider_dot_3 = document.querySelector(".slider_dot_3");

let slideActif = 1;

// Affiche le slide en parametre
const afficheSlide = (slide) => {
  slide.style.left = "50%";
  slide.style.transform = "translateX(-50%)";
};

// Retire le slide en parametre
const retireSLide = (slide) => {
  slide.style.left = "-50%";
};

const defileSlide = () => {
  // Premier défilement de slide 1 => 2
  setTimeout(() => {
    // Slide1 => quitte l'ecran
    retireSLide(slider1);
    // Slider2 => arrive dans l'écran
    afficheSlide(slider2);
    slideActif = 2;
    // Change les dot du dessous => active le dot 2
    slider_dot_1.style.background = "transparent";
    slider_dot_2.style.background = "#fff";
  }, 10000);

  // Deuxieme défilement de slide 2 => 3
  setTimeout(() => {
    // Slider2 => quitte l'ecran
    retireSLide(slider2);
    // Slider3 => arrive dans l'écran
    afficheSlide(slider3);
    slideActif = 3;
    // Change les dot du dessous => active le dot 3
    slider_dot_2.style.background = "transparent";
    slider_dot_3.style.background = "#fff";
  }, 20000);
};

defileSlide();

/**
 * Click des dots
 */
slider_dot_1.addEventListener("click", () => {
  console.log("ok");

  slider_dot_3.style.background = "transparent";
  slider_dot_2.style.background = "transparent";
  slider_dot_1.style.background = "#fff";
});
