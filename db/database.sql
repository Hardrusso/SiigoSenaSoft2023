CREATE DATABASE IF NOT EXISTS conexiones;
USE conexiones ;

CREATE TABLE archivos(
id int(5) not null auto_increment,
archivo VARCHAR(50) not null,
CONSTRAINT pk_archivos PRIMARY KEY (id)
)ENGINE=InnoDB;

CREATE TABLE usuarios(
id int(5) not null auto_increment,
nombre VARCHAR(50) not null,
email VARCHAR (50) not null,
password VARCHAR(65) not null,
CONSTRAINT pk_usuarios PRIMARY KEY (id)
)ENGINE=InnoDB;