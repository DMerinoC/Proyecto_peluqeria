<?php
require_once '../../models/servicio.php';
$codigo = $_POST["codigo"];
$servicio = new servicio($codigo,"", "","","", "","");
$resultado = $servicio->Eliminar();
echo json_encode($resultado);
