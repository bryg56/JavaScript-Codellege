let proyectil = new Proyectil(40, 80);
console.log(proyectil.velocidadInicial);
console.log(proyectil.angulo);
for (let tiempo = 0; tiempo <= 10; tiempo += 0.01) {
    proyectil.crearSpan(proyectil.calcularVelocidadX(tiempo), proyectil.calcularVelocidadY(tiempo));
}