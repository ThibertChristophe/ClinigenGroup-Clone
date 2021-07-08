/**
 * Liste les produits de la page shortages-list.html
 */
const db = firebase.firestore();
const tbody = document.querySelector("tbody");
const filtre = document.getElementById("filtre");

// Remplissage par defaut
fillTable(formateValueSelected(filtre.value));

// Event quand on change la valeur du select (combo)
filtre.addEventListener("change", () => {
  fillTable(formateValueSelected(filtre.value));
});

/**
 * Rempli la table via un tri sur la base de donnée
 * @param {*} triPar
 */
function fillTable(triPar) {
  tbody.innerHTML = "";
  db.collection("medicine")
    .orderBy(triPar, "asc")
    .get() // On read dans la DB
    .then((res) => {
      res.forEach((data) => {
        const medicine = data.data();
        // On ajoute les ligne du tableau
        tbody.innerHTML += [
          ` <tr class="table_ligne">
                <td>${medicine.name}</td>
                <td>
                    <a href="" class="table_link_alt"
                        >${medicine.alternative}</a
                    >
                    </td>
                    <td>${medicine.form_and_pack}</td>
                    <td>${medicine.date}</td>
                    <td>${medicine.status}</td>
                    <td>
                    <a href="" class="table_link_request">Request medicine</a>
                    </td>
                </tr>`,
        ];
      });
      calculateNumberOfLine();
    });
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
 * Formate la valeur pour le query de Firebase
 * @param {*} valueDuSelect
 * @returns valeur formatée pour le query Firebase
 */
function formateValueSelected(valueDuSelect) {
  let triPar;
  switch (valueDuSelect) {
    case "GenAZ":
      triPar = "name";
      break;
    case "AltAZ":
      triPar = "alternative";
      break;
    case "Status":
      triPar = "status";
      break;
    default:
      triPar = "name";
  }
  return triPar;
}
