let bton_c = document.getElementById('calc');
let imprime = document.getElementById('presupuesto');

event();

function event() {
    bton_c.addEventListener('click', calcula);
}

function calcula() {
    let personas = Number(document.getElementById('personas').value);
    // console.log(c1 + "Sabe");

    let presupuesto = 0;
    if (personas > 200 && personas <= 300) {
        presupuesto = personas * 85;
    } else if (personas > 300) {
        presupuesto = personas * 75;
    } else {
        presupuesto = personas * 95;
    }

    imprime.innerHTML = presupuesto;
}