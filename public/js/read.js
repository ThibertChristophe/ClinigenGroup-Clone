import Medicine from "/public/js/Medicine.js";
/**
 * Liste les produits de la page shortages-list.html
 */
const db = firebase.firestore();
const tbody = document.querySelector("tbody");
const filtre = document.getElementById("filtre");
let tab_medicine = [];
// Remplissage par defaut
console.log(filtre.value);
fillTable(filtre.value);

// Event quand on change la valeur du select (combo)
filtre.addEventListener("change", () => {
  console.log(filtre.value);
  trieEtFill(filtre.value);
});
/**
 * Rempli la table via un tri sur la base de donnée
 * @param {*} triPar
 */
function fillTable(triPar) {
  // On remet le tableau à zéro
  tbody.innerHTML = "";
  // On va le remplir mnt
  db.collection("medicine")
    //.orderBy(triPar, "asc")
    .get() // On read dans la DB
    .then((res) => {
      res.forEach((data) => {
        const medicine = data.data();
        // On ajoute les ligne du tableau
        const obj_medicine = new Medicine(
          medicine.name,
          medicine.alternative,
          medicine.form_and_pack,
          medicine.date,
          medicine.status
        );
        tab_medicine.push(obj_medicine);
      });
      trieEtFill(triPar);
    });
}

function trieEtFill(tri) {
  trieSelonCombo(tri);
  tbody.innerHTML = "";
  tab_medicine.forEach((med) => {
    tbody.innerHTML += med.construitLigneTable();
  });
  calculateNumberOfLine();
}

/**
 * Calcul le nombre de ligne de notre tableau
 */
function calculateNumberOfLine() {
  const numberOfLine = document.querySelectorAll(".table_ligne").length;
  const number = document.querySelector(".number");
  number.innerHTML = `${numberOfLine} of ${numberOfLine}`;
}

/**
 * Trie le tableau global
 * @param {*} valueDuSelect
 *
 */
function trieSelonCombo(valueDuSelect) {
  switch (valueDuSelect) {
    case "GenAZ":
      triName();
      break;
    case "AltAZ":
      triAlternative();
      break;
    case "Status":
      triStatus();
      break;
    default:
      triName();
      break;
  }
}

function triName() {
  tab_medicine.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
}
function triAlternative() {
  tab_medicine.sort((a, b) => {
    if (a.alternative < b.alternative) {
      return -1;
    }
    if (a.alternative > b.alternative) {
      return 1;
    }
    return 0;
  });
}
function triStatus() {
  tab_medicine.sort((a, b) => {
    if (a.status < b.status) {
      return -1;
    }
    if (a.status > b.status) {
      return 1;
    }
    return 0;
  });
}
