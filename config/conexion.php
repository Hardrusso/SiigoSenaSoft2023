<?php 
$host = "localhost"; 
$dbname = "conexiones"; 
$usuario = "root"; 
$contraseña = ""; 

// Establecer la conexión PDO
$conexion = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $usuario, $contraseña);
?>