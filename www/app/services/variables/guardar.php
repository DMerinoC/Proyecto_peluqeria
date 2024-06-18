<?php
require_once '../../models/variable.php';
require_once '../../models/token.php';
require_once '../../models/usuario.php';

$codigo = 0;
$llave = "";
$valor = "";
$llave = $_POST["llave"];
$valor = $_POST["valor"];

// if (!isset($_POST["NombreUsuario"])) {
//     echo "El usuario no existe, no se puede realizar la operación.";
//     return;
// }

// if (!isset($_POST["token"])) {
//     echo "Las credenciales no existen, no se puede realizar la operación.";
//     return;
// }

// $NombreUsuario = $_POST["NombreUsuario"];
// $token = $_POST["token"];

// $validado = token::Validar($NombreUsuario, $token);

// if ($validado) {
    $variable = new variable($codigo, $llave, $valor);
    $resultado = $variable->Guardar();
    echo json_encode($resultado);
// } else {
//     echo "Ud. no posee los privilegios necesarios para realizar la operación solicitada.";
// }

