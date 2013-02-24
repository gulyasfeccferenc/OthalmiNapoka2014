var myFizzy = {
    outputContainer: null,
    
    listCounter: function (msg) {
        var li = document.createElement('li');
        var br = document.createElement('br');
        li.innerHTML = msg;
        myFizzy.outputContainer.appendChild(li);
        myFizzy.outputContainer.appendChild(br);
    },
    
    fizz: function(c) {
    var atm = "";
    if (c % 3 == 0) {atm = atm+"Fizz"};
    if (c % 5 == 0) {atm = atm+"Buzz"};
    if (c % 7 == 0) {atm = atm+"Bizz"};
    return atm;
}

    setUp: function() {
    myFizzy.outputContainer = document.getElementById('kimenet');
    for (var c = 1; c <=100; c++) {    
    var out = myFizzy.fizz(c);
    myFizzy.listCounter(out);
}

}

}

document.addEventListener('DOMContentLoaded', myFizzy.setUp);
