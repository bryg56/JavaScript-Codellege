let bton_c = document.getElementById('buton');
let imprimer = document.getElementById('resultado');
event();

function event() {
    bton_c.addEventListener('click', calcula);
}

function calcula() {
    let n1 = Number(document.getElementById('nA').value);
    let n2 = Number(document.getElementById('nB').value);
    if (n1 > n2) {
        if ((n1 % n2) == 0) {
            imprimer.innerHTML = "Si es multiplo";
        } else {
            imprimer.innerHTML = "No es multiplo";
        }
    } else {
        if ((n2 % n1) == 0) {
            imprimer.innerHTML = "Si es multiplo";
        } else {
            imprimer.innerHTML = "No es multiplo";
        }
    }

}