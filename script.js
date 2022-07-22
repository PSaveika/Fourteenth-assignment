"use strict"

//variables
var tbName = document.getElementById("name");
var tbSurname = document.getElementById("surname");
var tbAge = document.getElementById("age");
var tbAdd = document.getElementById("add");
var tbDelFirst = document.getElementById("del-first");
var tbDelLast = document.getElementById("del-lasts");
var getTable = document.getElementById("table")
var tableLength = getTable.rows.length;


tbAdd.addEventListener("click", function() {
    if(tbName.value && tbSurname.value && tbAge.value) {
        var createRow = getTable.insertRow();
        var createName = createRow.insertCell(0);
        var createSurname = createRow.insertCell(1);
        var createAge = createRow.insertCell(2);
        createName.innerText = tbName.value;
        createSurname.innerText = tbSurname.value;
        createAge.innerText = tbAge.value;
        tableLength++
    } else {
        alert("Įveskite duomenis!")
    }
});

tbDelFirst.addEventListener("click", function(){
    
    if(tableLength > 1) {
        tableLength--;
        getTable.deleteRow(1)
    }
        
        
    
    
})