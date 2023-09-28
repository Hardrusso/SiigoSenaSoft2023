const datosJSON = JSON.parse( localStorage.getItem('datos'));

function calcularDistanciasDesdeInicio(data, inicio) {
    const ubicaciones = data.ubicaciones;
    const conexiones = data.conexiones;

    const distancia = {};
    const nodosNoVisitados = new Set();

    ubicaciones.forEach(ubicacion => {
        distancia[ubicacion.nombre] = Infinity;
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
                }
            }
        });
    }

    return distancia;
}




const inicio = 'ZAZ';
const distancias = calcularDistanciasDesdeInicio(datosJSON, inicio);

const inicio2 = 'CLO';
const distancias2 = calcularDistanciasDesdeInicio(datosJSON, inicio2);

const inicio3 = 'MAD';
const distancias3 = calcularDistanciasDesdeInicio(datosJSON, inicio3);


console.log(distancias);

console.log(distancias2);

console.log(distancias3);




