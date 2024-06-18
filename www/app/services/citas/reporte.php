<?php
require_once '../../models/cita.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $cita = new Cita('', '', '', '', '', '', '', '', '', '', '', false);
    $archivoCSV = $cita->GenerarReporteCSV();

    if ($archivoCSV) {
        header('Content-Type: application/csv');
        header('Content-Disposition: attachment; filename="' . basename($archivoCSV) . '"');
        readfile($archivoCSV);

        // Elimina el archivo temporal después de enviarlo
        unlink($archivoCSV);
    } else {
        http_response_code(500);
        echo json_encode(["error" => "Error al generar el reporte"]);
    }
}