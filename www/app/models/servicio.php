<?php
require_once '../../config/conexion.php';
class servicio
{

    public $codigo;
    public $nombre;
    public $precio;
    public $descripcion;
    public $imagenes;
    public $estado;
    public $tipoServicio;
    private $conexion;

    function __construct($codigo, $nombre, $precio, $descripcion, $imagenes, $estado, $tipoServicio, $iniciarBD = true)
    {
        $this->codigo = $codigo;
        $this->nombre = $nombre;
        $this->precio = $precio;
        $this->descripcion = $descripcion;
        $this->imagenes = $imagenes;
        $this->estado = $estado;
        $this->tipoServicio = $tipoServicio;
        if ($iniciarBD) {
            $this->conexion = new conexion();
        }
    }

    public static function Listar()
    {
        $servicios = [];
        $conexion = new conexion();
        $sql = "CALL ListarServicios;";
        $stmt = $conexion->prepare($sql);
        $stmt->execute();
        while ($datos = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $servicio = new servicio($datos["idServicio"], $datos["nombre"], $datos["precio"], $datos["descripcion"], $datos["imagenes"], $datos["estado"], $datos["idTipoServicio"], false);
            array_push($servicios, $servicio);
        }
        return $servicios;
    }

    public function Guardar()
    {
        try {
            $codigo = $this->codigo;
            $nombre = $this->nombre;
            $precio = $this->precio;
            $descripcion = $this->descripcion;
            $imagenes = $this->imagenes;
            $tipoServicio = $this->tipoServicio;
            $sql = "CALL GuardarServicio(?, ?, ?, ?, ?, ?);";
            $stmt = $this->conexion->prepare($sql);
            $stmt->execute([$codigo, $nombre, $precio, $descripcion, $imagenes, $tipoServicio]);
            return true;
        } catch (PDOException $e) {
            return false;
        }
    }
    public function Actualizar()
    {
        try {
            $codigo = $this->codigo;
            $nombre = $this->nombre;
            $precio = $this->precio;
            $descripcion = $this->descripcion;
            $imagenes = $this->imagenes;
            $tipoServicio = $this->tipoServicio;
            $sql = "CALL actualizarServicio(?, ?, ?, ?, ?,?);";
            $stmt = $this->conexion->prepare($sql);
            $stmt->execute([$codigo, $nombre, $precio, $descripcion, $imagenes, $tipoServicio]);
            return true;
        } catch (PDOException $e) {
            return false;
        }
    }
    public function Eliminar()
    {
        try {
            $codigo = $this->codigo;
            $sql = "CALL eliminarServicio(?);";
            $stmt = $this->conexion->prepare($sql);
            $stmt->execute([$codigo]);
            return true;
        } catch (PDOException $e) {
            return false;
        }
    }
}
