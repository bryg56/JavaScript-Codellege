let bton_c = document.getElementById('buton');
let imprimer = document.getElementById('resultado');
event();

function event() {
    bton_c.addEventListener('click', calcula);
}

function calcula() {
    let n1 = Number(document.getElementById('nA').value);
    let n2 = Number(document.getElementById('nB').value);
    let n3 = Number(document.getElementById('nC').value);
    let n4 = Number(document.getElementById('nD').value);
    let presupuesto = Number(document.getElementById('presupuesto').value);
    let suma = 0;
    suma = n1 + n2 + n3 + n4;
    if (presupuesto >= suma) {
        imprimer.innerHTML = `<span>El precio esta andentro del presupuesto total:${suma}</span>`;
    } else if (presupuesto < suma) {
        imprimer.innerHTML = `<span>El precio esta afuera del presupuesto total:${suma}</span>`;
    }
}