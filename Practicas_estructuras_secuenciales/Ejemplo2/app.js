let calcula = document.getElementById('calc');
calcula.addEventListener('click', presupuesto);

function presupuesto() {
    let metros = document.getElementById('metros').value;
    let precio = document.getElementById('precio').value;
    metros = Number(metros);
    precio = Number(precio);
    let resultado = 0;
    resultado = metros * precio;
    console.log(resultado);
    let imprime = document.getElementById('resultado')
    imprime.innerHTML = resultado;
}