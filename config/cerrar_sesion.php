<?php 
require_once('main.php');


$id = $_GET['id'];

$estado = conexion();
$estado = $estado->query("UPDATE usuarios SET estado = 'inactivo' WHERE id = $id");

if(isset($_SESSION['login'])){
    session_destroy();
}
header('location:../index.php');
?>