class Voto {
    favor = 0;
    contra = 0;
    abstencion = 0;
    resultadoTexto = "rechaza";
    constructor() {
        this.favor = 0;
        this.contra = 0;
        this.abstencion = 0;
    }
    incrementFavor() {
        this.favor += 1;
    }
    incrementContra() {
        this.contra += 1;
    }
    incrementAbs() {
        this.abstencion += 1;
    }
    imprimir() {
        if (this.favor > this.contra && this.favor >= this.abstencion) {
            this.resultadoTexto = "acepta";
        } else if (this.contra > this.favor && this.contra >= this.abstencion) {
            this.resultadoTexto = "rechaza"
        } else if (this.abstencion > this.favor && this.abstencion > this.contra) {
            this.resultadoTexto = "abstiene";
        }
        Swal.fire(`La nocion se ${this.resultadoTexto} con: ${this.favor} votos a favor, ${this.contra} votos en contra y ${this.abstencion} abstenciones`);
    }
}