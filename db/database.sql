CREATE DATABASE IF NOT EXISTS conexiones;
USE conexiones ;

CREATE TABLE archivos(
id int(5) not null auto_increment,
archivo VARCHAR(50) not null,
CONSTRAINT pk_archivos PRIMARY KEY (id)
)ENGINE=InnoDB;