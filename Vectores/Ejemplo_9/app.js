let inputNumber = document.getElementById('inputNumbers');
let printString = "";
let ArrayLetras = [];
fillArray();
EventListener();

function EventListener() {
    inputNumber.addEventListener('change', ObtainLetter);
}

function ObtainLetter(event) {
    let value = Number(inputNumber.value);

    if (value >= 0 && value < 26) {

        printString += `<li class="list-group-item">${ArrayLetras[value]}</li>`;
        document.getElementById('alertPaint').innerHTML = printString;
    } else {
        swal.fire({
            type: 'error',
            tittle: 'Limite de rango',
            text: 'Favor de ingresar numeros entre 0 y 25'
        })
    }
    inputNumber.value = "";
    // fillArray(ArrayLetras);
}

function fillArray() {
    for (let i = 0; i <= 25; i++) {
        ArrayLetras[i] = String.fromCharCode(i + 65);
    }
}