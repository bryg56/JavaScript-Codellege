let boton_C = document.getElementById('botonC');
eventListener();

function eventListener() {
    boton_C.addEventListener('click', ObtenerArea);
}

function ObtenerArea() {
    let a = Number(document.getElementById('ladoA').value);
    let b = Number(document.getElementById('ladoB').value);
    let c = Number(document.getElementById('ladoC').value);
    let area = 0;
    area = ((c * b) + ((b * (a - c)) / 2));
    let imprime = document.getElementById('resultado');
    imprime.innerHTML = area;

}