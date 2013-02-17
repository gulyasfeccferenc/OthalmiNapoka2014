var szamlalo;
szamlalo=0;

var forras=new Array("images/01.jpg","images/02.jpg","images/03.jpg","images/04.jpg","images/05.jpg");
function onClick(ev) {
++szamlalo;
if(szamlalo!=forras.length){
kep.src=forras[szamlalo];}
else {szamlalo=0;}
}
function setUp() {
  kep = document.getElementById('kephely');
  kep.addEventListener('click', onClick);
  
}

document.addEventListener('DOMContentLoaded', setUp);
