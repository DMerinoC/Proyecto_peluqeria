<?php
require_once '../../models/servicio.php';

// $codigo = intval($_POST["codigo"]);
// echo json_encode($codigo);
$nombre = $_POST["nombre"];
// echo json_encode($nombre);
$precio = intval($_POST["precio"]);
// echo json_encode($precio);
$descripcion = $_POST["descripcion"];
// echo json_encode($descripcion);
$imagenes = $_POST["imagenes"];
// echo json_encode($imagenes);
$tipoServicio = $_POST["tipoServicio"];

$servicio = new servicio(0, $nombre, $precio, $descripcion, $imagenes, 1,$tipoServicio);
// echo json_encode($servicio);

$resultado = $servicio->Guardar();
echo json_encode($resultado);

