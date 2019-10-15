EventListener();
let ArrayPositionPrize = [];

function EventListener() {
    // imagenCarro.addEventListener('keyup', MoveCar);
    document.addEventListener('keydown', MoveCar);
    document.getElementById('contenedor').addEventListener('click', setPrize);
}
let car = new Car(0, 0);

function MoveCar(event) {
    // console.log(event);
    let image = document.getElementById('idCar');
    switch (event.key) {
        case 'ArrowRight':
            car.moveRight(image);
            break;
        case 'ArrowLeft':
            car.moveLeft(image);
            break;
        case 'ArrowUp':
            car.moveTop(image);
            break;
        case 'ArrowDown':
            car.moveBot(image);
            break;
    }
    if (ArrayPositionPrize.length > 0) {
        let resultado = car.currentPosition(ArrayPositionPrize, image);
        console.log(resultado);
    }
}

function setPrize(event) {
    // console.log(event);
    let prize = new Prize();
    prize.setPositionX(event.x);
    prize.setPositionY(event.y);
    prize.createElementImg();
    ArrayPositionPrize.push(prize.createElementImg());
    // console.log(ArrayPositionPrize);
}