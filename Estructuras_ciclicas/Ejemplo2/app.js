let btnBoton = document.getElementById('btnAgregarFG');
let btnCalcula = document.getElementById('btnCalcula');
let numeroInput = 0;
eventListener();

function eventListener() {
    btnBoton.addEventListener('click', AgregarFG);
    btnCalcula.addEventListener('click', Calcula);
}

function Calcula() {
    let suma = 0;
    let promedio = 0;
    for (let x = 1; x <= numeroInput; x++) {
        let edad = Number(document.getElementById(`edad${x}`).value);
        suma += edad;
    }
    promedio = suma / numeroInput;
    let imprime = document.getElementById('SpanImprime');
    imprime.innerHTML = promedio;
}

function AgregarFG() {
    numeroInput++;
    // console.log("si entre");

    let divRow = document.createElement('div');
    divRow.setAttribute('class', 'row');
    let divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12');
    let divForm = document.createElement('div');
    divForm.setAttribute('class', 'form-group');
    let LabelF = document.createElement('label');
    let textLabel = document.createTextNode(`Ingresa la edad del alumno${numeroInput}`);
    LabelF.appendChild(textLabel);
    let inputF = document.createElement('input');
    inputF.setAttribute('class', 'form-control');
    inputF.setAttribute('type', 'number');
    inputF.setAttribute('placeholder', "Ingrese la calificacion");
    inputF.setAttribute('id', `edad${numeroInput}`);
    let cajaAlumnos = document.getElementById('cajaAlumnos');
    cajaAlumnos.appendChild(divRow);
    divRow.appendChild(divCol);
    divCol.appendChild(divForm);
    divForm.appendChild(LabelF);
    divForm.appendChild(inputF);
}