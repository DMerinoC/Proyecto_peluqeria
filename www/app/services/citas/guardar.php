<?php
require_once '../../models/cita.php';
if (isset($_POST["CodigoUsuario"], $_POST["CodigoServicio"], $_POST["CodigoDescuento"], $_POST["Fecha"])) {
    $CodigoUsuario = $_POST["CodigoUsuario"];
    $CodigoServicio = $_POST["CodigoServicio"];
    $CodigoDescuento = $_POST["CodigoDescuento"];
    $Fecha = $_POST["Fecha"];


    // INSTANCIAMOS
    $cita = new cita(0, $CodigoUsuario, "", $CodigoServicio, "", "", $CodigoDescuento, "", "", $Fecha, 0);

    // APLICAMOS GUARDAR
    $resultado = $cita->Guardar();

    if (is_array($resultado) && count($resultado) > 0 && isset($resultado[0]['mensaje'])) {
        if ($resultado[0]['mensaje'] == 'Cita insertada correctamente') {
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