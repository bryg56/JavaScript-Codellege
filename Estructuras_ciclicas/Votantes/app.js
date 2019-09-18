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
    let votos = document.getElementById('votos');
    let divRow = document.createElement('div');
    divRow.setAttribute('class', 'row');
    let divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12');
    let formGroup = document.createElement('div');
    formGroup.setAttribute('class', 'form-group');
    let labelG = document.createElement('label');
    labelG.appendChild(document.createTextNode("Voto a candidato:"));
    let inputG = document.createElement('input');
    inputG.setAttribute('id', `Voto${contador}`);
    inputG.setAttribute('class', 'form-control');
    inputG.setAttribute('type', 'number');
    votos.appendChild(divRow);
    divRow.appendChild(divCol);
    divCol.appendChild(formGroup);
    formGroup.appendChild(labelG);
    formGroup.appendChild(inputG);
}

function Calcular() {
    let votosTotal = 0;
    let candidato1 = 0;
    let candidato2 = 0;
    let candidato3 = 0;
    let candidato4 = 0;
    for (let i = 1; i <= contador; i++) {
        let voto = Number(document.getElementById(`Voto${i}`).value);
        if (voto == 1) {
            candidato1++;
        } else if (voto == 2) {
            candidato2++;
        } else if (voto == 3) {
            candidato3++;
        } else if (voto == 4) {
            candidato4++;
        }
        votosTotal++;
    }
    candidato1 = (candidato1 * 100) / votosTotal;
    candidato2 = (candidato2 * 100) / votosTotal;
    candidato3 = (candidato3 * 100) / votosTotal;
    candidato4 = (candidato4 * 100) / votosTotal;
    imprime.innerHTML = `Votos Totales ${votosTotal} <br> Candidato1= ${candidato1}% <br> Candidato2= ${candidato2}% <br> Candidato3= ${candidato3}% <br> Candidato4= ${candidato4}%`;
}