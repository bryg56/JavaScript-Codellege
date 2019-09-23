let btnAdd = document.getElementById('btnAddElements');
let btnCalculate = document.getElementById('btnCalculateArray');
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
    input.setAttribute('placeholder', 'Ingrese un dijito')
    document.getElementById('ArrayList1').appendChild(newLi);
    newLi.appendChild(input);
    // input.removeAttribute('id');
    let newLi2 = document.createElement('li');
    newLi2.setAttribute('class', 'list-group-item mb-2');
    let input2 = document.createElement('input');
    input2.setAttribute('class', 'form-control');
    input2.setAttribute('id', `listArrayL${counterClick}`);
    input2.setAttribute('placeholder', 'Ingrese un dijito');
    document.getElementById('ArrayList2').appendChild(newLi2);
    newLi2.appendChild(input2);


    counterClick++;
}

function functionCalculateArray() {
    let array1 = [];
    let array2 = [];
    let array3 = [];
    for (let i = 0; i < counterClick; i++) {
        array1[i] = Number(document.getElementById(`listArrayR${i}`).value);
        array2[i] = Number(document.getElementById(`listArrayL${i}`).value);
        if (isNaN(array1[i]) || isNaN(array2[i])) {
            Swal.fire({
                type: 'error',
                title: 'Caracter invalido...',
                text: 'Se ha ingresado un digito incorrecto',

            })
            array1 = [];
            array2 = [];
            document.getElementById(`listArrayR${i}`).focus();
            return;
        }
    }
    for (let x = 0; x < array1.length; x++) {
        array3[x] = array1[x] + array2[x];
    }
    let ContatenarResultado = "";
    for (let y = 0; y < array1.length; y++) {
        ContatenarResultado += `<li class="list-group-item">${array3[y]}</li>`
    }
    document.getElementById('ArrayList3').innerHTML = ContatenarResultado;
}