let bton_c = document.getElementById('calc');
let imprime = document.getElementById('resul');
event();

function event() {
    bton_c.addEventListener('click', saber);
}

function saber() {
    let lado1 = Number(document.getElementById('lado1').value);
    let lado2 = Number(document.getElementById('lado2').value);
    let lado3 = Number(document.getElementById('lado3').value);
    if (lado1 == lado2 && lado2 == lado3 && lado3 == lado1) {
        imprime.innerHTML = ' equilatero por que tiene todos sus lados iguales'
    } else if (lado1 == lado2 || lado2 == lado3 || lado3 == lado1) {
        imprime.innerHTML = ' isoceles por que tiene dos de sus lados iguales'
    } else {
        imprime.innerHTML = ' escaleno por que no tiene ningun lado igual';
    }
}