<?php
    require_once '../../models/usuario.php';
    $usuarios = usuario::Listar();
    echo json_encode($usuarios);
