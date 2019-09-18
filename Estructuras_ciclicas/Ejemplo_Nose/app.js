let btnAgregar = document.getElementById('btnAgregarArticulo');
let contador = 0;
let contador2 = 0;
let btnCalcula = document.getElementById('btnCalcularTotal');
let imprime = document.getElementById('resultado');
eventListener();

function calculaTotal() {
    let suma = 0;
    for (let i = 1; i <= contador2; i++) {
        let valorInput = Number(document.getElementById(`valor${i}`).value);
        if (valorInput >= 200) {
            suma += valorInput * 0.85;
        } else if (valorInput < 200 && valorInput >= 100) {
            suma += valorInput * 0.88;
        } else {
            suma += valorInput * 0.90
        }
    }
    imprime.innerHTML = suma;
}

function eventListener() {
    btnAgregar.addEventListener('click', AgregarInputArticulo);
    btnCalcula.addEventListener('click', calculaTotal);
}

function AgregarInputArticulo() {
    contador++;
    let divRow = document.createElement('div');
    divRow.setAttribute('class', 'row');
    divRow.setAttribute('id', `fila${contador}`)
    let divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12');
    let inputAgrega = document.createElement('div');
    inputAgrega.setAttribute('class', 'input-group mb-3');
    let inputArticulo = document.createElement('input');
    inputArticulo.setAttribute('class', 'form-control');
    inputArticulo.setAttribute('type', 'text');
    inputArticulo.setAttribute('placeholder', 'Ingrea el nombre del articulo');

    let inputGroup = document.createElement('div');
    inputGroup.setAttribute('class', 'input-group-append');
    let buttonAgregarPrecio = document.createElement('button');
    buttonAgregarPrecio.setAttribute('class', 'btn btn-outline-secondary');
    buttonAgregarPrecio.setAttribute('id', `btnAgregarPrecio${contador}`)
    buttonAgregarPrecio.appendChild(document.createTextNode('Agregar precio'));
    let listaArticulos = document.getElementById('listaArticulos');
    listaArticulos.appendChild(divRow);
    divRow.appendChild(divCol);
    divCol.appendChild(inputAgrega);
    inputAgrega.appendChild(inputArticulo);
    inputAgrega.appendChild(inputGroup);
    inputGroup.appendChild(buttonAgregarPrecio);
    AgregarEvent();

}

function AgregarEvent() {
    let agregarPrecio = document.getElementById(`btnAgregarPrecio${contador}`);
    agregarPrecio.addEventListener('click', crearInputPrecio);
}

function crearInputPrecio(event) {
    contador2++;
    event.target.setAttribute('disabled', 'true');

    let divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12');

    let inputAgrega = document.createElement('div');
    inputAgrega.setAttribute('class', 'form-group mb-3');

    let inputArticulo = document.createElement('input');
    inputArticulo.setAttribute('class', 'form-control');
    inputArticulo.setAttribute('type', 'text');
    inputArticulo.setAttribute('placeholder', 'Ingrea el precio del articulo');
    inputArticulo.setAttribute('id', `valor${contador2}`)
    console.log(event.target.parentElement.parentElement.parentElement.parentElement);
    let listaArticulos = event.target.parentElement.parentElement.parentElement.parentElement

    listaArticulos.appendChild(divCol);
    // divRow.appendChild(divCol);
    divCol.appendChild(inputAgrega);
    inputAgrega.appendChild(inputArticulo);

}