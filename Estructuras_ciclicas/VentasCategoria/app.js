let btnCalcular = document.getElementById('calcular');
let btnAgrega = document.getElementById('agregar');
let contador = 1;
let imprime = document.getElementById('impresora');
event();

function event() {
    btnCalcular.addEventListener('click', Calcular);
    btnAgrega.addEventListener('click', Agregar);
}

function Agregar() {
    contador++;
    let ventas = document.getElementById('ventas');
    let divRow = document.createElement('div');
    divRow.setAttribute('class', 'row');
    let divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12');
    let formGroup = document.createElement('div');
    formGroup.setAttribute('class', 'form-group');
    let labelG = document.createElement('label');
    labelG.appendChild(document.createTextNode("Venta:"));
    let inputG = document.createElement('input');
    inputG.setAttribute('id', `Venta${contador}`);
    inputG.setAttribute('class', 'form-control');
    inputG.setAttribute('type', 'number');
    ventas.appendChild(divRow);
    divRow.appendChild(divCol);
    divCol.appendChild(formGroup);
    formGroup.appendChild(labelG);
    formGroup.appendChild(inputG);
}

function Calcular() {
    let ventaTotal = 0;
    let ventaC1 = 0;
    let ventaC2 = 0;
    let ventaC3 = 0;
    for (let i = 1; i <= contador; i++) {
        let venta = Number(document.getElementById(`Venta${i}`).value);
        if (venta > 500 && venta <= 1000) {
            ventaC1++;
            ventaTotal += venta;
        } else if (venta > 1000) {
            ventaC2++;
            ventaTotal += venta;
        } else if (venta <= 500) {
            ventaC3++;
            ventaTotal += venta;
        }
    }
    imprime.innerHTML = `las ventas totales fueron ${ventaTotal} <br> Ventas mayores a 500 y menores o iguales que 1000 = ${ventaC1} <br> Ventas mayores a 1000 = ${ventaC2} <br> Ventas menores a 500 = ${ventaC3} `;
}