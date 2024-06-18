<?php
require_once '../../models/usuario.php';

if (isset($_POST["CodigoUsuario"],$_POST["tokenVerificador"])) {
    $CodigoUsuario = intval($_POST["CodigoUsuario"]);
    $tokenVerificador = intval($_POST["tokenVerificador"]);
    $NombreUsuario = "";
    $Clave = "";
    $CodigoTipoPerfil = "";
    if (!empty($CodigoUsuario)&&!empty($tokenVerificador)) {
        $usuario = new usuario($CodigoUsuario, $NombreUsuario, $Clave, $CodigoTipoPerfil, $tokenVerificador, "");
        $resultado = $usuario->VerificarTok();
        if (is_array($resultado) && count($resultado) > 0 && isset($resultado[0]['mensaje']) && $resultado[0]['mensaje'] == 'Usuario actualizado correctamente.') {
            echo json_encode(true); // EXISTE
        } else {
            echo json_encode(false); // NO EXISTE
        }
    }else {
        echo json_encode(false); // CAMPOS VACÍOS
    }
}else {
    echo json_encode(false); // LOS DATOS NO SE ENVIARON
}
