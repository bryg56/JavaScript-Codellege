const listaPersonas = document.getElementById('lista-personas');
const btnAgregar = document.getElementById('persona');

eventlistener();


function eventlistener() {
    // document.addEventListener('DOMContentLoaded', lista_Personas_2);
    btnAgregar.addEventListener('click', agregarPersona);

}
Agenda = new agenda();
Agenda.ponAgendaEnCampo();

function agregarPersona() {
    let fec = new Date();
    let fech = `${fec.getFullYear()},${(Number(fec.getMonth()))+1},${fec.getDate()}`;
    if (document.getElementById('nombre').value != '' && document.getElementById('telefono').value != '') {
        const persona = {
            nombre: document.getElementById('nombre').value,
            telefono: document.getElementById('telefono').value,
            fecha: fech
        }
        Agenda.addPersonaLS(persona);
    } else {
        Swal.fire({
            position: 'top-end',
            type: 'warning',
            title: 'Campos vacios unu ',
            showConfirmButton: false,
            timer: 1000
        })
    }

}