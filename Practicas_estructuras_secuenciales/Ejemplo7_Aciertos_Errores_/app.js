let puntaje_b = document.getElementById('calcula');
eventListener();

function eventListener() {
    puntaje_b.addEventListener('click', puntaje);
}

function puntaje() {
    let Acierto = Number(document.getElementById('aciertos').value);
    let errores = Number(document.getElementById('error').value);
    let blanco = Number(document.getElementById('blanco').value);
    let puntaje = 0;
    puntaje = (Acierto * 4) + (errores * (-1)) + (blanco * 0);
    let imprime = document.getElementById('resultado');
    imprime.innerHTML = puntaje;
}