function addRow3() {
    let table = document.getElementById("myTable4");
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    cell1.innerHTML = '<input type="text" class="form-control"  placeholder="Hobby">';
}