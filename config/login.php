<?php 

require_once('main.php');

$usuario=limpiar_cadena($_POST['email']);
$clave=limpiar_cadena($_POST['password']);


if($usuario=="" ||  $clave==""){
    echo 3;
    exit();
}

$check_user=conexion();
$check_user=$check_user->query("SELECT * FROM usuarios WHERE email ='$usuario'");
if($check_user->rowCount()==1){ 

$check_user=$check_user->fetch(); 

if($check_user['email']==$usuario && password_verify($clave, $check_user['password'])){ //password_verify comprueba si un texto coincide con una clave procesada con el hash

    if($check_user['estado'] == 'activo'){
        echo 'logeado';
        
    }else{
        $id = $check_user['id'];
        $estado = conexion();
        $estado = $estado->query("UPDATE usuarios SET estado ='activo' WHERE id = $id");

        $_SESSION['login'] = $check_user;
        echo 1;
        exit();
    }

}else{
    echo 2;
    exit();

    }
}else{
    echo 2;
    exit();
}
$check_user=null;


?>