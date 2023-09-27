<?php

if(!isset($_SESSION)){
    session_start();
} 

function conexion(){
    $pdo = new PDO('mysql:host=localhost;dbname=conexiones','root',''); 
    return $pdo;
}

//sirve para limpiar cadenas de texto 
function limpiar_cadena($cadena){
        $cadena = trim($cadena);      // la funcion trim elimina espacios en blanco del inicio o al final de la cadena
        $cadena = stripcslashes($cadena);  //stripcslashes quita las barras e un string con comillas escapadas
        $cadena = str_ireplace("<script>", " " ,$cadena); //reemplaza un texto mediante una busqueda, esta version es incensible para mayusculas y minusculas
		//aqui esta reemplazando los primeros parametros por espacios vacios...Esto se usa para evitar inyeccion SQL
        $cadena = str_ireplace("</script>", " " ,$cadena); 
        $cadena = str_ireplace("<script src", "", $cadena);
		$cadena = str_ireplace("<script type=", "", $cadena);
		$cadena = str_ireplace("SELECT * FROM", "", $cadena);
		$cadena = str_ireplace("DELETE FROM", "", $cadena);
		$cadena = str_ireplace("INSERT INTO", "", $cadena);
		$cadena = str_ireplace("DROP TABLE", "", $cadena);
		$cadena = str_ireplace("DROP DATABASE", "", $cadena);
		$cadena = str_ireplace("TRUNCATE TABLE", "", $cadena);
		$cadena = str_ireplace("SHOW TABLES;", "", $cadena);
		$cadena = str_ireplace("SHOW DATABASES;", "", $cadena);
		$cadena = str_ireplace("<?php", "", $cadena);
		$cadena = str_ireplace("?>", "", $cadena);
		$cadena = str_ireplace("--", "", $cadena);
		$cadena = str_ireplace("^", "", $cadena);
		$cadena = str_ireplace("<", "", $cadena);
		$cadena = str_ireplace("[", "", $cadena);
		$cadena = str_ireplace("]", "", $cadena);
		$cadena = str_ireplace("==", "", $cadena);
		$cadena = str_ireplace(";", "", $cadena);
		$cadena = str_ireplace("::", "", $cadena);
		$cadena=trim($cadena);
		$cadena=stripslashes($cadena);
		return $cadena;
}


