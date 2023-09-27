//tomamos los vaores JSON que se guardaron en el localStorage
const datosJSON = JSON.parse( localStorage.getItem('datos'));

// Obtén una referencia al canvas y su contexto
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Función para dibujar las ubicaciones en el canvas
function dibujarUbicaciones(ubicaciones) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas

    for (const ubicacion of ubicaciones) {
        // Dibujar un círculo en las coordenadas posX y posY
        ctx.beginPath();
        ctx.arc(ubicacion.posX, ubicacion.posY, 5, 0, Math.PI * 2);
        ctx.fillStyle = "blue"; // Puedes cambiar el color aquí
        ctx.fill();
        ctx.closePath();

        // Etiquetar la ubicación
        ctx.fillStyle = "black"; // Color del texto
        ctx.font = "12px Arial"; // Tamaño y tipo de fuente
        ctx.fillText(ubicacion.nombre, ubicacion.posX - 5, ubicacion.posY - 10);
    }
}
// Llama a la función para dibujar las ubicaciones
dibujarUbicaciones(datosJSON.ubicaciones);

function mostrarRuta(data, inicio) {
    const ubicaciones = data.ubicaciones;
    const conexiones = data.conexiones;

    const distancia = {};
    const previo = {};
    const nodosNoVisitados = new Set();

    ubicaciones.forEach(ubicacion => {
        distancia[ubicacion.nombre] = Infinity;
        previo[ubicacion.nombre] = undefined;
        nodosNoVisitados.add(ubicacion.nombre);
    });

    distancia[inicio] = 0;

    while (nodosNoVisitados.size > 0) {
        let nodoActual = null;
        nodosNoVisitados.forEach(ubicacion => {
        if (!nodoActual || distancia[ubicacion] < distancia[nodoActual]) {
            nodoActual = ubicacion;
        }
        });

        nodosNoVisitados.delete(nodoActual);

        conexiones.forEach(conexion => {
        if (conexion.ubicacion1 === nodoActual) {
            const vecino = conexion.ubicacion2;
            const pesoTotal = distancia[nodoActual] + conexion.peso;
            if (pesoTotal < distancia[vecino]) {
            distancia[vecino] = pesoTotal;
            previo[vecino] = nodoActual;
            }
        }
        });
    }

    // Construir la ruta más corta
    const ruta = [];
    let nodo = inicio;
    while (previo[nodo] !== undefined) {
        ruta.unshift(nodo);
        nodo = previo[nodo];
    }

    ruta.unshift(inicio);

    return {
        distancia: distancia,
        ruta: ruta // Cambiamos esto de rutasUtilizadas a ruta
    };
}
// const puntoInicio = "C"; // Cambia el punto de inicio según tus necesidades
// const resultado = mostrarRuta(datosJSON, puntoInicio);
// console.log("Distancias:", resultado.distancia);
// console.log("Ruta definitiva:", resultado.ruta);

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