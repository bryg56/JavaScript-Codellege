let btnCalcula = document.getElementById('calcular');
let imprime = document.getElementById('resultado');
event();

function event() {
    btnCalcula.addEventListener('click', calcular);
}

function calcular() {
    let numero = Number(document.getElementById('numero').value);
    let texto = `${numero} =`;
    let contador = 0;
    let numeros = 0;
    let bandera = false;
    if (numero >= 2) {
        // contador++;
    }
    for (let i = 2; i < numero; i++) {
        bandera = false;
        for (let x = 2; x < i; x++) {
            if ((i % x) == 0) {
                bandera = true;
            }
        }
        if (bandera != true) {
            contador++;
        }
    }
    imprime.innerHTML = contador;
}