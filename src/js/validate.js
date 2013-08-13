function validateForm() {
	var golyaNev = document.getElementById('golyaNev').value;
	var golyaMail = document.getElementById('golyaMail').value;
	var golyaTel = document.getElementById('golyaTel').value;
	var golyaSzak = document.getElementById('golyaSzak').value;
	var golyaBeiratkozas = document.getElementById('golyaBeiratkozas').value;
	var golyaEsku = document.getElementById('golyaEsku').value;
	var golyaKep = document.getElementById('golyaKep').value;
	var mail = "Gólya neve: "+golyaNev+" \n Gólya e-mail: "+golyaMail+" \n Telefonszám: "+golyaTel+" \n Szak: "+golyaSzak+"\n Beíratkozás időpontja: "+golyaBeiratkozas+"\n Eskütétel időpontja: "+golyaEsku+"\n Fénykép: "+golyaKep;
	console.log(mail);
	var jel = document.getElementById('golyaJelentkezes');
	jel.submit();
	
}