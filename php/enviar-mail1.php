<?php

$nombre = isset($_POST['nombre']) ? $_POST['nombre'] : "";
$email = isset($_POST['email']) ? $_POST['email'] : "";
$mensaje = isset($_POST['mensaje']) ? $_POST['mensaje'] : "";

$email_para = "tino.navarrod@gmail.com";
$email_saliente_nombre = "Geotica";
$email_saliente= "contacto@geotica.com.mx";

function response ($msg, $status, $code, $error){
  $res=array(
    'msg' => $msg,
    'status' => $status,
    'code' => $code,
    'error' => $error
  );
  echo json_encode( $res, JSON_FORCE_OBJECT );
}

function sendmail($nombre, $email, $mensaje, $email_para){
  $to = $email_para;
  $subject = "Formulrio de contacto Geotica";
  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
  $headers .= "From: {$nombre} <{$email}>\r\n";
  //dirección de respuesta, si queremos que sea distinta que la del remitente
  $headers .= "Reply-To: {$email}\r\n";


  $message = "
  <html>
  <head>
  <title>HTML</title>
  </head>
  <body>
  Se ha recibudo en mensaje desde el formulrio de contacto  <br><br>
  Nombre: <b>{$nombre}</b> <br><br>
  Correo Electrónico: <b>{$email}</b> <br><br>
  Mensaje: <b>{$mensaje}</b>  <br><br>
  </body>
  </html>";

  if (mail($to, $subject, $message, $headers)){
    if (isset($_POST['dispositivo'])){
      header("location: ../?enviado=true&msg=Mensaje enviado con éxito, en breve nos pondrémos en contacto con usted#contacto");

    }else{
      response("Mensaje enviado con éxito, en breve nos pondrémos en contacto con usted","ok",201,false);
    }
  }else{
    if (isset($_POST['dispositivo'])){
      header("location: ../?enviado=false&msg=Error al enviar su mensaje por favor vuelva a intentarlo#contacto");

    }else{
      response("Error al enviar su mensaje por favor vuelva a intentarlo","error",401,true);
    }
  }
}

if ($nombre==="" || $email==="" || $mensaje===""){
  response('Error al tratar de enviar el mensaje</br>por favor vuelva a intentarlo', false, 500,true);
}else{
  sendmail($nombre, $email, $mensaje, $email_para);
}

?>
