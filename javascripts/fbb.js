var outputContainer; 
var counter;
var atm;

function listCounter(msg) {
    var b = document.createElement('b');
    var li = document.createElement('li');
    var br = document.createElement('br');
    li.innerHTML = msg;
    outputContainer.appendChild(b);
    outputContainer.appendChild(li);
    outputContainer.appendChild(br);
    
}

function fizz() {
    outputContainer = document.getElementById('kimenet');
    for (var c = 1; c <=100; c++) {
    atm = "";
    if (c % 3 == 0) {atm = atm+"Fizz"};
    if (c % 5 == 0) {atm = atm+"Buzz"};
    if (c % 7 == 0) {atm = atm+"Bizz"};
    if (atm == "") {atm=c};
    listCounter(atm);
}

}


document.addEventListener('DOMContentLoaded', fizz);
