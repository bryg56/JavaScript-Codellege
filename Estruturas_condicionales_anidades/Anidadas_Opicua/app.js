let bton_c = document.getElementById('boton');
let imprimer = document.getElementById('resultado');
event();

function event() {
    bton_c.addEventListener('click', calcula);
}

function calcula() {
    let n = Number(document.getElementById('num').value);
    let numero = 0;
    let unidades = 0;
    let decenas = 0;
    let centenas = 0;
    let miles = 0;
    unidades = n % 10;
    decenas = Math.floor(((n % 100) - (unidades)) / 10);
    centenas = Math.floor((n % 1000) / 100);
    miles = Math.floor((n - (centenas * 100 + decenas * 10 + unidades)) / 1000);
    console.log(unidades + " " + decenas + " " + centenas + " " + miles + " ");

    if (n >= 1000) {
        unidades *= 1000;
        decenas *= 100;
        centenas *= 10;
    } else if (n >= 100 && n < 1000) {
        unidades *= 100;
        decenas *= 10;
        // centenas *= 10;
    } else if (n >= 10 && n < 100) {
        unidades *= 10;
        // decenas *= 100;
        // centenas *= 10;
    }
    numero = centenas + decenas + unidades + miles;


    if (numero == n) {
        imprimer.innerHTML = "El numero es Capicua";
    } else {
        imprimer.innerHTML = "El numero no es Capicua";
    }
}