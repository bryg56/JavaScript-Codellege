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
    unidades = n % 10;
    decenas = ((n % 100) - (unidades)) / 10;


    centenas = (n - ((decenas * 10) + unidades)) / 100;

    unidades *= 100;


    decenas *= 10;
    numero = centenas + decenas + unidades;


    if (numero == n) {
        imprimer.innerHTML = "El numero es igual";
    } else {
        imprimer.innerHTML = "El numero no es igual";
    }
}