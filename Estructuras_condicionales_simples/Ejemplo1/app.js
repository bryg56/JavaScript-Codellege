let bton_c = document.getElementById('verifica');
event();

function event() {
    bton_c.addEventListener('click', verifica);
}

function verifica() {
    let promedio = Number(document.getElementById('cali').value);

    if (promedio > 8) {
        console.log("Aprobado");
        let imprime = document.getElementById('status');
        imprime.innerHTML = 'Aprobado'
    } else {
        console.log("Reprobado");
        let imprime = document.getElementById('status');
        imprime.innerHTML = 'Reprobado';
        let audio = document.getElementById('donRa');
        audio.play();
    }
}