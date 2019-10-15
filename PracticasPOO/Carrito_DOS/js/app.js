const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const objectCar = new Carrito();
const vaciarCarro = document.getElementById('vaciar-carrito');



EventListener();

function EventListener() {
    cursos.addEventListener('click', GetCourse);
    carrito.addEventListener('click', deleteCourse);
    document.addEventListener('DOMContentLoaded', mostrarCursosCarrito);
    vaciarCarro.addEventListener('click', eliminarCarritosCursos);
}

function deleteCourse(event) {
    objectCar.EliminarCursoCarrito(event);

}

function GetCourse(event) {
    event.preventDefault();
    if (event.target.classList.contains('agregar-carrito')) {
        let Course = event.target.parentElement.parentElement;
        // console.log(Course);
        if (objectCar.verificarCarro(Course)) {
            Swal.fire(
                'Error',
                'Lo siento ya no puedes agregar este curso, ya esta en el carrito',
                'warning'
            )
        } else {
            Swal.fire({
                title: '¿Estas seguro de que quieres agregar este curso?',
                text: "Se agregara el curso al carrito",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si,agregar'
            }).then((result) => {
                if (result.value) {
                    objectCar.readDataCourse(Course, listaCursos);
                    Swal.fire(
                        'Yeih',
                        'El curso ha sido agregado al carrito.',
                        'success'
                    )
                }
            })



        }


    }

}

function mostrarCursosCarrito() {
    objectCar.ShowCoursesLSCar();

}

function eliminarCarritosCursos() {
    objectCar.vaciarCarrito(listaCursos);
}