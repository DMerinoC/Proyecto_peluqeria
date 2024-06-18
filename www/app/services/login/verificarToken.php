<?php
    require_once '../../models/usuario.php';
    require_once '../../config/tokenJWT.php';

    use \Firebase\JWT\JWT;
    use \Firebase\JWT\Key;

    $validacion = false;

    try {
        $token = $_POST["token"];
        $nombreUsuario = $_POST["nombreUsuario"];

        $jwt = new JWT();
        $key = new key($key_, "HS256");

        $tokenResuelto = $jwt->decode($token, $key);

        if ($tokenResuelto->usuario->NombreUsuario == $nombreUsuario)
        {
            $validacion = true;
        }
        else{
            $validacion = false;
        }
        echo $validacion;
    } catch (\Throwable $th) {
        $validacion = false;
        echo $validacion;
    }    
