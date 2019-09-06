let bton_c = document.getElementById("calc");
let imprime = document.getElementById("resu");
let INumber = document.getElementById("numero");
Event();

function Event() {
    bton_c.addEventListener('click', verificar);
    INumber.addEventListener('blur', verificar2)

}

function verificar() {
    let n = Number(document.getElementById("numero").value);
    if (n >= 1000) {
        imprime.innerHTML = `<h4 class="alert-heading text-center text-danger">Error el numero es mayor a 3 cifras</h4>`;
    } else if ((n / 100) >= 1) {
        imprime.innerHTML = `<h4 class="alert-heading text-center">El numero es de 3 cifras</h4>`;
    } else if ((n / 10) >= 1) {
        imprime.innerHTML = `<h4 class="alert-heading text-center">El numero es de 2 cifras</h4>`;
    } else if ((n / 1) >= 1) {
        imprime.innerHTML = `<h4 class="alert-heading text-center">El numero es de 1 cifras</h4>`;
    }
}

function verificar2(event) {
    // if (event.key == "Enter") {
    let n = Number(document.getElementById("numero").value);
    if (n >= 1000) {
        imprime.innerHTML = `<h4 class="alert-heading text-center text-danger">Error el numero es mayor a 3 cifras</h4>`;
    } else if ((n / 100) >= 1) {
        imprime.innerHTML = `<h4 class="alert-heading text-center">El numero es de 3 cifras</h4>`;
    } else if ((n / 10) >= 1) {
        imprime.innerHTML = `<h4 class="alert-heading text-center">El numero es de 2 cifras</h4>`;
    } else if ((n / 1) >= 1) {
        imprime.innerHTML = `<h4 class="alert-heading text-center ">El numero es de 1 cifras</h4>`;
    }
    // }
}