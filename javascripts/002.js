var myNamespacedSolution = {
  szamlalo:0,

  forras:("images/01.jpg","images/02.jpg","images/03.jpg","images/04.jpg","images/05.jpg"),
  
  onClick: function() {
    ++myNamespacedSolution.szamlalo;
    if(myNamespacedSolution.szamlalo<myNamespacedSolution.forras.length){
      myNamespacedSolution.kep.src=myNamespacedSolution.forras[myNamespacedSolution.szamlalo]; }
    else {myNamespacedSolution.szamlalo=0; myNamespacedSolution.kep.src=myNamespacedSolution.forras[myNamespacedSolution.szamlalo];}
  },

  setUp: function() {
    myNamespacedSolution.kep = document.getElementById('kephely');
    myNamespacedSolution.kep.addEventListener('click', myNamespacedSolution.onClick);
  }
}

document.addEventListener('DOMContentLoaded', myNamespacedSolution.setUp);
