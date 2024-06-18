<?php
require_once '../../config/conexion.php';

class Cita
{
    public $Codigo;
    public $CodigoUsuario;
    public $NombreUsuario;
    public $CodigoServicio;
    public $NombreServicio;
    public $PrecioServicio;
    public $CodigoDescuento;
    public $Descuento;
    public $Descripcion;
    public $Fecha;
    public $Estado;
    public $conexion;

    public function __construct($Codigo, $CodigoUsuario, $NombreUsuario, $CodigoServicio, $NombreServicio, $PrecioServicio, $CodigoDescuento, $Descuento, $Descripcion, $Fecha, $Estado, $iniciarBD = true)
    {
        $this->Codigo = $Codigo;
        $this->CodigoUsuario = $CodigoUsuario;
        $this->NombreUsuario = $NombreUsuario;
        $this->CodigoServicio = $CodigoServicio;
        $this->NombreServicio = $NombreServicio;
        $this->PrecioServicio = $PrecioServicio;
        $this->CodigoDescuento = $CodigoDescuento;
        $this->Descuento = $Descuento;
        $this->Descripcion = $Descripcion;
        $this->Fecha = $Fecha;
        $this->Estado = $Estado;
        if ($iniciarBD) {
            $this->conexion = new conexion();
        }
    }
    public static function Listar()
    {
        $citas = [];
        $conexion = new conexion();
        $sql = "CALL ListarCitasAdmin();";
        $stmt = $conexion->prepare($sql);
        $stmt->execute();
        while ($datos = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $cita = new cita($datos["idcita"], "", $datos["cusuario"], "", $datos["nombre"], $datos["precio"], $datos["iddescuento"], $datos["descuento"], $datos["descripcion"], $datos["fecha"], $datos["estado"], false);
            array_push($citas, $cita);
        }
        return $citas;
    }
    public static function ListarCitaUsuario()
    {
        $citas = [];
        $conexion = new conexion();
        $sql = "CALL ListarCitasUsuario();";
        $stmt = $conexion->prepare($sql);
        $stmt->execute();
        while ($datos = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $cita = new cita("", $datos["idUsuario"], "", "", $datos["nombre"], $datos["precio"], $datos["iddescuento"], $datos["descuento"], $datos["descripcion"], $datos["fecha"], $datos["estado"], false);
            array_push($citas, $cita);
        }
        return $citas;
    }
    public function Eliminar()
    {
        try {
            $Codigo = $this->Codigo;
            $sql = "CALL EliminarCita(?);";
            $stmt = $this->conexion->prepare($sql);
            $stmt->execute([$Codigo]);
            return true;
        } catch (PDOException $e) {
            return false;
        }
    }
    public function Guardar()
    {
        try {
            $Codigo = $this->Codigo;
            $CodigoUsuario = $this->CodigoUsuario;
            $CodigoServicio = $this->CodigoServicio;
            $CodigoDescuento = $this->CodigoDescuento;
            $Fecha = $this->Fecha;
            $Estado = $this->Estado;
            $sql = "CALL GuardarCitaAdmin(?, ?, ?, ?, ?, ?);";
            $stmt = $this->conexion->prepare($sql);
            $stmt->execute([$Codigo, $CodigoUsuario, $CodigoServicio, $CodigoDescuento, $Fecha, $Estado]);
            $results = [];
            do {
                $results[] = $stmt->fetch(PDO::FETCH_ASSOC);
            } while ($stmt->nextRowset());

            return $results;
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
            return false;
        }
    }
    public function GuardarCitaUsuario()
    {
        try {
            $Codigo = $this->Codigo;
            $CodigoUsuario = $this->CodigoUsuario;
            $CodigoServicio = $this->CodigoServicio;
            $CodigoDescuento = $this->CodigoDescuento;
            $Fecha = $this->Fecha;
            $sql = "CALL crearCitaUsuario(?, ?, ?, ?, ?);";
            $stmt = $this->conexion->prepare($sql);
            $stmt->execute([$Codigo, $CodigoUsuario, $CodigoServicio, $CodigoDescuento, $Fecha]);
            $results = [];
            do {
                $results[] = $stmt->fetch(PDO::FETCH_ASSOC);
            } while ($stmt->nextRowset());

            return $results;
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
            return false;
        }
    }
    public function Actualizar()
    {
        try {
            $Codigo = $this->Codigo;
            $CodigoUsuario = $this->CodigoUsuario;
            $CodigoServicio = $this->CodigoServicio;
            $CodigoDescuento = $this->CodigoDescuento;
            $Fecha = $this->Fecha;
            $Estado = $this->Estado;
            $sql = "CALL GuardarCitaAdmin(?, ?, ?, ?, ?, ?);";
            $stmt = $this->conexion->prepare($sql);
            $stmt->execute([$Codigo, $CodigoUsuario, $CodigoServicio, $CodigoDescuento, $Fecha, $Estado]);
            $results = [];
            do {
                $results[] = $stmt->fetch(PDO::FETCH_ASSOC);
            } while ($stmt->nextRowset());

            return $results;
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
            return false;
        }
    }
    public function GenerarReporteCSV()
    {
        try {
            $conexion = new conexion();
            $sql = "CALL ListarCitasAdmin();";
            $stmt = $conexion->prepare($sql);
            $stmt->execute();
    
            $nombre_archivo = "reporte_citas_" . date('Ymd_His') . ".csv";
            $archivo = fopen($nombre_archivo, 'w');
    
            // Función personalizada para escribir en el archivo CSV con comillas dobles
            function cambiar_comillas($archivo, $data)
            {
                $linea = '';
                $encapsulador = '"';
                $limitador = ',';
    
                foreach ($data as $campo) {
                    $campo = str_replace($encapsulador, $encapsulador . $encapsulador, $campo);
                    $linea .= $encapsulador . $campo . $encapsulador . $limitador;
                }
    
                $linea = rtrim($linea, $limitador);
                $linea .= "\n";
                fwrite($archivo, $linea);
            }
    
            // Escribir las filas utilizando la función personalizada
            while ($fila = $stmt->fetch(PDO::FETCH_ASSOC)) {
                cambiar_comillas($archivo, $fila);
            }
    
            fclose($archivo);
            return $nombre_archivo; // retorna el nombre del archivo para descargarlo
    
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
            return false;
        }
    }
    
}