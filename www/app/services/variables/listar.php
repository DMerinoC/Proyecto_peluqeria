<?php
require_once '../../models/variable.php';
require_once '../../models/token.php';
require_once '../../models/usuario.php';

$validado = false;
$variables;
$NombreUsuario = 'DMERINO';
$token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3VhcmlvIjp7IkNvZGlnb1VzdWFyaW8iOjEsIk5vbWJyZVVzdWFyaW8iOiJETUVSSU5PIiwiQ2xhdmUiOiIiLCJDb2RpZ29UaXBvUGVyZmlsIjoxLCJEZXNjcmlwY2lvblRpcG9QZXJmaWwiOiJBZG1pbmlzdHJhZG9yIiwidG9rZW4iOm51bGx9fQ.pq7dHy8hnE9WECbKbMVtW-JT8BnOZ22ja3KallxCh-w';
// $NombreUsuario = json_encode($_POST["nombreUsuario"]);
// $token = json_encode($_POST["token"]);
// echo json_encode($_POST["nombreUsuario"]);
// echo json_encode($_POST["token"]);
if (!isset($token)) {
    echo "Las credenciales no existen, no se puede realizar la consulta.";
    return;
}
if (!isset($NombreUsuario)) {
    echo "El usuario no existe, no se puede realizar la consulta.";
    return;
}


$validado = token::Validar($NombreUsuario, $token);
// valida mal, el metodo validar está al al parecer
// echo json_encode($validado);
// HICE correr a la fuerza al programa
if ($validado) {
    $variables = variable::Listar();
    echo json_encode($variables);
} else {
    echo "Ud. no posee los privilegios necesarios para consultar la información solicitada.";
}
