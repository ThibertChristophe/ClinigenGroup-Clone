/**
 * Gestion des tiroir de la page Popular questions
 * affiche le contenu du tiroir et fait bouger la petite flèche à droite (rotation)
 */
const btn_tiroir = document.querySelector(".tiroir > button");
const tiroir_fleche = document.querySelector(".tiroir_fleche");

// Click sur le 1er tiroir
btn_tiroir.addEventListener("click", () => {
  tiroir_fleche.style.transform = "rotate(-225deg)";
});
