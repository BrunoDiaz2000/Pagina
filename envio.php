<?php
$destinatario = "bryantherrera94@gmail.com";
$asunto = "Nuevo mensaje del formulario de contacto";
$mensaje = "Nombre: ".$_POST['nombre']."\r\n";
$mensaje .= "Teléfono: ".$_POST['telefono']."\r\n";
$mensaje .= "Correo: ".$_POST['correo']."\r\n";
$mensaje .= "Tema: ".$_POST['tema']."\r\n";
$mensaje .= "Mensaje: ".$_POST['mensaje'];

// Envía el correo
mail($destinatario, $asunto, $mensaje);

// Redirecciona al usuario a una página de confirmación o cualquier otra página
header("Location: formularioC.html");
?>