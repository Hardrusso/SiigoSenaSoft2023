//tomamos los vaores JSON que se guardaron en el localStorage
const datosJSON = JSON.parse( localStorage.getItem('datos'));


document.addEventListener('DOMContentLoaded', () => {
    const mapa = document.getElementById('mapa');
    //llamado de las funciones
    mostrarELemento(datosJSON);
})

// funciones
function mostrarELemento(archivoJson){
    const {ubicaciones} = archivoJson
    console.log(ubicaciones);
    ubicaciones.forEach(obj => {
        const {nombre, posX, posY} = obj;
        crearPunto(nombre, posX, posY);
    })
}

function crearPunto(nombre, posXPercentage, posYPercentage) {
    
    mapa.classList.add('h-[30rem]', 'w-[70rem]');
    mapa.style.position = 'relative';

    const nombrePos = document.createElement('p');
    nombrePos.textContent = `${nombre}`;
    nombrePos.classList.add('text-sm', 'mt-2');

    const puntoRojo = document.createElement('div');
    puntoRojo.className = 'red-dot';

    // Convierte los porcentajes en píxeles basados en el tamaño del contenedor
    const containerWidth = mapa.clientWidth;
    const containerHeight = mapa.clientHeight;
    const posX = (containerWidth * posXPercentage) / 100;
    
    const posY = (containerHeight * posYPercentage) / 100;

    puntoRojo.style.position = 'absolute';
    puntoRojo.style.left = posX + 'px';
    puntoRojo.style.top = posY + 'px';
    puntoRojo.appendChild(nombrePos);
    mapa.appendChild(puntoRojo);
    
    
}
crearPunto('Ubicaciones', 0, 0);

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