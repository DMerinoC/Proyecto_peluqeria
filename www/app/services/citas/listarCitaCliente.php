<?php
    require_once '../../models/cita.php';
    $citas = Cita::ListarCitaUsuario();
    echo json_encode($citas);

