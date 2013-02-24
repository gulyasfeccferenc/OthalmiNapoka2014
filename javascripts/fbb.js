var myFizzy = {     
    fizz: function(c) {
    var atm = "";
    if (c % 3 == 0) {atm = atm+"Fizz"};
    if (c % 5 == 0) {atm = atm+"Buzz"};
    if (c % 7 == 0) {atm = atm+"Bizz"};
    return atm;    
    },
    
};
