let btnCalcula = document.getElementById('btCalcula');
let imprime = document.getElementById('Numeros');
event();

function event() {
    btnCalcula.addEventListener('click', Calcular);
}

function Calcular() {
    let numero = 0;
    let divisor = 2;
    let texto = `0 <br>`;
    for (let i = 1; i <= 100; i++) {
        if ((i % divisor) == 0) {
            console.log(i)
            if (i == 2) {
                texto = texto + "2" + `<br>`;
            } else {
                texto = texto + i + `<br>`;
            }
        }
    }
    imprime.innerHTML = texto;
}