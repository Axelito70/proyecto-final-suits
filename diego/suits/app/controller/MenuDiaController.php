<?php
require_once '../config/conexion.php';

class MenuDia extends Conexion {
    public function obtener_datos() {
        $consulta = $this->obtener_conexion()->prepare("SELECT * FROM menu_dia");
        $consulta->execute();
        $datos = $consulta->fetchAll(PDO::FETCH_ASSOC);
        $this->cerrar_conexion();
        echo json_encode($datos);
    }

    public function insertar_datos() {
        $insercion = $this->obtener_conexion()->prepare("INSERT INTO menu_dia(nombre_platillo, precio, componentes, fecha_agregado, imagen_url) 
                                                         VALUES(:nombre_platillo, :precio, :componentes, :fecha_agregado, :imagen_url)");
        $nombre_platillo = $_POST['nombre_platillo'];
        $precio = $_POST['precio'];
        $componentes = $_POST['componentes'];
        $fecha_agregado = $_POST['fecha_agregado'];
        $imagen_url = $_POST['imagen_url'];

        $insercion->bindParam(':nombre_platillo', $nombre_platillo);
        $insercion->bindParam(':precio', $precio);
        $insercion->bindParam(':componentes', $componentes);
        $insercion->bindParam(':fecha_agregado', $fecha_agregado);
        $insercion->bindParam(':imagen_url', $imagen_url);
        
        if ($insercion->execute()) {
            echo json_encode([1, "Inserción correcta"]);
        } else {
            echo json_encode([0, "Inserción no realizada"]);
        }
    }

    public function actualizar_datos() {
        $actualizacion = $this->obtener_conexion()->prepare("UPDATE menu_dia SET nombre_platillo = :nombre_platillo, precio = :precio, 
                                                             componentes = :componentes, fecha_agregado = :fecha_agregado, 
                                                             imagen_url = :imagen_url WHERE id = :id");
        $nombre_platillo = $_POST['nombre_platillo'];
        $precio = $_POST['precio'];
        $componentes = $_POST['componentes'];
        $fecha_agregado = $_POST['fecha_agregado'];
        $imagen_url = $_POST['imagen_url'];
        $id = $_POST['id'];

        $actualizacion->bindParam(':nombre_platillo', $nombre_platillo);
        $actualizacion->bindParam(':precio', $precio);
        $actualizacion->bindParam(':componentes', $componentes);
        $actualizacion->bindParam(':fecha_agregado', $fecha_agregado);
        $actualizacion->bindParam(':imagen_url', $imagen_url);
        $actualizacion->bindParam(':id', $id);
        
        if ($actualizacion->execute()) {
            echo json_encode([1, "Actualización correcta", $id]);
        } else {
            echo json_encode([0, "Actualización no realizada"]);
        }
    }

    public function eliminar_datos() {
        $eliminar = $this->obtener_conexion()->prepare("DELETE FROM menu_dia WHERE id = :id");
        $id = $_POST['id'];
        $eliminar->bindParam(':id', $id);
        
        if ($eliminar->execute()) {
            echo json_encode([1, "Eliminación correcta"]);
        } else {
            echo json_encode([0, "Eliminación no realizada"]);
        }
    }

    public function precargar_datos() {
        $consulta = $this->obtener_conexion()->prepare("SELECT * FROM menu_dia WHERE id = :id");
        $id = $_POST['id'];
        $consulta->bindParam(':id', $id);
        $consulta->execute();
        $datos = $consulta->fetch(PDO::FETCH_ASSOC);
        echo json_encode($datos);
    }
}

// Crear instancia y llamar al método según el valor de `metodo` enviado por POST
$menuDia = new MenuDia();
$metodo = $_POST['metodo'];
$menuDia->$metodo();
?>
