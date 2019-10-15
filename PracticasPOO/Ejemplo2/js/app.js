let accBtn = document.getElementById('Aceptar');
let favor = document.getElementById("favorID");
let contra = document.getElementById("contraID");
let abstencion = document.getElementById("abstencionID");
let pregunta = document.getElementById('pregunta2');
let divCasilla = document.getElementById('Casilla');
let divPregunta = document.getElementById('pregunta');
let finaliza = document.getElementById('finaliza');
let votos = new Voto();
EventListener();

function EventListener() {
    console.log("SI entrowe");
    accBtn.addEventListener('click', escribirPregunta);
    favor.addEventListener('click', aumentaFavor);
    contra.addEventListener('click', aumentaContra);
    abstencion.addEventListener('click', aumentaAbs);
    finaliza.addEventListener('click', imprime);
}

function escribirPregunta() {
    console.log("Entre");
    divCasilla.style.display = "block";
    divPregunta.style.display = "none";
    pregunta.innerHTML = document.getElementById("idAceptar").value;
}

function aumentaFavor() {
    votos.incrementFavor();
}

function aumentaContra() {
    votos.incrementContra();
}

function aumentaAbs() {
    votos.incrementAbs();
}

function imprime() {
    votos.imprimir();
}