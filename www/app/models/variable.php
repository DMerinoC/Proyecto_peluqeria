<?php
require_once '../../config/conexion.php';
class variable
{

    public $codigo;
    public $llave;
    public $valor;
    public $conexion;

    function __construct($codigo, $llave, $valor, $iniciarBD = true)
    {
        $this->codigo = $codigo;
        $this->llave = $llave;
        $this->valor = $valor;
        if ($iniciarBD) {
            $this->conexion = new conexion();
        }
    }

    public static function Listar()
    {
        $variables = [];
        $conexion = new conexion();
        $sql = "CALL ListarVariables;";
        $stmt = $conexion->prepare($sql);
        $stmt->execute();
        while ($datos = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $variable = new variable($datos["idVariable"], $datos["cNombre"], $datos["cValor"], false);
            array_push($variables, $variable);
        }
        return $variables;
    }

    public function Guardar()
    {
        try {
            $codigo = $this->codigo;
            $llave = $this->llave;
            $valor = $this->valor;
            $sql = "CALL GuardarVariable(?, ?, ?);";
            $stmt = $this->conexion->prepare($sql);
            $stmt->execute([$codigo, $llave, $valor]);
            return true;
        } catch (PDOException $e) {
            return false;
        }
    }
    public function Actualizar()
    {
        try {
            $codigo = $this->codigo;
            $valor = $this->valor;
            $sql = "CALL actualizarVariable(?,?);";
            $stmt = $this->conexion->prepare($sql);
            $stmt->execute([$codigo, $valor]);
            return true;
        } catch (PDOException $e) {
            return false;
        }
    }
    public function Eliminar()
    {
        try {
            $codigo = $this->codigo;
            $sql = "CALL EliminarVariable(?);";
            $stmt = $this->conexion->prepare($sql);
            $stmt->execute([$codigo]);
            return true;
        } catch (PDOException $e) {
            return false;
        }
    }
}
