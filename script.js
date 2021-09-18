function firstButton() {
    let total = document.getElementById("bill").value;
    let a = parseInt(total);
    let people = document.getElementById("people").value;
    let b = parseInt(people);
    let newTotal = (a / b) * 0.05 ;
    document.getElementById("tipam").value = newTotal + "$";
    newT = (a / b) + newTotal;
    document.getElementById("perPerson").value = newT + "$"
}
function secondButton() {
    let total = document.getElementById("bill").value
    let a = parseInt(total);
    let people = document.getElementById("people").value;
    let b = parseInt(people);
    let newTotal = (a / b) * 0.1;
    document.getElementById("tipam").value = newTotal + "$";
    newT = (a / b) + newTotal;
    document.getElementById("perPerson").value = newT + "$"
}
function thirdButton() {
    let total = document.getElementById("bill").value
    let a = parseInt(total);
    let people = document.getElementById("people").value;
    let b = parseInt(people);
    let newTotal = (a / b) * 0.15 
    document.getElementById("tipam").value = newTotal + "$";
    newT = (a / b) + newTotal;
    document.getElementById("perPerson").value = newT + "$"
}
function fourthButton() {
    let total = document.getElementById("bill").value
    let a = parseInt(total);
    let people = document.getElementById("people").value;
    let b = parseInt(people);
    let newTotal = (a / b) * 0.25 
    document.getElementById("tipam").value = newTotal + "$";
    newT = (a / b) + newTotal;
    document.getElementById("perPerson").value = newT + "$"
}
function fifthButton() {
    let total = document.getElementById("bill").value
    let a = parseInt(total);
    let people = document.getElementById("people").value;
    let b = parseInt(people);
    let newTotal = (a / b) * 0.50 
    document.getElementById("tipam").value = newTotal + "$";
    newT = (a / b) + newTotal;
    document.getElementById("perPerson").value = newT + "$"
}
function resetButton() {
    document.getElementById("bill").value = ""
    document.getElementById("people").value = ""
    document.getElementById("tipam").value = ""
    document.getElementById("perPerson").value = ""
    document.getElementById("custom").value = ""
}
function umar() {
    let total = document.getElementById("bill").value
    let a = parseInt(total);
    let people = document.getElementById("people").value;
    let b = parseInt(people);
    let Custom = document.getElementById("custom").value;
    let c = parseInt(Custom);
    let newTotal = (a / b) * (c / 100);
    document.getElementById("tipam").value = newTotal + "$";
    let d = (a / b) + newTotal + "$";
    document.getElementById("perPerson").value = d;
}

