<?php 
require_once("main.php");

//almacenando datos de los inputs enviados desde el formulario del archivo user_new
$nombre = limpiar_cadena($_POST['nombre']);
$email = limpiar_cadena($_POST['email']);
$clave = limpiar_cadena($_POST['password']);

if($nombre=="" || $email=="" || $clave==""){
    echo 2;
    exit();
}

if($email != ""){

    if(filter_var($email, FILTER_VALIDATE_EMAIL)){

        $check_email = conexion();
        $check_email = $check_email->query("SELECT email FROM usuarios WHERE email='$email'");

            if($check_email->rowCount()>0){ //rowCount nos devuleve cuantos registros se selecciono en la consulta de la base de datos y se hace la validacion
                echo "correoExiste";
                exit();
            }
        }else{
            echo "correoInvalido";
            exit();
        }
$check_email=null;        
}
     //esta funcion lo que hace es cerrar la conexion  que se abrio en la linea 63


$clave=password_hash($clave, PASSWORD_BCRYPT,["cost"=>10]);

$guardar_usuario= conexion();
    $guardar_usuario=$guardar_usuario->prepare("INSERT INTO usuarios(nombre,email, password,estado) VALUES(:nombre,:email,:password,:estado)"); 

    $marcadores=[
        ":nombre"=>$nombre,
        ":email"=>$email,
        ":password"=>$clave,
        "estado"=> "inactivo"
    ];
    $guardar_usuario->execute($marcadores);

    if($guardar_usuario->rowCount()==1){
        echo 1 ;

    }else{
        echo 3 ;
    }
    $guardar_usuario=null;