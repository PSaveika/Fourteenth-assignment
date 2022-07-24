"use strict"

//variables
var tbName = document.getElementById("name");
var tbSurname = document.getElementById("surname");
var tbAge = document.getElementById("age");
var tbAdd = document.getElementById("add");
var tbDelFirst = document.getElementById("del-first");
var tbDelLast = document.getElementById("del-last");
var getTable = document.getElementById("table");
var tableLength = getTable.rows.length;

//add row with inputs function
tbAdd.addEventListener("click", function() {
    if(tbName.value && tbSurname.value && tbAge.value > 0) {
        var createRow = getTable.insertRow();
        var createName = createRow.insertCell(0);
        var createSurname = createRow.insertCell(1);
        var createAge = createRow.insertCell(2);
        createName.innerText = tbName.value;
        createSurname.innerText = tbSurname.value;
        createAge.innerText = tbAge.value;
        tableLength++;
        tbName.value = "";
        tbSurname.value = "";
        tbAge.value = "";
    } else {
        alert("Įveskite duomenis!")
    }
});

//delete first row function
tbDelFirst.addEventListener("click", function(){ 
    if(tableLength > 1) {
        tableLength--;
        getTable.deleteRow(1);
    } else {
        alert("Nebėra ką trinti.");
    }     
});

//delete last row function
tbDelLast.addEventListener("click", function(){
    if(tableLength > 1) {
        tableLength--;
        getTable.deleteRow(-1);
    } else {
        alert("Nebėra ką trinti.");
    }
});