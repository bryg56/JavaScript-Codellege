let boton_c = document.getElementById('calcula');
event();

function event() {
    boton_c.addEventListener('click', convertidor);
}

function convertidor() {
    let metros = Number(document.getElementById('metros').value);
    let calculo = 0;
    calculo = metros * 39.3701;
    let imprime = document.getElementById('Resultado');
    imprime.innerHTML = calculo;
}