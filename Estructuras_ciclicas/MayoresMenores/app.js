let btnAgrega = document.getElementById('agrega');
let btnCalcula = document.getElementById('calcula');
let imprime = document.getElementById('mayor');
let imprime2 = document.getElementById('menor');
let contador = 0;
eventListener();

function eventListener() {
    btnAgrega.addEventListener('click', agregarNumero);
    btnCalcula.addEventListener('click', calcularCuantos);
}

function agregarNumero() {
    contador++;
    console.log("entre")
    let divRow = document.createElement('div');
    divRow.setAttribute('class', 'row');
    let divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12');
    let divForm = document.createElement('div');
    divForm.setAttribute('class', 'form-group');
    let LabelF = document.createElement('label');
    let textLabel = document.createTextNode(`Ingresa Numero positivo o negativo`);
    LabelF.appendChild(textLabel);
    let inputF = document.createElement('input');
    inputF.setAttribute('class', 'form-control');
    inputF.setAttribute('type', 'number');
    inputF.setAttribute('placeholder', "Ingresa numero");
    inputF.setAttribute('id', `num${contador}`);
    let agregaN = document.getElementById('agregarN');
    agregaN.appendChild(divRow);
    divRow.appendChild(divCol);
    divCol.appendChild(divForm);
    divForm.appendChild(LabelF);
    divForm.appendChild(inputF);
}

function calcularCuantos() {
    let mayores = 0;
    let menores = 0;
    for (let i = 1; i <= contador; i++) {
        let num = Number(document.getElementById(`num${i}`).value)
        if (num > 0) {
            mayores++;
        } else {
            menores++;
        }

    }
    imprime.innerHTML = mayores;
    imprime2.innerHTML = menores;
}