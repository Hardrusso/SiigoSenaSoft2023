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



