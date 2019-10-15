class agenda {
    nombre = '';
    telefono = '';
    date = new Date();
    fecha = '';
    constructor() {

    }
    addPersonaLS(persona) {
        let ArrayCourses = this.getPersonasLocalStorage();
        ArrayCourses.push(persona);
        localStorage.setItem('personas', JSON.stringify(ArrayCourses));
    }
    ponAgendaEnCampo() {
        let personas = this.getPersonasLocalStorage();
        personas.forEach(function(persona) {
            const row = document.createElement('tr');
            row.innerHTML = `<td>Nombre:${persona.nombre}</td>
            <td>Telefono:${persona.telefono}</td>
            <td>Fecha:${persona.fecha}</td>`;


            listaPersonas.appendChild(row);

        });
    }
    getPersonasLocalStorage() {
        let personas2;

        if (localStorage.getItem('personas') === null) {
            personas2 = [];
        } else {
            personas2 = JSON.parse(localStorage.getItem('personas'));
        }
        return personas2;
    }
}