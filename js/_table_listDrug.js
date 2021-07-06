function calculateNumberOfLine() {
  const numberOfLine = document.querySelectorAll(".table_ligne").length;
  const number = document.querySelector(".number");
  number.innerHTML = `${numberOfLine} of ${numberOfLine}`;
}
calculateNumberOfLine();
