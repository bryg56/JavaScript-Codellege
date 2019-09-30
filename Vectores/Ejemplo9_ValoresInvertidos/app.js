let btnCalcular = document.getElementById('calcular');
let inputNumeros = document.getElementById('numeroInput');
let vector = [];
let contador = 0;
EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', Invertir);
    inputNumeros.addEventListener('change', RellenarArray);
}

function Invertir() {
    let vector2 = [];
    let texto = "";
    for (let i = 0; i < vector.length; i++) {
        vector2[i] = vector[vector.length - 1 - i];
    }
    console.log(vector);
    console.log(vector2);
    for (let i = 0; i < vector.length; i++) {
        texto += `${vector[i]} ------- ${vector2[i]} <br>`;
    }
    document.getElementById('resultado').innerHTML = texto;

}

function RellenarArray(event) {
    vector[contador] = Number(inputNumeros.value);
    contador++;
    inputNumeros.value = "";
}