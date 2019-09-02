// let area_l = document.getElementById('calcula');
// area_l.addEventListener('click', calcular);

// function calcular() {
//     let base = document.getElementById('base').value;
//     let altura = document.getElementById('altura').value;
//     let area = 0;
//     area = (base * altura) / 2;
//     let imprime = document.getElementById('resultado');
//     imprime.innerHTML = area;

// }

////////////
let area_l = document.getElementById('calcula');
eventListener();

function eventListener() {
    area_l.addEventListener('click', ObtenerArea);
}

function ObtenerArea() {
    let base = Number(document.getElementById('base').value);
    let altura = Number(document.getElementById('altura').value);
    let area = 0;
    area = (base * altura) / 2;
    let imprime = document.getElementById('resultado');
    imprime.innerHTML = area;
}