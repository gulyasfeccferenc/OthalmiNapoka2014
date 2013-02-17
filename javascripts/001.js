var szamlalo, forras;
szamlalo=0;
document.bgColor="black";
var kepek=new Array("images/01.jpg","images/02.jpg","images/03.jpg","images/04.jpg","images/05.jpg");

function holjar()
{
for(szamlalo;szamlalo<kepek.length; szamlalo++) {
document.kep.src=kepek[szamlalo];
if(szamlalo+1=kepek.length) {szamlalo=0;}
}

}
