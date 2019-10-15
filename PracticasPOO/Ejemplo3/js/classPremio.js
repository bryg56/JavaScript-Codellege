class Prize {
    posicionX = 0;
    posicionY = 0;

    constructor() {

    }
    setPositionX(posicionX) {
        this.posicionX = posicionX;
    }
    setPositionY(posicionY) {
        this.posicionY = posicionY;
    }
    get positionX() {
        return this.posicionX;
    }
    get posicionY() {
        return this.posicionY;
    }
    createElementImg() {
        let marginContainer = window.getComputedStyle(document.getElementById('contenedor'));
        let marginleft = marginContainer.getPropertyValue('margin-left');
        marginContainer = marginleft.substring(0, marginleft.length - 2);
        let imgCreate = document.createElement('img');
        imgCreate.setAttribute('src', './images/wumpa.png');
        let posX = (this.posicionX - marginContainer) - 25;
        let posY = (this.posicionY - 25);
        imgCreate.style.left = `${(this.posicionX - marginContainer)}px`;
        imgCreate.style.top = `${(this.posicionY)}px`;
        imgCreate.style.width = "100px";
        imgCreate.style.height = "100px";
        document.getElementById('contenedor').appendChild(imgCreate);
        return { posX, posY }
    }
}