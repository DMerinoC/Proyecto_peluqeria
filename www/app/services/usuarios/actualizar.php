<?php
require_once '../../models/usuario.php';

$CodigoUsuario = $_POST["CodigoUsuario"];
$NombreUsuario = $_POST["NombreUsuario"];
$Clave = $_POST["Clave"];
$tokenVerificador="";
$CodigoTipoPerfil = $_POST["CodigoTipoPerfil"];

$usuario = new usuario($CodigoUsuario, $NombreUsuario, $Clave, $CodigoTipoPerfil,$tokenVerificador, "");
$resultado = $usuario->Actualizar();
echo json_encode($resultado);
