let bton_c = document.getElementById('calcula');

// let imprime = document.getElementById('Resul');
// let imprime2 = document.getElementById('difer');

event();

function event() {
    bton_c.addEventListener('click', promedio);
}

function promedio() {
    let l = Number(document.getElementById('lunes').value);
    let m = Number(document.getElementById('martes').value);
    let mi = Number(document.getElementById('miercoles').value);
    let j = Number(document.getElementById('jueves').value);
    let v = Number(document.getElementById('viernes').value);
    let s = Number(document.getElementById('sabado').value);
    let incentivo = 0;
    let imprime = document.getElementById('resul');
    // let imprime2 = document.getElementById('difer');
    incentivo = (l + m + mi + j + v + s) / 6;
    console.log(incentivo);
    if (incentivo > 100) {
        imprime.innerHTML = 'Si tiene incentivo';
    } else {
        imprime.innerHTML = 'No tiene incentivo';
    }
}