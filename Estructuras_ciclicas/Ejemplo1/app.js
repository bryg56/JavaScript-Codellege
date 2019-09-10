sumaCantidades();

function sumaCantidades() {
    let y = 0;
    //Estructura ciclica la cual se compone de un inicalizador(variable inicializada, conidicion logica, incrementadorla cual nos ayuda a la ejecucion repetitiva de un bloque de codigo 
    for (let i = 0; i < 10; i++) {
        y += i;
        // console.log("resultado:" + y);
        //Se crea el elemento li por medio del metodo CreateElement y se asigna a la variable newli
        let newli = document.createElement('li');
        //Se asigna el atributo id y class a la variable newli
        newli.setAttribute("id", `listaN${i}`);
        newli.setAttribute("class", "list-group-item");
        //Se crea el nodo de texto por medio del metodo CreateTextNode
        let newContent = document.createTextNode(y);
        //Se inserta un hijo por medio del metodo appenChild a la variable newli
        newli.appendChild(newContent);

        let listaDesordenada = document.getElementById('listaNumerica');
        listaDesordenada.appendChild(newli);
    }
}