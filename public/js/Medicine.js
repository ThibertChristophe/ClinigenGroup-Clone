export default class Medicines {
  constructor(name, alternative, form_and_pack, date, status) {
    this.name = name;
    this.alternative = alternative;
    this.form_and_pack = form_and_pack;
    this.date = date;
    this.status = status;
  }
  construitLigneTable() {
    return ` <tr class="table_ligne">
    <td>${this.name}</td>
    <td>
        <a href="" class="table_link_alt"
            >${this.alternative}</a
        >
        </td>
        <td>${this.form_and_pack}</td>
        <td>${this.date}</td>
        <td>${this.status}</td>
        <td>
        <a href="" class="table_link_request">Request medicine</a>
        </td>
    </tr>`;
  }
}
