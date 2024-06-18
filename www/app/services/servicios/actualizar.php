<?php
require_once '../../models/servicio.php';

$codigo = $_POST["codigo"];
$nombre = $_POST["nombre"];
$precio = $_POST["precio"];
$descripcion = $_POST["descripcion"];
$imagenes = $_POST["imagenes"];
$tipoServicio = $_POST["tipoServicio"];

$servicio = new servicio($codigo, $nombre, $precio, $descripcion, $imagenes, 1, $tipoServicio);
$resultado = $servicio->Actualizar();
echo json_encode($resultado);
