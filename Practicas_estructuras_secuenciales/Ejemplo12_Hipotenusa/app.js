let boton_c = document.getElementById('calcula');
event();

function event() {
    boton_c.addEventListener('click', hipotenusa);
}

function hipotenusa() {
    let a = Number(document.getElementById('ladoA').value);
    let b = Number(document.getElementById('ladoB').value);
    let calculo = 0;
    calculo = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    let imprime = document.getElementById('Resultado');
    imprime.innerHTML = calculo;
}