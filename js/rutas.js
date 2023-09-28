const select = document.getElementById('conexionInicial');
const resultadosDist = document.getElementById('distancias');
const resultadosRuta = document.getElementById('rutas');

document.addEventListener('DOMContentLoaded', () => {
    select.addEventListener('change', mostrarResultado)
})

//funcion para mostrar los resultados obtenidos 
function mostrarResultado(e) {
    limpiarHTML()
    const datosJSON = JSON.parse( localStorage.getItem('datos'));
    const puntoInicio = e.target.value;
    
    const {distancia, rutas}   = calcularDistanciasYRutasDesdeInicio(datosJSON, puntoInicio);
    const ruta = rutas;
    for (const puntoRuta in ruta) {
        if (ruta.hasOwnProperty(puntoRuta)) {
            console.log(`${puntoRuta}: [${ruta[puntoRuta].join(', ')}]`);
            const nuevaDistancia = document.createElement('p')
            nuevaDistancia.classList.add('p-2','text-medium')
            nuevaDistancia.innerHTML = `Desde <span class="font-bold">${puntoInicio}</span> hasta <span class="font-bold">${puntoRuta}</span> tiene que tomar la siguiente ruta: ${ruta[puntoRuta].join('- ')}`;
            resultadosDist.appendChild(nuevaDistancia)
        }
    }

    const distancias = distancia;
    for (const clave in distancias) {
        if (distancias.hasOwnProperty(clave)) {
            console.log(`${clave}: ${distancias[clave]}`);
            nuevaRuta = document.createElement('p')
            nuevaRuta.classList.add('p-2','text-medium')
            nuevaRuta.innerHTML = `Tiene una distancia de:<span class="font-bold"> ${distancias[clave]}</span>`;
            resultadosRuta.appendChild(nuevaRuta)
        }
    }

}

//se usa para limpiar el contenido de ciertos contenedores
function limpiarHTML() {
    while(resultadosRuta.firstChild) {
        resultadosRuta.removeChild(resultadosRuta.firstChild);
    }
    while(resultadosDist.firstChild) {
        resultadosDist.removeChild(resultadosDist.firstChild);
    }
}

//funcion del algoritmo
function calcularDistanciasYRutasDesdeInicio(data, inicio) {
    const ubicaciones = data.ubicaciones;
    const conexiones = data.conexiones;

    const distancia = {};
    const rutas = {};
    const nodosNoVisitados = new Set();

    ubicaciones.forEach(ubicacion => {
        distancia[ubicacion.nombre] = Infinity;
        rutas[ubicacion.nombre] = [];
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
            if (conexion.ubicacion1 === nodoActual || conexion.ubicacion2 === nodoActual) {
                const vecino = conexion.ubicacion1 === nodoActual ? conexion.ubicacion2 : conexion.ubicacion1;
                const pesoTotal = distancia[nodoActual] + conexion.peso;
                if (pesoTotal < distancia[vecino]) {
                    distancia[vecino] = pesoTotal;
                    rutas[vecino] = [...rutas[nodoActual], vecino];
                }
            }
        });
    }

    return { distancia, rutas };
}









