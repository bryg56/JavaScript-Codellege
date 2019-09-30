let btnCalcular = document.getElementById('calcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', quitarImpares);
}

function quitarImpares() {
    let vector30 = [];
    let vectorImpar = [];
    let texto = "";
    let contadorImpar = 0;
    for (let i = 0; i < 30; i++) {
        vector30[i] = 0;
        vector30[i] = GetRandom();
    }
    for (let i = 0; i < vector30.length; i++) {
        if ((vector30[i] % 2) != 0) {
            vectorImpar[contadorImpar] = vector30[i];
            contadorImpar++;
        }
    }
    console.log(vectorImpar);

    console.log(vector30);

}

function GetRandom() {
    let n = 0;
    let bandera = false;
    do {
        bandera = false;
        n = Math.floor(Math.random() * 1000);
        // console.log(n);
        if (n >= 100 && n <= 300) {
            bandera = true;
        }
    } while (bandera != true);
    return n;
}