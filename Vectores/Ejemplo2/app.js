let btnAgregarElementos = document.getElementById('agregar');
let btnMostrarElementos = document.getElementById('mostrar');
//Declaracion global de array 
let elementos = [];
let contador = 0;
event();

function event() {
    btnAgregarElementos.addEventListener('click', AgregarElementos);
    btnMostrarElementos.addEventListener('click', CalculateMedia);
}

function AgregarElementos() {
    if (contador < 10) {
        let valorInput = document.getElementById('numeros');
        elementos[contador] = Number(valorInput.value);
        valorInput.value = "";
        contador++;
    } else {
        alert("Ya tienes 10 valores agregados");
    }
}

function CalculateMedia() {
    let promedio = 0;
    for (let i = 0; i < elementos.length; i++) {
        promedio += elementos[i];
    }
    promedio /= elementos.length;
    contador = 0;
    elementos = [];
    let imprimir = `<li class="list-group-item">El promedio de los numeros otorgados es: ${promedio}</li> `;
    document.getElementById('ListaImprimir').innerHTML = imprimir;
}