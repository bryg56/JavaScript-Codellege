let btnAdd = document.getElementById('addElement');
let btnCalculate = document.getElementById('checkElements');
let counterClick = 0;

EventListener();

function EventListener() {
    btnAdd.addEventListener('click', functionAddElements);
    btnCalculate.addEventListener('click', functionCalculateArray);
}

function functionAddElements() {
    let newLi = document.createElement('li');
    newLi.setAttribute('class', 'list-group-item mb-2');
    let input = document.createElement('input');
    input.setAttribute('class', 'form-control');
    input.setAttribute('id', `listArrayR${counterClick}`);
    input.setAttribute('placeholder', 'Ingrese el nombre')
    document.getElementById('ArrayList').appendChild(newLi);
    newLi.appendChild(input);
    // input.removeAttribute('id');
    counterClick++;
}

function functionCalculateArray() {
    let array1 = [];
    let array2 = [];
}