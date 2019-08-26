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
function validateFirstName(){
    let name=document.getElementById("fname").value;
    let div=document.getElementById("fname");
    let pattern = /^[A-Z][a-z]{4,20}/
    if(!pattern.test(name)){
        div.style.border="1px solid red";
    }
}
function validateLasttName(){
    let name=document.getElementById("lname").value;
    let div=document.getElementById("lname");
    let pattern = /^[A-Z][a-z]{4,20}/
    if(!pattern.test(name)){
        div.style.border="1px solid red";
    }
}
function validateParentName(){
    let name=document.getElementById("pname").value;
    let div=document.getElementById("pname");
    let pattern = /^[A-Z][a-z]{4,40}/
    if(!pattern.test(name)){
        div.style.border="1px solid red";
    }
}

function validateMobile(){
    let name=document.getElementById("mobile").value;
    let div=document.getElementById("mobile");
    let pattern = /^[9 8 7 6][0-9]{9}/
    if(!pattern.test(name)){
        div.style.border="1px solid red";
    }
}