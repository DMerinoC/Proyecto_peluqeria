<?php
require_once '../../models/cita.php';
if (isset($_POST["Codigo"], $_POST["CodigoUsuario"], $_POST["CodigoServicio"], $_POST["CodigoDescuento"], $_POST["Fecha"], $_POST["Estado"])) {
    $Codigo = $_POST["Codigo"];
    $CodigoUsuario = $_POST["CodigoUsuario"];
    $CodigoServicio = $_POST["CodigoServicio"];
    $CodigoDescuento = $_POST["CodigoDescuento"];
    $Fecha = $_POST["Fecha"];
    $Estado = $_POST["Estado"];


    // INSTANCIAMOS
    $cita = new cita($Codigo, $CodigoUsuario, "", $CodigoServicio, "", "", $CodigoDescuento, "", "", $Fecha, $Estado);

    // APLICAMOS GUARDAR
    $resultado = $cita->Guardar();

    if (is_array($resultado) && count($resultado) > 0 && isset($resultado[0]['mensaje'])) {
        if ($resultado[0]['mensaje'] == 'Cita actualizada correctamente') {
            echo json_encode(true); // 
        } else {
            echo json_encode(false); // 
        }
    } else {
        echo json_encode(false); // 
    }

} else {
    echo json_encode(false); // LOS DATOS NO SE ENVIARON
}