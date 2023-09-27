
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

