let btnCalcular = document.getElementById('ingresa');
let elementos = [];
let contador = 0;
event();

function event() {
    btnCalcular.addEventListener('click', fillArray);
    // btnCalcular.addEventListener('click', sumaS)
}
/* =================================
     Inicia parte de apliacion resuelta por medio de fuerza bruta
================================= */
function fillArray() {

    let inputValue = document.getElementById('ingreso');
    let arrayPrimeNumber = [];
    console.time("Iniciodefuerzabruta");
    for (let i = 0; i < Number(inputValue.value); i++) {
        let numberPrime = isPrime();
        if (numberPrime === null) {
            i--;
        } else {
            arrayPrimeNumber[i] = numberPrime;
        }

    }
    console.timeEnd("Iniciodefuerzabruta");

    console.log(arrayPrimeNumber);
    let maximo = 0;
    for (let x = 0; x < arrayPrimeNumber.length; x++) {
        if (maximo < arrayPrimeNumber[x]) {
            maximo = arrayPrimeNumber[x];
        }
    }
    console.log(maximo);



}

function isPrime() {
    let numberRandom = Math.floor(Math.random() * 1000) + 1;
    for (let i = 2; i < numberRandom; i++) {
        if ((numberRandom % i) == 0) {
            return null;
        }
    }
    return numberRandom;
}
/* =================================
     Termina apliacion de fuerza bruta
================================= */

/* =================================
     Inicia apliacion resuelta por paradigma dinamico
================================= */
let ArrayNumberPrimeDinamic = [];

function fillArrayDinamic() {
    let PrimeNumber = 0;
    for (let i = 0; i <= PrimeNumber; i++) {
        PrimeNumber++;
        if (PrimeNumber % i == 0) {
            ArrayNumberPrimeDinamic.push();
        }
    }
}