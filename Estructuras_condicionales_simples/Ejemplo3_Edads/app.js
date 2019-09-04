let bton_c = document.getElementById('calcula');
let edad1 = document.getElementById('edad1');
let edad2 = document.getElementById('edad2');
// let imprime = document.getElementById('Resul');
// let imprime2 = document.getElementById('difer');

event();

function event() {
    bton_c.addEventListener('click', diferencia);
}

function diferencia() {
    let resta = 0;
    let imprime = document.getElementById('Resul');
    let imprime2 = document.getElementById('difer');
    if (Number(edad1.value) > Number(edad2.value)) {
        imprime.innerHTML = ' 1 ';
        resta = Number(edad1.value) - Number(edad2.value);
        imprime2.innerHTML = resta;
    } else if (Number(edad2.value) > Number(edad1.value)) {
        imprime.innerHTML = ' 2 ';
        resta = Number(edad2.value) - Number(edad1.value);
        imprime2.innerHTML = resta;
    }
}