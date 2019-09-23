let btnCalculate = document.getElementById('idBtnCalculate');

EventListener();

function EventListener() {
    btnCalculate.addEventListener('click', multiploArrayCalculate);
}

function multiploArrayCalculate() {
    // let counterArray = 0;
    let size = Number(document.getElementById('sizeArray').value);
    let multiplo = Number(document.getElementById('multiploArray').value);
    let ArrayMultiplo = [];
    let multiplo2 = 1;
    let texto = "";
    // let divisor = 0;
    for (let i = 0; i < size; i++) {
        ArrayMultiplo[i] = multiplo2 * multiplo;
        multiplo2++;
        texto += `<li class="list-group-item">${ArrayMultiplo[i]}</li>`
    }
    console.log(ArrayMultiplo);
    document.getElementById('list_item').innerHTML = texto;
}