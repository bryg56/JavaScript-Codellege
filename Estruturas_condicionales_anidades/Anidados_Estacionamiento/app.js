let bton_c = document.getElementById('boton');
let imprimer = document.getElementById('resultado');
event();

function event() {
    bton_c.addEventListener('click', calcula);
}

function calcula() {
    let h = Number(document.getElementById('horas').value);
    let costo = 0;
    if (h <= 2) {
        costo = h * 5;
    } else if (h == 3) {
        costo = h * 4;
    } else if (h > 3 && h <= 5) {
        costo = h * 3;
    } else if (h >= 10) {
        costo = h * 2;
    }
    imprimer.innerHTML = costo;
}