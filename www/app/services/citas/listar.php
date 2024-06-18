<?php
    require_once '../../models/cita.php';
    $citas = Cita::Listar();
    echo json_encode($citas);
