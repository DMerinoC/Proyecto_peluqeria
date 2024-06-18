<?php
    require_once '../../models/servicio.php';
    $servicios = servicio::Listar();
    echo json_encode($servicios);