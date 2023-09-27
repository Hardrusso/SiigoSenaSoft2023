<?php 
require_once("main.php");
require_once('conexion.php');


//almacenando datos de los inputs enviados desde el formulario del archivo user_new
$nombre = limpiar_cadena($_POST['nombre']);
$email = limpiar_cadena($_POST['email']);
$clave = limpiar_cadena($_POST['password']);

$clave=password_hash($clave, PASSWORD_BCRYPT,["cost"=>10]);

$guardar_usuario= conexion();
    $guardar_usuario=$guardar_usuario->prepare("INSERT INTO usuarios(nombre,email, password) VALUES(:nombre,:email,:password)"); 

    $marcadores=[
        ":nombre"=>$nombre,
        ":email"=>$email,
        ":password"=>$clave
    ];
    $guardar_usuario->execute($marcadores);

    if($guardar_usuario->rowCount()==1){
        echo '
        Usuario Registrado!
        ';
    }else{
        echo '
        Error al registrar!
        ';
    }
    $guardar_usuario=null;