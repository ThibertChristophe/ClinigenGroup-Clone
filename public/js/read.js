/**
 * Liste les produits de la page shortages-list.html
 */
const tbody = document.querySelector("tbody");

const db = firebase.firestore();

db.collection("medicine")
  .orderBy("name", "asc")
  .get() // On read
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

/**
 * Calcul le nombre de ligne de notre tableau
 */
function calculateNumberOfLine() {
  const numberOfLine = document.querySelectorAll(".table_ligne").length;
  const number = document.querySelector(".number");
  number.innerHTML = `${numberOfLine} of ${numberOfLine}`;
}
