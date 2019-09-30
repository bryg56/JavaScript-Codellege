let btnOrdena = document.getElementById('ordena');

EventListener();

function EventListener() {
    btnOrdena.addEventListener('click', Ordenar);
}

function Ordenar() {
    let inputSize = Number(document.getElementById('idSize').value);
    let vector = [];
    let texto = "";
    for (let i = 0; i < inputSize; i++) {
        vector[i] = Math.floor(Math.random() * 1000);
        texto += `${vector[i]}`;
    }
    // let n
    // console.log(vector);
    texto = `<br>`;
    vector = QuickSort(vector, 0, inputSize - 1);
    console.log(vector);
    document.getElementById('resultado').innerHTML = texto;

}

function QuickSort(vector, low, high) {
    // console.log(vector);
    if (low < high) {
        let pi = partition(vector, low, high);
        vector = QuickSort(vector, low, pi - 1);
        vector = QuickSort(vector, pi + 1, high);
    }
    return vector;
}

function partition(vector, low, high) {
    let pivot = vector[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (vector[j] <= pivot) {
            i++;

            let temp = vector[i];
            vector[i] = vector[j];
            vector[j] = temp;
        }
    }
    let temp = vector[i + 1];
    vector[i + 1] = vector[high];
    vector[high] = temp;

    return i + 1;
}