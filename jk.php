<?php
$to = 'gulyasfeccferenc@gmail.com';
$from = "GólyaForm";
$golyaNev = trim($_POST['golyaNev']);
$golyaMail = trim($_POST['golyaMail']);
$golyaTel = trim($_POST['golyaTel']);
$subject = "GT: $golyaNev";
$golyaSzak = trim($_POST['golyaSzak']);
$golyaBeir = trim($_POST['golyaBeiratkozas']);
$golyaEsku = trim($_POST['golyaEsku']);
$megjegyzes = trim($_POST['golyaEgyeb']);

$message = "<div class=\"container\"><h3>" . $golyaNev . "</h3><br> E-mail: ".$golyaMail."<br> Tel: ".$golyaTel."<br> Szak: ".$golyaSzak."<br> Beíratkozás: ".$golyaBeir."<br> Eskütétel: ".$golyaEsku."<br> Egyéb: ".$megjegyzes."</div>";
echo $message;
$sent = mail($to,$golyaNev,$message,"From: gt.othalmidiaklakasok.hu");

if($sent)
	{print "<!DOCTYPE html>
<html>
  <head>
    <title>OGT13</title>
    <meta charset=\"utf-8\">
    <meta http-equiv=\"Content-Language\" content=\"hu\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <!-- Bootstrap -->
    <link href=\"src/css/bootstrap.css\" rel=\"stylesheet\" media=\"screen\">
    <link href=\"src/css/bootstrap-glyphicons.css\" rel=\"stylesheet\" media=\"screen\">
    <link href=\"src/css/cosmos.css\" rel=\"stylesheet\" media=\"screen\">
    <script src=\"src/js/jquery.min.js\"></script>
    
    <style>
      body{background-color:#000000;height:100%;margin:0px;padding-top:120px;background-image:url('src/img/bcgrnd1.jpg');}
     div .featurette{background-color: :#ffffff !important;}
    </style>
  </head>
  <body>
  <div class=\"navbar-wrapper\">
      <div class=\"container\">
   <div class=\"text-success\">Sikeresen jelentkeztél!</div><br>
   <a class=\"btn btn-default\" href=\"http://gt.othalmidiaklakasok.hu\">Vissza</a>
   </div></div>
  </body>
</html>";}
else {
	print "<!DOCTYPE html>
<html>
  <head>
    <title>OGT13</title>
    <meta charset=\"utf-8\">
    <meta http-equiv=\"Content-Language\" content=\"hu\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <!-- Bootstrap -->
    <link href=\"src/css/bootstrap.css\" rel=\"stylesheet\" media=\"screen\">
    <link href=\"src/css/bootstrap-glyphicons.css\" rel=\"stylesheet\" media=\"screen\">
    <link href=\"src/css/cosmos.css\" rel=\"stylesheet\" media=\"screen\">
    <script src=\"src/js/jquery.min.js\"></script>
    
    <style>
      body{background-color:#000000;height:100%;margin:0px;padding-top:120px;background-image:url('src/img/bcgrnd1.jpg');}
     div .featurette{background-color: :#ffffff !important;}
    </style>
  </head>
  <body>
   <div class=\"navbar-wrapper\">
      <div class=\"container\">
      <div class=\"text-success\">Valami hiba történt! Próbáld újra később, vagy jelentkezz e-mailben az othalomgt@gmail.com-on!</div><br>
   <a class=\"btn btn-default\" href=\"http://gt.othalmidiaklakasok.hu\">Vissza</a>
   
  </div></div>
  </body>
</html>";
}
?>