let bton_c = document.getElementById('buton');
let imprimer = document.getElementById('resultado');
event();

function event() {
    bton_c.addEventListener('click', calcula);
}

function calcula() {
    let n1 = Number(document.getElementById('nA').value);
    let n2 = Number(document.getElementById('nB').value);
    let n3 = Number(document.getElementById('nC').value);
    let n4 = Number(document.getElementById('nD').value);
    let menor = 0;
    let promedio = 0;
    if (n1 >= n2 && n1 >= n3 && n1 >= n4) {
        if (n2 >= n3 && n2 >= n4) {
            if (n4 >= n3) {
                menor = n3;
            } else {
                menor = n4;
            }
        } else if (n3 >= n2 && n3 >= n4) {
            if (n4 >= n2) {
                menor = n2;
            } else {
                menor = n4;
            }

        } else if (n4 >= n2 && n4 >= n3) {
            if (n3 > n2) {
                menor = n2;
            } else {
                menor = n3;
            }
        }
    } else if (n2 >= n1 && n2 >= n3 && n2 >= n4) {
        if (n1 >= n3 && n1 >= n4) {
            if (n4 >= n3) {
                menor = n3;
            } else {
                menor = n4;
            }

        } else if (n3 >= n1 && n3 >= n4) {
            if (n4 >= n1) {
                menor = n1;
            } else {
                menor = n4;
            }

        } else if (n4 >= n1 && n4 >= n3) {
            if (n3 > n1) {
                menor = n1;
            } else {
                menor = n3;
            }

        }
    } else if (n3 >= n1 && n3 >= n2 && n3 >= n4) {
        if (n2 >= n1 && n2 >= n4) {
            if (n4 >= n1) {
                menor = n1;
            } else {
                menor = n4;
            }

        } else if (n1 >= n2 && n1 >= n4) {
            if (n4 >= n2) {
                menor = n2;
            } else {
                menor = n4;
            }

        } else if (n4 >= n2 && n4 >= n1) {
            if (n1 > n2) {
                menor = n2;
            } else {
                menor = n1;
            }

        }
    } else if (n4 >= n1 && n4 >= n2 && n4 >= n3) {
        if (n2 >= n3 && n2 >= n1) {
            if (n1 >= n3) {
                menor = n3;
            } else {
                menor = n1;
            }

        } else if (n3 >= n2 && n3 >= n1) {
            if (n1 >= n2) {
                menor = n2;
            } else {
                menor = n1;
            }

        } else if (n1 >= n2 && n1 >= n3) {
            if (n3 > n2) {
                menor = n2;
            } else {
                menor = n3;
            }
        }
    }
    console.log(menor);
    promedio = n1 + n2 + n3 + n4 - menor;
    promedio /= 3;
    imprimer.innerHTML = promedio;

}