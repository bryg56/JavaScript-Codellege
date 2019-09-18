let btnCalcula = document.getElementById('calcula');
let btnAgrega = document.getElementById('agrega');
let contador = 1;
let impresora = document.getElementById('resultado');
event();

function event() {
    btnAgrega.addEventListener('click', agrega);
    btnCalcula.addEventListener('click', calcular);
}

function agrega() {
    contador++;
    let divRow = document.createElement('div');
    divRow.setAttribute('class', 'row');
    let divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12');
    let divForm = document.createElement('div');
    divForm.setAttribute('class', 'form-group');
    let label = document.createElement('label');
    label.appendChild(document.createTextNode(`Dia${contador}`));
    let input = document.createElement('input');
    input.setAttribute('class', 'form-control');
    input.setAttribute('id', `diaTrabajador${contador}`);
    input.setAttribute('input', 'number');
    let trabajadores = document.getElementById('Trabajadores');
    trabajadores.appendChild(divRow);
    divRow.appendChild(divCol);
    divCol.appendChild(divForm);
    divForm.appendChild(label);
    divForm.appendChild(input);
}

function calcular() {
    let paHora = Number(document.getElementById('costoHora').value);
    let Total = 0;
    let Paga = 0;
    for (let i = 1; i <= contador; i++) {
        let dia = Number(document.getElementById(`diaTrabajador${i}`).value);
        Total += dia;
        Paga += (paHora * dia);
    }
    impresora.innerHTML = `Horas totales=${Total} <br> Paga total = ${Paga}`;
}