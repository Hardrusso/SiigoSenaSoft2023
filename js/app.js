// se definen las variables a utilizar
const valorInputs = document.getElementById('conx');
const divResultados = document.getElementById('mostrarResultados');
//variables para tomar las pocisiones de las nuevas ubicaciones
const formulario = document.getElementById('formularioUbicacion');
const pocisionX = document.getElementById('posX');
const pocisionY = document.getElementById('posY');



//funcion para la creacion de los inputs del formulario de registrar ubicaciones
valorInputs.addEventListener('change', e => {
    const valorSeleccionado = parseInt(e.target.value);

    limpiarHTML();
    // crea label e input mediante cada iteracion agregandola al contenedor divResultados
    for (var i = 1; i <= valorSeleccionado ; i++) {

        let div = document.createElement("div");
        
        let labelNombre = document.createElement("label");
        labelNombre.id = "nombre" + i;
        labelNombre.textContent = "Conexion"+ i;
        labelNombre.classList.add('block','mb-2', 'text-sm', 'font-medium', 'text-gray-900', 'dark:text-white')

        let nombreInput = document.createElement("input");
        nombreInput.type = "text";
        nombreInput.name = "conexion" + i;
        nombreInput.classList.add('bg-gray-50', 'border', 'border-gray-300', 'text-gray-900', 'text-sm', 'rounded-lg', 'focus:ring-blue-500', 'focus:border-blue-500', 'block', 'w-full', 'p-2.5', 'dark:bg-gray-600', 'dark:border-gray-500', 'dark:placeholder-gray-400', 'dark:text-white')
        div.appendChild(labelNombre);
        div.appendChild(nombreInput);

        let labelpeso = document.createElement("label");
        labelpeso.id = "peso" + i;
        labelpeso.textContent = "Peso"+ i;
        labelpeso.classList.add('block','mb-2', 'text-sm', 'font-medium', 'text-gray-900', 'dark:text-white')


        let pesoInput = document.createElement("input");
        pesoInput.type = "text";
        pesoInput.name = "peso" + i;
        pesoInput.classList.add('bg-gray-50', 'border', 'border-gray-300', 'text-gray-900', 'text-sm', 'rounded-lg', 'focus:ring-blue-500', 'focus:border-blue-500', 'block', 'w-full', 'p-2.5', 'dark:bg-gray-600', 'dark:border-gray-500', 'dark:placeholder-gray-400', 'dark:text-white')
        div.appendChild(labelpeso);
        div.appendChild(pesoInput);

        divResultados.appendChild(div)
    }
})

// limpia el contenedor eliminado los elementos agregados mediante appendChild
function limpiarHTML() {
    while (divResultados.firstChild) {
        divResultados.removeChild(divResultados.firstChild)
    }
}

function crearELemento(posX, posY,nombre){
    const mapa = document.getElementById('mapa');

    // const imagen = document.createElement('img')
    // imagen.src = "/img/posicion.png"
    // imagen.classList.add('w-46')

    const nombrePos = document.createElement('p')
    nombrePos.textContent = `${nombre}`
    nombrePos.classList.add('text-sm','mt-1')

    const puntoRojo = document.createElement('div');
        puntoRojo.className = 'red-dot';
        puntoRojo.style.left = posX + 'px';
        puntoRojo.style.top = posY + 'px';
    puntoRojo.appendChild(nombrePos)
    mapa.appendChild(puntoRojo);
}

crearELemento(25,45,'eduar');
crearELemento(55,65,'jonathan');




