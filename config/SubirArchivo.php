<?php

require_once('conexion.php');

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["archivo_json"])) {
    $nombre_archivo = $_FILES["archivo_json"]["name"];
    $tipo_archivo = $_FILES["archivo_json"]["type"];
    $tamaño_archivo = $_FILES["archivo_json"]["size"];
    $nombre_temporal = $_FILES["archivo_json"]["tmp_name"];

    // Verifica si el archivo es un JSON
    if ($tipo_archivo == "application/json") {

        // Mueve el archivo temporal al destino deseado
        $destino = "../uplodas/" . $nombre_archivo;

        if (move_uploaded_file($nombre_temporal, $destino)) {
            echo "El archivo JSON se ha subido correctamente.";
            exit();
        } else {
            echo "Error al subir el archivo.";
            exit();
        }
    } else {
        echo "El archivo debe ser de tipo JSON.";
        exit();
    }


    $query = $conexion->query("INSERT INTO conexiones (archivo) VALUES (:archivo)");
    
}
?>
