var outputContainer; 
var counter;
var atm;

function listCounter(msg) {
    var li = document.createElement('li');
    var br = document.createElement('br');
    li.innerHTML = msg;
    outputContainer.appendChild(li);
    outputContainer.appendChild(br);
    
}

function fizz(c) {
    var atm = "";
    if (c % 3 == 0) {atm = atm+"Fizz"};
    if (c % 5 == 0) {atm = atm+"Buzz"};
    if (c % 7 == 0) {atm = atm+"Bizz"};
    listCounter(atm);
    return atm;
}

function setUp() {
    outputContainer = document.getElementById('kimenet');
    for (var c = 1; c <=100; c++) {    
    out = fizz(c);
    listCounter(out);
}

}


document.addEventListener('DOMContentLoaded', fizz);
