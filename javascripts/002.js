var myNS = {
  szamlalo:0,

  forras:['images/01.jpg','images/02.jpg','images/03.jpg','images/04.jpg','images/05.jpg'],
  
  onClick: function() {
    ++myNS.szamlalo;
    if(myNS.szamlalo<myNS.forras.length){
      myNS.kep.src=myNS.forras[myNS.szamlalo]; }
    else {myNS.szamlalo=0; myNS.kep.src=myNS.forras[myNS.szamlalo];}
  },

  setUp: function() {
    myNS.kep = document.getElementById('kephely');
    myNS.kep.addEventListener('click', myNS.onClick);
  }
}

document.addEventListener('DOMContentLoaded', myNS.setUp);
