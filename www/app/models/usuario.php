<?php
require_once '../../config/conexion.php';

class usuario
{
    public $CodigoUsuario;
    public $NombreUsuario;
    public $Clave;
    public $CodigoTipoPerfil;
    public $DescripcionTipoPerfil;
    public $tokenVerificador;

    public $token;

    private $conexion;

    function __construct($CodigoUsuario, $NombreUsuario, $Clave, $CodigoTipoPerfil, $tokenVerificador, $DescripcionTipoPerfil, $iniciarBD = true)
    {
        $this->CodigoUsuario = $CodigoUsuario;
        $this->NombreUsuario = $NombreUsuario;
        $this->Clave = $Clave;
        $this->CodigoTipoPerfil = $CodigoTipoPerfil;
        $this->DescripcionTipoPerfil = $DescripcionTipoPerfil;
        $this->tokenVerificador = $tokenVerificador;
        if ($iniciarBD) {
            $this->conexion = new conexion();
        }
    }

    function Validar()
    {
        try {
            $nombreUsuario = $this->NombreUsuario;
            $clave = $this->Clave;
            $sql = "CALL ValidarUsuario(?, ?);";
            $stmt = $this->conexion->prepare($sql);
            $stmt->execute([$nombreUsuario, $clave]);

            $this->Clave = "";
            $this->NombreUsuario = "";

            while ($datos = $stmt->fetch(PDO::FETCH_ASSOC)) {
                $this->CodigoUsuario = $datos["idUsuario"];
                $this->NombreUsuario = $datos["cUsuario"];
                $this->CodigoTipoPerfil = $datos["idTipoPerfil"];
                $this->DescripcionTipoPerfil = $datos["cDescripcion"];
            }
            return $this;
        } catch (PDOException $e) {
            $this->CodigoUsuario = 0;
            return $this;
        }
    }

    public static function Listar()
    {
        $usuarios = [];
        $conexion = new conexion();
        $sql = "CALL ListarUsuarios();";
        $stmt = $conexion->prepare($sql);
        $stmt->execute();

        while ($datos = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $usuario = new usuario(
                $datos["idUsuario"],
                $datos["cUsuario"],
                $datos["cClave"],
                $datos["idTipoPerfil"],
                "",
                $datos["cdescripcion"],
                false
            );
            array_push($usuarios, $usuario);
        }
        return $usuarios;
    }

    public function Guardar()
    {
        try {
            $CodigoUsuario = $this->CodigoUsuario;
            $NombreUsuario = $this->NombreUsuario;
            $Clave = $this->Clave;
            $CodigoTipoPerfil = $this->CodigoTipoPerfil;
            $sql = "CALL GuardarUsuario(?, ?, ?, ?);";
            $stmt = $this->conexion->prepare($sql);
            $stmt->execute([$CodigoUsuario, $NombreUsuario, $Clave, $CodigoTipoPerfil]);

            // ALMACENAMOS LOS RESULTADOS DEL PROCEDIMIENTO
            $results = [];
            do {
                $results[] = $stmt->fetch(PDO::FETCH_ASSOC);
            } while ($stmt->nextRowset());

            return $results;
        } catch (PDOException $e) {
            return false;
        }
    }
    public function GuardarTemp()
    {
        try {
            $CodigoUsuario = $this->CodigoUsuario;
            $NombreUsuario = $this->NombreUsuario;
            $Clave = $this->Clave;
            $CodigoTipoPerfil = $this->CodigoTipoPerfil;
            $tokenVerificador = $this->tokenVerificador;
            $sql = "CALL GuardarUsuarioTemp(?, ?, ?, ?, ?);";
            $stmt = $this->conexion->prepare($sql);
            $stmt->execute([$CodigoUsuario, $NombreUsuario, $Clave, $CodigoTipoPerfil, $tokenVerificador]);
            return true;
        } catch (PDOException $e) {
            return false;
        }
    }
    public function Existe()
    {
        try {
            $NombreUsuario = $this->NombreUsuario;
            $sql = "SELECT 1 FROM usuarios WHERE cUsuario = ? LIMIT 1";
            $stmt = $this->conexion->prepare($sql);
            $stmt->execute([$NombreUsuario]);
            return $stmt->rowCount();
        } catch (PDOException $e) {
            return false;
        }
    }

    public function Eliminar()
    {
        try {
            $CodigoUsuario = $this->CodigoUsuario;
            $sql = "CALL EliminarUsuario(?);";
            $stmt = $this->conexion->prepare($sql);
            $stmt->execute([$CodigoUsuario]);
            return true;
        } catch (PDOException $e) {
            return false;
        }
    }
    public function Actualizar()
    {
        try {
            $CodigoUsuario = $this->CodigoUsuario;
            $NombreUsuario = $this->NombreUsuario;
            $Clave = $this->Clave;
            $CodigoTipoPerfil = $this->CodigoTipoPerfil;
            $sql = "CALL ActualizarUsuario(?,?,?,?);";
            $stmt = $this->conexion->prepare($sql);
            $stmt->execute([$CodigoUsuario, $NombreUsuario, $Clave, $CodigoTipoPerfil]);
            return true;
        } catch (PDOException $e) {
            return false;
        }
    }
    public function VerificarTok()
    {
        try {
            $CodigoUsuario = $this->CodigoUsuario;
            $tokenVerificador = $this->tokenVerificador;
            $sql = "CALL cambiarCliente(?,?);";
            $stmt = $this->conexion->prepare($sql);
            $stmt->execute([$CodigoUsuario, $tokenVerificador]);
            $results = [];
            do {
                $results[] = $stmt->fetch(PDO::FETCH_ASSOC);
            } while ($stmt->nextRowset());

            return $results;
        } catch (PDOException $e) {
            return false;
        }
    }
    public function IdAlto()
    {
        try {
            $sql = "CALL IdAlto();";
            $stmt = $this->conexion->prepare($sql);
            $stmt->execute();
            $resultado = $stmt->fetchColumn();
            return $resultado;
        } catch (PDOException $e) {
            return false;
        }
    }
}
