<?php
require_once '../../models/cita.php';
$Codigo = $_POST["Codigo"];
$cita = new cita($Codigo, "", "", "", "", "", "", "", "", "", "");
$resultado = $cita->Eliminar();
echo json_encode($resultado);