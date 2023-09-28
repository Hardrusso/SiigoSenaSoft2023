//Se definen la constantes a usar
const formulario = document.getElementById('formularioUbicacion');
const formularioConex = document.getElementById('formularioConexion');
const selectPunto = document.getElementById('conexionInicial');
const borrarStorage = document.getElementById('borrarStorage');

document.addEventListener('DOMContentLoaded', () => {
    borrarStorage.addEventListener('click', deleteStorage)
    formularioConex.addEventListener('submit', tomarConexion)
    formulario.addEventListener('submit', tomarUbicacion);
    cargarRutas();
    mostrarConexiones();
})

//funcion para dibujar los puntos y las rutas
function cargarRutas(){
    const data = JSON.parse( localStorage.getItem('datos'));
    // Obtener el canvas y su contexto
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    // Ajustar las coordenadas para que se adapten al canvas
    data.ubicaciones.forEach(function(ubicacion) {
        ubicacion.posX += canvas.width / 2;
        ubicacion.posY += canvas.height / 2;
    });

    // Dibujar las ubicaciones en el canvas
    data.ubicaciones.forEach(function(ubicacion) {
        ctx.beginPath();
        ctx.arc(ubicacion.posX, ubicacion.posY, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.font = "12px Arial";
        ctx.fillText(ubicacion.nombre, ubicacion.posX + 10, ubicacion.posY - 10);
    });

    // Dibujar las conexiones en el canvas
    ctx.strokeStyle = "green";
    ctx.lineWidth = 2;
    data.conexiones.forEach(function(conexion) {
        var ubicacion1 = data.ubicaciones.find(function(ubicacion) {
            return ubicacion.nombre === conexion.ubicacion1;
        });
        var ubicacion2 = data.ubicaciones.find(function(ubicacion) {
            return ubicacion.nombre === conexion.ubicacion2;
        });
        ctx.beginPath();
        ctx.moveTo(ubicacion1.posX, ubicacion1.posY);
        ctx.lineTo(ubicacion2.posX, ubicacion2.posY);
        ctx.stroke();
        ctx.fillStyle = "black";
        ctx.fillText(conexion.peso, (ubicacion1.posX + ubicacion2.posX) / 2, (ubicacion1.posY + ubicacion2.posY) / 2);
    });
}

// funcion para crear nuevos puntos de ubicacion
function tomarUbicacion(e) {
    let data = JSON.parse(localStorage.getItem('datos'));

    if (data === null) {
        data = {
            "ubicaciones": [],
            "conexiones": []
        };
    
        const jsonString = JSON.stringify(data);
        localStorage.setItem('datos', jsonString);
    }
    // Obtener los valores de los campos del formulario
    let nombre = formulario.elements.nombre.value;
    let posX = formulario.elements.posicionX.value;
    let posY = formulario.elements.posicionY.value;

    if(nombre === "" || posX === "" || posY === ""){
        e.preventDefault()
        alert('Define todos los campos');
        return;
    }

    // Crear un objeto con los valores del formulario
    let nuevaUbicacion = {
        "nombre": nombre,
        "posX": parseInt(posX),
        "posY": parseInt(posY)
    };
    data.ubicaciones.push(nuevaUbicacion);

    const jsonString = JSON.stringify(data);
    localStorage.setItem('datos', jsonString);
}

//funcion para crear conexiones entre los puntos
function tomarConexion(e) {
    const data = JSON.parse( localStorage.getItem('datos'));
    let conxA = formularioConex.elements.conexionA.value;
    let conxB = formularioConex.elements.conexionB.value;
    let peso = formularioConex.elements.peso.value;

    if(peso === "" ){
        e.preventDefault()
        alert('Define todos los campos');
        return;
    }
    if(isNaN(peso)){
        e.preventDefault()
        alert('El peso no esta Definido correctamente');
        return;
    }
    // Crear un objeto con los valores del formulario
    let nuevaConexion = {
        "ubicacion1": conxA,
        "ubicacion2": conxB,
        "peso": parseInt(peso)
    };
    data.conexiones.push(nuevaConexion);

    const jsonString = JSON.stringify(data);
    localStorage.setItem('datos', jsonString);
}

// muestra todas las ubicaciones en los respectivos selects
function mostrarConexiones() {
    const selectConxA = document.getElementById('conexionA');
    const selectConxB = document.getElementById('conexionB');

    const data = JSON.parse( localStorage.getItem('datos'));
    // Iterar a través del arreglo de ubicaciones y agregar opciones al select
    data.ubicaciones.forEach(function(ubicacion) {
        var option = document.createElement("option");
        option.value = ubicacion.nombre;
        option.text = ubicacion.nombre;

    selectConxB.appendChild(option);
    });

    data.ubicaciones.forEach(function(ubicacion) {
        var option = document.createElement("option");
        option.value = ubicacion.nombre;
        option.text = ubicacion.nombre;

    selectConxA.appendChild(option);
    });

    data.ubicaciones.forEach(function(ubicacion) {
        var option = document.createElement("option");
        option.value = ubicacion.nombre;
        option.text = ubicacion.nombre;

        selectPunto.appendChild(option);
    });
}
//funcion para borrar el localStorage
function deleteStorage() {
    const confirmar = confirm('Desea eliminar las ubicaciones?');
    if(confirmar){
        localStorage.removeItem('datos');
    }
}

