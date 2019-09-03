let boton_c = document.getElementById('calcula');
event();

function event() {
    boton_c.addEventListener('click', presupuesto);
}

function presupuesto() {
    let metros = Number(document.getElementById('metros').value);
    let ancho = Number(document.getElementById('ancho').value);
    let base = Number(document.getElementById('base').value);
    let costo = Number(document.getElementById('costo').value);
    let calculo = 0;
    calculo = metros * ancho * base;
    calculo *= 1000;
    calculo *= costo;
    let imprime = document.getElementById('Resultado');
    imprime.innerHTML = calculo;
}