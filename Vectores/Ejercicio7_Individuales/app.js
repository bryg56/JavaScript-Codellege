let btnCodifica = document.getElementById('cadena');
EventListener();

function EventListener() {
    btnCodifica.addEventListener('change', codifica);
}

function codifica(event) {
    let arrayString = [];
    let stringValue = btnCodifica.value;
    let mensaje = "";
    let letra = "";
    for (let i = 0; i < stringValue.length; i++) {
        arrayString[i] = stringValue.charCodeAt(i);
        // arrayString[i] += 3;
        letra = String.fromCharCode(arrayString[i] + 3);
        mensaje += `${letra}`;
    }
    document.getElementById('Codificacion').innerHTML = mensaje;

}