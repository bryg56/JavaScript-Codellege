class Car {
    posicionX = 0;
    posicionY = 0;
    constructor(posicionX, posicionY) {
        this.posicionX = posicionX;
        this.posicionY = posicionY;
    }

    moveRight(img) {
        // console.log(img);
        img.src = "./images/cocoDerecha.jpg";

        if (this.posicionX <= 90 && this.posicionX >= 0) {
            img.style.left = (this.posicionX++) + "%";
        }

    }
    moveLeft(img) {
        img.src = "./images/coco.jpg";
        if (this.posicionX <= 90 && this.posicionX >= 0) {
            img.style.left = (this.posicionX--) + "%";
        }
    }
    moveTop(img) {
        img.src = "./images/cocoA.jpg";
        img.style.height = "10%";
        if (this.posicionY <= 90 && this.posicionY >= 0) {
            img.style.top = (this.posicionY--) + "%";
        }
    }
    moveBot(img) {
        img.src = "./images/cocoAba.jpg";
        img.style.height = "10%";
        if (this.posicionY <= 90 && this.posicionY >= 0) {
            img.style.top = (this.posicionY++) + "%";
        }
    }
    currentPosition(arrayPositionPrize, image) {
        let positionCarX = image.x;
        let positionCarY = image.y;
        for (let i = 0; i < arrayPositionPrize.length; i++) {
            let ArrayPositionX = arrayPositionPrize[i].posX;
            let ArrayPositionY = arrayPositionPrize[i].posY;
            console.log(`Cordenadas carrito X:${positionCarX}//${ArrayPositionX} Y:${positionCarY}////${ArrayPositionY}`);
            if (positionCarX >= ArrayPositionX - 25 && positionCarY == ArrayPositionY) {
                return true;
            }
        }
        return false;
    }
}