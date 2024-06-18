<?php
require_once '../../models/variable.php';
$codigo = "";
$llave = "";
$valor = "";
$codigo = $_POST["codigo"];
$variable = new variable($codigo, $llave, $valor);
$resultado = $variable->Eliminar();
echo json_encode($resultado);
