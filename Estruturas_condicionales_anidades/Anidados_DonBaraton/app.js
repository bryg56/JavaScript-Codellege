let bton_c = document.getElementById('calc');
let imprime = document.getElementById('precio');

event();

function event() {
    bton_c.addEventListener('click', calcula);
}

function calcula() {
    let costo = Number(document.getElementById('traje').value);
    // console.log(c1 + "Sabe");

    let presupuesto = 0;
    if (costo > 3600) {
        presupuesto = costo - (costo * .16);
    } else if (costo <= 3600) {
        presupuesto = costo - (costo * .07);
    }

    imprime.innerHTML = presupuesto;
}