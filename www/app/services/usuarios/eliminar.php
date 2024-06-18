<?php
require_once '../../models/usuario.php';
$NombreUsuario = "";
$Clave = "";
$CodigoTipoPerfil = "";
$CodigoUsuario = $_POST["CodigoUsuario"];
$tokenVerificador="";
$usuario = new usuario($CodigoUsuario, $NombreUsuario, $Clave, $CodigoTipoPerfil, $tokenVerificador, "");
$resultado = $usuario->Eliminar();
echo json_encode($resultado);
