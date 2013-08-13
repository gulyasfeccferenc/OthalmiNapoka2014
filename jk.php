<?php
$to = "gulyasfeccferenc@gmail.com";
$subject = "Test mail";
$message = "Hello! This is a simple email message.";
$from = "othalmiserver@example.com";
$headers = "From:" . $from;
mail($to,$subject,$message,$headers);
echo "Mail Sent.";
?>