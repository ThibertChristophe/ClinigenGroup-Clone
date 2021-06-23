const slider1 = document.querySelector('.slider1');
const slider2 = document.querySelector('.slider2');
const slider3 = document.querySelector('.slider3');

setTimeout(() => { 
    slider1.style.left = "-50%";
    slider2.style.left = "50%";
    slider2.style.transform = "translateX(-50%)";
}, 5000);