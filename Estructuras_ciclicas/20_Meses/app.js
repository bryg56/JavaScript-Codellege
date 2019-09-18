let btnCalcula = document.getElementById('calcular');
let imprime = document.getElementById('resultado');
event();

function event() {
    btnCalcula.addEventListener('click', calcular);
}

function calcular() {
    let total = 0;
    for (let i = 1; i <= 20; i++) {
        if ((i % 3) == 0) {
            total += 20;
        } else {
            total += 10;
        }
    }
    imprime.innerHTML = total;
}