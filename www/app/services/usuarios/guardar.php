<?php
require_once '../../models/usuario.php';

if (isset($_POST["CodigoUsuario"], $_POST["NombreUsuario"], $_POST["Clave"])) {
    $CodigoUsuario = $_POST["CodigoUsuario"];
    $NombreUsuario = $_POST["NombreUsuario"];
    $Clave = $_POST["Clave"];

    // CON EMPTY VERIFICAMOS SI ESTÁN VACÍOS
    if (!empty($NombreUsuario) && !empty($Clave)) {
        // INSTANCIAMOS
        $usuario = new usuario($CodigoUsuario, $NombreUsuario, $Clave, 3, "", "");

        // APLICAMOS GUARDAR
        $resultado = $usuario->Guardar();

        if (is_array($resultado) && count($resultado) > 0 && isset($resultado[0]['mensaje']) && $resultado[0]['mensaje'] == 'El nombre de usuario ya existe') {
            echo json_encode(false); // NO EXISTE
        } else {
            echo json_encode(true); // EXISTE
        }
    } else {
        echo json_encode(false); // CAMPOS VACÍOS
    }
} else {
    echo json_encode(false); // LOS DATOS NO SE ENVIARON
}