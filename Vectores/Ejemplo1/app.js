let btnAgregarElementos = document.getElementById('agregar');
let btnMostrarElementos = document.getElementById('mostrar');
//Declaracion global de array 
let elementos = [];
let contador = 0;
event();

function event() {
    btnAgregarElementos.addEventListener('click', AgregarElementos);
    btnMostrarElementos.addEventListener('click', MostrarElementos);
}

function AgregarElementos() {
    if (contador < 10) {
        let valorInput = document.getElementById('numeros');
        elementos[contador] = valorInput.value;
        valorInput.value = "";
        contador++;
    } else {
        alert("Ya tienes 10 valores agregados");
    }
}

function MostrarElementos() {
    let informacionCompleta = "";
    for (let i = 0; i < elementos.length; i++) {
        informacionCompleta += `<li class="list-group-item"> ${elementos[i]} </li>`
    }
    document.getElementById('ListaImprimir').innerHTML = informacionCompleta;
}