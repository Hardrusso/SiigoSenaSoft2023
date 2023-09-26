CREATE IF NOT EXISTS rutas;
USE rutas ;

CREATE TABLE ubicaciones(
    id int(5) not null auto_increment,
    nombre VARCHAR(30) not NULL,
    peso int(5) not null,
    CONSTRAINT pk_ubicaciones PRIMARY KEY (id)
)ENGINE = InnoDB;

CREATE TABLE conexiones(
    id int(5) not null auto_increment,
    id_ubicaciones int(5) not null,
    ruta1 VARCHAR(30) not null,
    ruta2 VARCHAR(30) not null,
    CONSTRAINT pk_conexiones PRIMARY KEY (id),
    CONSTRAINT fk_conexion_ubicaciones FOREIGN KEY (id_ubicaciones) REFERENCES ubicaciones(id),
)ENGINE = InnoDB;