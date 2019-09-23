let btnAgregarElementos = document.getElementById('ingresa');

let elementos = [];
let contador = 0;

EventListener();

function EventListener() {
    btnAgregarElementos.addEventListener('click', Verificar);
}

function Verificar() {
    let valor = document.getElementById('ingreso');
    // let i = 0;
    for (let i = 0; i < elementos.length; i++) {
        console.log("Entre");

        if ((Number(valor.value)) == elementos[i]) {
            alert("El valor esta repetido, por favor ingrese otro");
            return;
        }
    }
    elementos[contador] = Number(valor.value);
    let datosImprimir = '';
    contador++;
    for (let x = 0; x < elementos.length; x++) {
        datosImprimir += `<li class="list-group-item">${elementos[x]}</li>`;
    }
    document.getElementById('lista').innerHTML = datosImprimir;
}