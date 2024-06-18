<?php
require_once '../../models/usuario.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require '../../../PHPMailer/src/Exception.php';
require '../../../PHPMailer/src/PHPMailer.php';
require '../../../PHPMailer/src/SMTP.php';

$CodigoUsuario = $_POST["CodigoUsuario"];
$NombreUsuario = $_POST["NombreUsuario"];
$Clave = $_POST["Clave"];
$correo = $_POST["Correo"];


$tokenVerificador = random_int(10, 99);
$mensaje = "su token es '$tokenVerificador'";
// if($NombreUsuario = '' || $Clave = ''){
//     echo json_encode(false); 
// }


// echo json_encode($resultado);

$usuario = new usuario($CodigoUsuario, $NombreUsuario, $Clave, 3, $tokenVerificador, "");

if ($usuario->Existe() == 1) {
    echo json_encode(1); // El usuario ya existe
    exit; // Salir del script
}

$resultado = $usuario->GuardarTemp();
$resultado2 = $usuario->IdAlto();
// echo $resultado;


$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth = true;                                   //Enable SMTP authentication
    $mail->Username = 'damc9990@gmail.com';                     //SMTP username
    $mail->Password = 'ebwvbyexfbrjkxsv';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('damc9990@gmail.com', 'PHP');
    $mail->addAddress($correo, 'Individuo');     //Add a recipient


    //Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Verifica tu correo';
    $mail->Body = $mensaje . 'Tu codigo de usuario es: ' . $resultado2;
    $mail->AltBody = $mensaje . 'Tu codigo de usuario es: ' . $resultado2;
    $mail->CharSet = 'UTF-8';
    $mail->send();

    echo 'true';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
