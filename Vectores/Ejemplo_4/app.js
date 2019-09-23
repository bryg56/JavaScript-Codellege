let btnCalcular = document.getElementById('ingresa');
let elementos = [];
let contador = 0;
event();

function event() {
    btnCalcular.addEventListener('click', fillArray);
    // btnCalcular.addEventListener('click', sumaS)
}

function fillArray() {
    let inputAddElements = document.getElementById('ingreso');
    let dataArray = [];
    let suma = 0;
    let datosImprimir = "";
    for (let i = 0; i < Number(inputAddElements.value); i++) {
        dataArray[i] = Math.floor(Math.random() * 10);
        datosImprimir += `<li class="list-group-item">${dataArray[i]}</li>`;

    }
    suma = sumaS(dataArray);
    datosImprimir += `<li class="list-group-item">la suma de todos los numeros es ${suma}</li>`;
    document.getElementById('lista').innerHTML = datosImprimir;


}

function sumaS(dataArray) {
    let suma = 0;
    for (let i = 0; i < dataArray.length; i++) {
        suma += dataArray[i];
    }

    return suma;
}