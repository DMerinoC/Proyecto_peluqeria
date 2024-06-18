<?php
require_once '../../models/variable.php';

$codigo = "";
$llave = "";
$valor = "";

$codigo = $_POST["codigo"];
$valor = $_POST["valor"];

$variable = new variable($codigo, $llave, $valor);
$resultado = $variable->Actualizar();
echo json_encode($resultado);
