let bton_c = document.getElementById('calc');
let imprimer = document.getElementById('resultado');
let imprime = document.getElementById('situacion');

event();

function event() {
    bton_c.addEventListener('click', calcula);
}

function calcula() {
    let c1 = Number(document.getElementById('cali1').value);
    let c2 = Number(document.getElementById('cali2').value);
    let c3 = Number(document.getElementById('cali3').value);
    // console.log(c1 + "Sabe");

    let promedio = 0;
    let status = "Nada";
    promedio = (c3 + c2 + c1) / 3;
    if (promedio < 0 || promedio > 10) {
        status = "error";
        premdio = 0;
    } else if (promedio >= 6 && promedio < 9) {
        status = "Regular";
    } else if (promedio < 6) {
        status = "Reprobado";
    } else if (promedio >= 9) {
        status = "Aprobado";
    }
    imprimer.innerHTML = promedio;
    imprime.innerHTML = status;
}