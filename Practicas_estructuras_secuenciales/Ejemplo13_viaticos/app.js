let boton_c = document.getElementById('calcula');
event();

function event() {
    boton_c.addEventListener('click', viaticos);
}

function viaticos() {
    let dias = Number(document.getElementById('dias').value);
    let hotel = Number(document.getElementById('hotel').value);
    let comida = Number(document.getElementById('Comida').value);
    let calculo = 0;
    calculo = (hotel * dias) + (comida * dias) + (dias * 100);
    let imprime = document.getElementById('Resultado');
    imprime.innerHTML = calculo;
}