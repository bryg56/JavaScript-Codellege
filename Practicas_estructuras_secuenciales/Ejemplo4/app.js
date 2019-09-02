let area_c = document.getElementById('botonC');
let area_c2 = document.getElementById('botonC2');
eventListener();

function eventListener() {
    area_c.addEventListener('click', ObtenerArea);
    area_c2.addEventListener('click', ObtenerArea2);
}

function ObtenerArea() {
    console.time('ObtenerArea');
    let radio = Number(document.getElementById('radio').value);
    //Se declara una constante para obtener el calculo del area el cual vale PI o 3.1416
    const pi_r = 3.1416;
    let area = 0;
    area = pi_r * (radio * radio);
    let imprime = document.getElementById('resultado');
    imprime.innerHTML = area;
    console.timeEnd('ObtenerArea')
}

function ObtenerArea2() {
    console.time('ObtenerArea2');
    let radio = Number(document.getElementById('radio').value);
    let area = 0;
    area = Math.PI * Math.pow(radio, 2);
    let imprime = document.getElementById('resultado');
    imprime.innerHTML = area;
    console.timeEnd('ObtenerArea2')
}