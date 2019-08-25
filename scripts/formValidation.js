function addRow() {
    let table = document.getElementById("myTable1");
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    cell1.innerHTML = '<input type="text" class="form-control"  placeholder="Board">';
    cell2.innerHTML = '<input type="text" class="form-control" placeholder="Course">';
    cell3.innerHTML = '<input type="text" class="form-control" placeholder="Percentage">';
    cell4.innerHTML = '<input type="text" class="form-control" placeholder="Year Of Passing">';
}


