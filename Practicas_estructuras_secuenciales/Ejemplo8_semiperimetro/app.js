let boton_c = document.getElementById('calcula');
eventListener();

function eventListener() {
    boton_c.addEventListener('click', calcular);
}

function calcular() {
    let a = Number(document.getElementById('ladoA').value);
    let b = Number(document.getElementById('ladoB').value);
    let c = Number(document.getElementById('ladoC').value);
    let semi = 0;
    semi = a + b + c
    semi /= 2;
    let area = 0;
    semi = semi * (semi - a) * (semi - b) * (semi - c);
    area = Math.sqrt(semi);
    let imprime = document.getElementById('resultado');
    imprime.innerHTML = area;
}