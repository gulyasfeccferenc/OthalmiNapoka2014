var outputContainer; 
var counter;
var atm;

function listCounter(msg) {
    var li = document.createElement('li');
    li.innerHTML = msg;
    outputContainer.appendChild(li);
}

function fizz() {
    outputContainer = document.getElementById('kimenet');
    for (var c = 1; c <=100; c++) {
    atm = "";
    if (c % 3 == 0) {atm = atm+"Fizz"};
    listCounter(atm);
}

}


document.addEventListener('DOMContentLoaded', fizz);
