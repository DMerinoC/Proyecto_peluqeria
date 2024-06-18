<?php
require_once '../../models/usuario.php';
require_once '../../config/tokenJWT.php';

use \Firebase\JWT\JWT;
use \Firebase\JWT\Key;

$nombreUsuario = $_POST["nombreUsuario"];
$clave = $_POST["clave"];
$usuario = new usuario(0, $nombreUsuario, $clave, 0, "","");
$usuarioValidado = $usuario->Validar();
if ($usuarioValidado->CodigoUsuario != 0) {
    $jwt = new JWT();
    $token = $jwt->encode(array("usuario" => $usuarioValidado), $key_, "HS256");
    $usuarioValidado->token = $token;
    // aquí está el token
    // echo json_encode($token);
}
echo json_encode($usuarioValidado);
