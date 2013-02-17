var myNamespacedSolution = {
  szamlalo:0,

  forras:("images/01.jpg","images/02.jpg","images/03.jpg","images/04.jpg","images/05.jpg");
  
  onClick: function {
    ++myNamespacedSolution.szamlalo,
    if(myNamespacedSolution.szamlalo<myNamespacedSolution.forras.length){
      kep.src=forras[szamlalo];}
    else {szamlalo=0;kep.src=forras[szamlalo];}
  }

  function setUp() {
    kep = document.getElementById('kephely');
    kep.addEventListener('click', onClick);
  }
}

document.addEventListener('DOMContentLoaded', myNamespacedSolution.setUp);
