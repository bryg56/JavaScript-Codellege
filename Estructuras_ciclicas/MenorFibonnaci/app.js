let btnCalcula = document.getElementById('calcular');
let imprime = document.getElementById('resultado');
event();

function event() {
    btnCalcula.addEventListener('click', calcular);
}

function calcular() {
    let numero = Number(document.getElementById('numero').value);
    let texto = `${numero} =`;
    // let contador = 2;
    let n1 = 0;
    let n2 = 1;
    let n = 0;

    if (numero == 1) {
        texto += "0";
    } else if (numero == 2) {
        texto += "0,1"
    } else {
        texto += "0,1,"
        do {
            // contador++;
            if (numero > n) {
                n = n1 + n2;
                texto += `${n},`;
                n1 = n2;
                n2 = n;
            }
        } while (numero > n);
    }
    imprime.innerHTML = texto;
}