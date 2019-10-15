let idBtn = document.getElementById('idBtn');

EventListener();

function EventListener() {
    idBtn.addEventListener('click', VelocidadEnProyectil);
}

async function VelocidadEnProyectil() {
    let proyectil = new Proyectil(Number(document.getElementById('idVelocidad').value), Number(document.getElementById('idGrados').value));
    proyectil.borrar();
    console.log(proyectil.velocidadInicial);
    console.log(proyectil.angulo);
    for (let tiempo = 0; tiempo <= 10; tiempo += 0.01) {
        let posicionX = proyectil.calcularVelocidadX(tiempo);
        let posicionY = proyectil.calcularVelocidadY(tiempo);
        if (posicionX >= 0 && posicionY >= 0 && posicionY <= 100 & posicionX <= 100 && Number(document.getElementById('idGrados').value) <= 90) {
            await stop(posicionX, posicionY, proyectil);
        }

    }
}

function stop(posicionX, posicionY, proyectil) {
    return new Promise((res, rej) => {
        setTimeout(() => res(proyectil.crearSpan(posicionX, posicionY), 200));
    })
}