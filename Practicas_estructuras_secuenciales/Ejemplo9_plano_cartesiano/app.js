let boton_c = document.getElementById('Calcula');

event();

function event() {
    boton_c.addEventListener('click', distancia);
}

function distancia() {
    let x1 = Number(document.getElementById('punto1').value);
    let y1 = Number(document.getElementById('punto2').value);
    let x2 = Number(document.getElementById('punto3').value);
    let y2 = Number(document.getElementById('punto4').value);
    let distancia_c = 0;
    distancia_c = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    let imprime = document.getElementById('Resultado');
    imprime.innerHTML = distancia_c;
}