let btnAgrega = document.getElementById('agrega');
let btnCalcula = document.getElementById('calcula');
let contador = 1;
event();

function event() {
    btnAgrega.addEventListener('click', AgregaT);
}

function AgregaT() {
    contador++;
    let divRowL = document.createElement('div');
    divRowL.setAttribute("class", "row");
    let divColL = document.createElement('div');
    divColL.setAttribute('class', 'col-12');
    let label1 = document.createElement('label');
    label1.appendChild(document.createTextNode(`Trabajador${contador}`));
    let Contenedor = document.getElementById('Trabajadores');
    Contenedor.appendChild(divRowL);
    divRowL.appendChild(label1);
    let divRow = document.createElement('div');
    let divCol1 = document.createElement('div');
    divCol1.setAttribute("class", "col-2");
    let divForm1 = document.createElement('div');
    divForm1.setAttribute('class', 'form-group');
    let label1 = document.createElement('label');
    label1.appendChild(document.createTextNode("Dia1"));
    let divInput1 = document.createElement('input');
    divInput1.setAttribute('id', `diaTrabajador${contador}`);
    let divCol2 = document.createElement('div');
    divCol2.setAttribute("class", "col-2");
    let divForm1 = document.createElement('div');
    divForm1.setAttribute('class', 'form-group');
    let label1 = document.createElement('label');
    label1.appendChild(document.createTextNode("Dia1"));
    let divInput1 = document.createElement('input');
    divInput1.setAttribute('id', `diaTrabajador${contador}`);
    let divCol3 = document.createElement('div');
    divCol3.setAttribute("class", "col-2");
    let divForm1 = document.createElement('div');
    divForm1.setAttribute('class', 'form-group');
    let label1 = document.createElement('label');
    label1.appendChild(document.createTextNode("Dia1"));
    let divInput1 = document.createElement('input');
    divInput1.setAttribute('id', `diaTrabajador${contador}`);
    let divCol4 = document.createElement('div');
    divCol4.setAttribute("class", "col-2");
    let divForm1 = document.createElement('div');
    divForm1.setAttribute('class', 'form-group');
    let label1 = document.createElement('label');
    label1.appendChild(document.createTextNode("Dia1"));
    let divInput1 = document.createElement('input');
    divInput1.setAttribute('id', `diaTrabajador${contador}`);
    let divCol5 = document.createElement('div');
    divCol5.setAttribute("class", "col-2");
    let divForm1 = document.createElement('div');
    divForm1.setAttribute('class', 'form-group');
    let label1 = document.createElement('label');
    label1.appendChild(document.createTextNode("Dia1"));
    let divInput1 = document.createElement('input');
    divInput1.setAttribute('id', `diaTrabajador${contador}`);
    let divCol6 = document.createElement('div');
    divCol6.setAttribute("class", "col-2");
    let divForm1 = document.createElement('div');
    divForm1.setAttribute('class', 'form-group');
    let label1 = document.createElement('label');
    label1.appendChild(document.createTextNode("Dia1"));
    let divInput1 = document.createElement('input');
    divInput1.setAttribute('id', `diaTrabajador${contador}`);








}