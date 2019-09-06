let bton_c = document.getElementById('calc');
let imprime = document.getElementById('precio');

event();

function event() {
    bton_c.addEventListener('click', calcula);
}

function calcula() {
    let personas = Number(document.getElementById('personas').value);
    let camion = document.getElementById('camion').value;

    console.log(camion + "Sabe");

    let presupuesto = 20;
    if (camion == "A" || camion == "a") {
        if (personas > 20) {
            presupuesto = 1.5 * personas;
        } else {
            presupuesto = 1.5 * 20;
        }
    } else if (camion == "B" || camion == "b") {
        if (personas > 20) {
            presupuesto = 2 * personas;
        } else {
            presupuesto = 2 * 20;
        }
    } else if (camion == "C" || camion == "c") {
        if (personas > 20) {
            presupuesto = 2.5 * personas;
        } else {
            presupuesto = 2.5 * 20;
        }
    } else if (camion == "D" || camion == "d") {
        if (personas > 20) {
            presupuesto = 3 * personas;
        } else {
            presupuesto = 3 * 20;
        }
    }

    imprime.innerHTML = presupuesto;
}