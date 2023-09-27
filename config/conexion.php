<?php 
function conexion(){
    $pdo = new PDO('mysql:host=localhost;dbname=conexiones','root',''); 
    return $pdo;
    }
?>