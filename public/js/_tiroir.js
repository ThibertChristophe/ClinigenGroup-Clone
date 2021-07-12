/**
 * Gestion des tiroir de la page Popular questions
 * affiche le contenu du tiroir et fait bouger la petite flèche à droite (rotation)
 */
const all_tiroir = document.querySelectorAll(".tiroir");
const all_btn_tiroir = document.querySelectorAll(".tiroir > button");

// Pour chaque tiroir
all_tiroir.forEach((tiroir) => {
  const btn_tiroir = tiroir.querySelector("button");
  const fleche = btn_tiroir.querySelector(".tiroir_fleche");
  const content = tiroir.querySelector(".tiroir_content");
  btn_tiroir.addEventListener("click", () => {
    if (fleche.style.cssText.includes("rotate(-225deg)")) {
      // ferme le tiroir
      fleche.style.transform = "rotate(-45deg)";
      btn_tiroir.style.fontWeight = "normal";
      // cache le paragraphe
      content.style.display = "none";
    } else {
      //ouvre le tiroir
      fleche.style.transform = "rotate(-225deg)";
      btn_tiroir.style.fontWeight = "bold";
      // affiche le paragraphe
      content.style.display = "block";
    }
  });
});
