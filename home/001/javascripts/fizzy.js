     var lister = {
        c : 1,
        listCounter: function(msg) {
          var outputContainer = document.getElementById('kimenet');
          var li = document.createElement('li');
          var br = document.createElement('br');
          li.innerHTML = msg;
          myFizzy.outputContainer.appendChild(li);
          myFizzy.outputContainer.appendChild(br);
        };
        
        szamlalo: function() {
          for (c = 1; c <=100; c++) {    
            var out = myFizzy.fizz(c);
            listCounter(out); };
        },         
          
      };
      
      document.addEventListener('DOMContentLoaded', lister.szamlalo);
    
