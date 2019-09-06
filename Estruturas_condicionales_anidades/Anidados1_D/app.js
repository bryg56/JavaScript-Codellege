let bton_c = document.getElementById('calc');
let imprime = document.getElementById('resul');
Event();

function Event() {
    bton_c.addEventListener('click', Verifica);
}

function Verifica() {
    let n1 = Number(document.getElementById('numero1').value);
    let n2 = Number(document.getElementById('numero2').value);
    let n3 = Number(document.getElementById('numero3').value);

    if (n1 > n2 && n1 > n3) {
        imprime.innerHTML = `<h4 class="alert-heading text-center text-info">El numero 1 es mayor: ${n1} </h4>`;
    } else if (n2 > n3) {
        imprime.innerHTML = `<h4 class="alert-heading text-center text-info">El numero 2 es mayor: ${n2} </h4>`;
    } else {
        imprime.innerHTML = `<h4 class="alert-heading text-center text-info">El numero 3 es mayor: ${n3} </h4>`;
    }
}