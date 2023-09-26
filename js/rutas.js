const data = {
"ubicaciones": [
    {
    "nombre": "A",
    "posX": 20,
    "posY": 20
    },
    {
    "nombre": "B",
    "posX": 45,
    "posY": 60
    },
    {
    "nombre": "C",
    "posX": 79,
    "posY": 90
    },
    {
    "nombre": "D",
    "posX": 56,
    "posY": 79
    },
    {
    "nombre": "E",
    "posX": 86,
    "posY": 19
    }
],
"conexiones": [
    {
    "ubicacion1": "A",
    "ubicacion2": "B",
    "peso": 20
    },
    {
    "ubicacion1": "C",
    "ubicacion2": "D",
    "peso": 50
    },
    {
    "ubicacion1": "A",
    "ubicacion2": "C",
    "peso": 70
    },
    {
    "ubicacion1": "D",
    "ubicacion2": "E",
    "peso": 10
    },
    {
    "ubicacion1": "B",
    "ubicacion2": "E",
    "peso": 80
    },
    {
    "ubicacion1": "A",
    "ubicacion2": "D",
    "peso": 5
    }
    
]
};

function algoritmo(data, inicio) {
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

const puntoInicio = "C"; // Cambia el punto de inicio según tus necesidades
const resultado = algoritmo(data, puntoInicio);
console.log("Distancias:", resultado.distancia);
console.log("Ruta definitiva:", resultado.ruta);
