let bton_c = document.getElementById('boton_c');
let n1 = document.getElementById('numero1');
let n2 = document.getElementById('numero2');

Event();


function Event() {
    n1.addEventListener('blur', valida);
    n2.addEventListener('blur', valida);
    bton_c.addEventListener('click', compara);
}

function valida(event) {
    // console.log(event.target.value);

    console.log(Number(n1.value));
    if (isNaN(event.target.value)) {
        event.target.focus();
    }
}

function compara() {
    let imprime = document.getElementById('resul');
    if (Number(n1.value) > Number(n2.value)) {
        imprime.innerText = ' Numero 1 es mas grande';
    } else if (Number(n2.value) > Number(n1.value)) {
        imprime.innerText = ' Numero 2 es mas grande';
    }
}