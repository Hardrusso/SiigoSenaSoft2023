
const formulario = document.getElementById('formularioUbicacion');
const formularioConex = document.getElementById('formularioConexion');
const selectConxA = document.getElementById('conexionA');
const selectConxB = document.getElementById('conexionB');

document.addEventListener('DOMContentLoaded', () => {
    formulario.addEventListener('submit', tomarUbicacion);
    
    cargarRutas();
})

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

// Escuchar el evento de envío del formulario
function tomarUbicacion() {
    const data = JSON.parse( localStorage.getItem('datos'));
    // Obtener los valores de los campos del formulario
    let nombre = formulario.elements.nombre.value;
    let posX = formulario.elements.posicionX.value;
    let posY = formulario.elements.posicionY.value;

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

// function tomarConexion() {
//     const data = JSON.parse( localStorage.getItem('datos'));
//     let conxA = formulario.elements.conexionA.value;
//     let conxB = formulario.elements.conexionB.value;
//     let peso = formulario.elements.peso.value;

//     // Crear un objeto con los valores del formulario
//     let nuevaConexion = {
//         "ubicacion1": conxA,
//         "ubicacion2": conxB,
//         "peso": parseInt(peso)
//     };
//     data.ubicaciones.push(nuevaConexion);

//     const jsonString = JSON.stringify(data);
//     localStorage.setItem('datos', jsonString);
// }

// function mostrarConexiones() {
//     // Iterar a través del arreglo de ubicaciones y agregar opciones al select
//     data.ubicaciones.forEach(function(ubicacion) {
//     var option = document.createElement("option");
//     option.value = ubicacion.nombre;
//     option.text = ubicacion.nombre;
//     selectConxA.appendChild(option);
//     selectConxB.appendChild(option);
//     });
// }

//se recibe y valida el archivo JSON que se cargo en el formulario
document.getElementById('loadButton').addEventListener('click', function () {
    const fileInput = document.getElementById('fileInput');
    // Verifica si se seleccionó un archivo
    if (fileInput.files.length === 0) {
        alert('Por favor, seleccione un archivo JSON.');
        return;
    }
    const selectedFile = fileInput.files[0];
    // Verifica si el archivo seleccionado es un archivo JSON
    if (selectedFile.type !== 'application/json') {
        alert('El archivo seleccionado no es un archivo JSON válido.');
        return;
    }
    const reader = new FileReader();
    reader.onload = function (event) {
        try {
        const datosJSON = JSON.parse(event.target.result);
        // Aquí puedes trabajar con el contenido JSON, por ejemplo, mostrarlo en la consola
        const jsonString = JSON.stringify(datosJSON);
        localStorage.setItem('datos', jsonString);
        } catch (error) {
        alert('Error al analizar el archivo JSON.');
        }
    };
    reader.readAsText(selectedFile);
    });