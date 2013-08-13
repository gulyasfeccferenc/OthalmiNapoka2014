<?php
$to = 'gulyasfeccferenc@gmail.com';
$from = "GólyaForm";
$golyaNev = trim($_POST['golyaNev']) . "\n <br>";
echo $golyaNev;
$golyaMail = trim($_POST['golyaMail']);
echo $golyaMail;
$golyaTel = trim($_POST['golyaTel']);
echo $golyaTel;
$subject = "GT: $golyaNev";
echo $subject;
$sent = mail($to,$subject,$golyaMail,"From: Fecc");

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
   Valami hiba történt! Próbáld újra később, vagy jelentkezz e-mailben az othalomgt@gmail.com-on!
  </div></div>
  </body>
</html>";
}
?>