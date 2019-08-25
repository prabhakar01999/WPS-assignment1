function addRow1() {
    let table = document.getElementById("myTable2");
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    cell1.innerHTML = '<input type="text" class="form-control"  placeholder="Company Name">';
    cell2.innerHTML = '';
    cell3.innerHTML='';
    cell4.innerHTML = '<input type="text" class="form-control" placeholder="Job Description">';
}
function addRow2() {
    let table = document.getElementById("myTable3");
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    cell1.innerHTML = '<input type="text" class="form-control"  placeholder="Language">';
}