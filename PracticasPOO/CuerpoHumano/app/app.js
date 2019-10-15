let imagen = document.getElementById('contedorIMG');

eventListener();

function eventListener() {
    imagen.addEventListener('mousemove', position);
}

function position(event) {
    console.log(event.clientX + "///////" + event.clientY);
    if (event.clientX >= 358 && event.clientX <= 400 && event.clientY >= 66 && event.clientY <= 129) {
        document.getElementById('espa').innerHTML = "Cabeza";
        document.getElementById('ing').innerHTML = "Head";
    } else if (event.clientX >= 344 && event.clientX <= 427 && event.clientY >= 159 && event.clientY <= 185) {
        document.getElementById('espa').innerHTML = "Pecho";
        document.getElementById('ing').innerHTML = "Chest";
    } else if (((event.clientX >= 326 && event.clientX <= 361) || (event.clientX >= 412 && event.clientX <= 445)) && event.clientY >= 131 && event.clientY <= 148) {
        document.getElementById('espa').innerHTML = "Hombros";
        document.getElementById('ing').innerHTML = "Shoulders";
    } else if (((event.clientX >= 319 && event.clientX <= 343) || (event.clientX >= 430 && event.clientX <= 449)) && event.clientY >= 170 && event.clientY <= 275) {
        document.getElementById('espa').innerHTML = "Brazo";
        document.getElementById('ing').innerHTML = "Arm";
    } else if (((event.clientX >= 288 && event.clientX <= 328) || (event.clientX >= 430 && event.clientX <= 461)) && event.clientY >= 277 && event.clientY <= 319) {
        document.getElementById('espa').innerHTML = "Mano";
        document.getElementById('ing').innerHTML = "Hand";
    } else if (((event.clientX >= 288 && event.clientX <= 328) || (event.clientX >= 430 && event.clientX <= 461)) && event.clientY >= 277 && event.clientY <= 319) {
        document.getElementById('espa').innerHTML = "Mano";
        document.getElementById('ing').innerHTML = "Hand";
    } else {
        document.getElementById('espa').innerHTML = "Nada";
        document.getElementById('ing').innerHTML = "Nothing";
    }

}