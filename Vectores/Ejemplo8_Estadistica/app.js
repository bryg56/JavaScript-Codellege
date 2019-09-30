let btnCalcular = document.getElementById('idCalculate');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', CalcularMetodosEstadisticos);
}

function CalcularMetodosEstadisticos() {
    let media = 0
    let moda = 0
        // mediana = 0,
    let varianza = 0
    let d_estandar = 0
    let auxiliarModa = 0;
    let vector = [];
    let vectorModa = [];
    let size = Number(document.getElementById('idSize').value);
    let texto = "Datos: ";
    for (let i = 0; i < size; i++) {
        vector[i] = Math.floor(Math.random() * 10);
        media += vector[i];
        texto += ` ${vector[i]},`;
    }
    media /= size;
    for (let i = 0; i < size; i++) {
        vectorModa[i] = 0;
        for (let x = 0; x < size; x++) {
            if (i != x) {
                console.log(vector[i] + " Espacio" + vector[x]);
                if (vector[i] == vector[x]) {
                    console.log("No entre");
                    vectorModa[i]++;
                    console.log(vectorModa[i]);
                }
            }
        }

        if (vectorModa[i] > moda) {
            moda = vectorModa[i];
        }
        varianza += (Math.pow((vector[i] - media), 2));

    }
    for (let i = 0; i < size; i++) {
        if (moda == vectorModa[i]) {
            auxiliarModa = vector[i];
        }
    }
    console.log(moda);

    varianza /= size;
    d_estandar = Math.sqrt(varianza);
    texto += `<br> Media: ${media}, Moda: ${auxiliarModa}, Varianza: ${varianza}, Desviacion Estandar: ${d_estandar}`;
    document.getElementById('Resultado').innerHTML = texto;
}