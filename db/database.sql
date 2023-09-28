CREATE DATABASE IF NOT EXISTS conexiones;
USE conexiones ;

CREATE TABLE usuarios(
id int(5) not null auto_increment,
nombre VARCHAR(50) not null,
email VARCHAR (50) not null,
password VARCHAR(65) not null,
estado VARCHAR(20) not null,
CONSTRAINT pk_usuarios PRIMARY KEY (id)
)ENGINE=InnoDB;