let btnCalcular = document.getElementById('calcular');

EventListener();
let vector = [];
for (let i = 0; i < 25; i++) {
    vector[i] = Math.floor(Math.random() * 100);
}
vector = QuickSort(vector, 0, vector.length - 1);
console.log(vector);

function EventListener() {
    btnCalcular.addEventListener('click', VerificarNumero);
}

// document.getElementById('resultado').innerHTML = texto;

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


function VerificarNumero() {
    let number = Number(document.getElementById('idNumero').value);
    const N2 = Math.floor(vector.length / 2) - 1;
    if (!encontreNumero(number, Math.floor(vector.length / 2) - 1, vector, N2)) {
        console.log("Entre");
    }

}

function encontreNumero(number, n, vector, N2) {
    console.log(n);

    if (vector[n] == number) {
        return true;
    } else if (vector[n] < number) {
        console.log("Entre aca");

        n = Math.floor((n / 2) + N2);
        console.log(n);

        if (encontreNumero(number, n, vector, N2)) {
            return true;
        } else {
            return false;
        }
    } else if (vector[n] > number) {
        n = Math.floor((n / 2));
        if (encontreNumero(number, n, vector, N2)) {
            return true;
        } else {
            return false;
        }
    } else if (n == (N2 * 2)) {
        if (vector[n] == number) {
            return true;
        } else {
            return false;
        }
    } else if (n < 0 && n > (N2 * 2)) {
        return false;
    }
}