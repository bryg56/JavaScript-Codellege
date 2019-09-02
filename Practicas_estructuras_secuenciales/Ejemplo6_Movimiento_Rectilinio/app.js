let distancia_p = document.getElementById('calcula');
eventListener();

function eventListener() {
    distancia_p.addEventListener('click', Recorre);
}

function Recorre() {
    let velo = Number(document.getElementById('velocidad').value);
    let temp = Number(document.getElementById('tiempo').value);
    let distancia = 0;
    distancia = velo * temp;
    let imprime = document.getElementById('resultado');
    imprime.innerHTML = distancia;
}