/**
 * Fais défiler le slider de l'index
 */
const slider1 = document.querySelector('.slider1');
const slider2 = document.querySelector('.slider2');
const slider3 = document.querySelector('.slider3');

const slider_dot_1 = document.querySelector('.slider_dot_1');
const slider_dot_2 = document.querySelector('.slider_dot_2');
const slider_dot_3 = document.querySelector('.slider_dot_3');

// Affiche le slide 2
setTimeout(() => { 
    // Slide1 => quitte l'ecran
    slider1.style.left = "-50%";
    // Slider2 => arrive dans l'écran
    slider2.style.left = "50%";
    slider2.style.transform = "translateX(-50%)";
    // Change les dot du dessous => active le dot 2
    slider_dot_1.style.background = "transparent";
    slider_dot_2.style.background = "#fff";
}, 10000);

// Affiche le slide 3
setTimeout(() => { 
    // Slider2 => quitte l'ecran
    slider2.style.left = "-50%";
    // Slider3 => arrive dans l'écran
    slider3.style.left = "50%";
    slider3.style.transform = "translateX(-50%)";
    // Change les dot du dessous => active le dot 3
    slider_dot_2.style.background = "transparent";
    slider_dot_3.style.background = "#fff";
}, 20000);