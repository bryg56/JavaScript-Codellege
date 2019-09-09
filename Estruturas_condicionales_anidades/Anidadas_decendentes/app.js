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
    if (n1 > n2 && n1 > n3) {
        if (n2 > n3) {
            imprimer.innerHTML = `<span>${n1} , ${n2} , ${n3}</span>`;
        } else {
            imprimer.innerHTML = `<span>${n1} , ${n3} , ${n2}</span>`;
        }
        return;
    } else if (n2 > n1 && n2 > n3) {
        if (n1 > n3) {
            imprimer.innerHTML = `<span>${n2} , ${n1} , ${n3}</span>`;
        } else {
            imprimer.innerHTML = `<span>${n2} , ${n3} , ${n1}</span>`;
        }
        return;
    } else if (n3 > n1 && n3 > n2) {
        if (n1 > n2) {
            imprimer.innerHTML = `<span>${n3} , ${n1} , ${n2}</span>`;
        } else {
            imprimer.innerHTML = `<span>${n3} , ${n2} , ${n1}</span>`;
        }
        return;
    }
}