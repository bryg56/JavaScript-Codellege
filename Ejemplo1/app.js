//Esta linea crea una variable la cual se encarga de obtener por medio del objeto document el elemento button con el ID "btnCalcular"
//Cashdom
let btnCalcula = document.getElementById('btnCalcula');
//Listeners
//Por medio del método addEventListener se le asigno el evento click al elemento button y al momento de ejecutar dicho evento se ejecutara la funcion suma
btnCalcula.addEventListener('click', suma);

//Functions
//Funcion: bloque de codigo que se ejecuta hasta cuando se manda a llamar o se invoca, mientras no sea invocada no realizara ninguna accion en el codigo
function suma() {
    let numero1 = document.getElementById('Numero1').value;
    let numero2 = document.getElementById('Numero2').value;
    numero1 = Number(numero1);
    numero2 = Number(numero2);
    console.log(numero1);
    console.log(numero2);
    //Se declara la variable "resultado" y se incializa con valor '0';
    let suma = 0;
    //Despues de obtener  los datos de los elementos input se realiza el proceso de suma y se le asigna dicho valor a la variable "resultado"
    suma = numero1 + numero2;
    //Se Asigno a la varible "imprimirResultado" el elemento con el ID "resultado"
    let imprimirResultado = document.getElementById('resultado');
    //Por medio del metodo "innerHTML" se asigna el valor de la variable resultado para que se pueda imprimir en el elemento 
    imprimirResultado.innerHTML = suma;
    console.log(suma);
}
// consola();

function consola() {
    console.log('xyz');
}