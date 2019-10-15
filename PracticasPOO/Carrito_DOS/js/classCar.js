class Carrito {
    LS;
    constructor() {

        this.LS = new LocalStorage();
    }

    readDataCourse(curso, listaCursos) {

        const dataCourse = {
            imagen: curso.querySelector('img').src,
            titulo: curso.querySelector('h4').textContent,
            precio: curso.querySelector('.precio span').textContent,
            id: curso.querySelector('a').getAttribute('data-id')
        }

        // console.log(dataCourse);

        this.addCourseCard(dataCourse, listaCursos);
    }

    addCourseCard(dataCourse, listaCursos) {
        // console.log(dataCourse.imagen);


        const row = document.createElement('tr');

        row.innerHTML = ` 
        <td><img src="${dataCourse.imagen}" width=100></td>
        <td>${dataCourse.titulo}</td>
        <td>${dataCourse.precio}</td>
        <td><a href="#" class="borrar-curso" data-id="${dataCourse.id}">X</td>
        `

        listaCursos.appendChild(row);

        this.LS.SaveCourseLocalStorage(dataCourse);
    }
    EliminarCursoCarrito(event) {
        event.preventDefault();
        // let LS2 = new LocalStorage();
        // LS2 = LS;
        let curso;
        let cursoID;
        if (event.target.classList.contains('borrar-curso')) {
            curso = event.target.parentElement.parentElement;
            cursoID = curso.querySelector('a').getAttribute('data-id');
            curso.remove();
            this.LS.eliminarCursoLS(cursoID);
        }
    }
    ShowCoursesLSCar() {
        // let LS = new LocalStorage();

        let CoursesLS = this.LS.GetCoursesLocalStorage()


        CoursesLS.forEach(function(curso) {

            const row = document.createElement('tr');

            row.innerHTML = `
            <td><img src="${curso.imagen}" width=100></td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td><a href="#" class="borrar-curso" data-id="${curso.id}">X</td>
            `

            listaCursos.appendChild(row);


        });
    }
    vaciarCarrito(listaCursos) {
        //FormaLenta
        // listaCursos.innerHTML = "";
        //FormaRapida
        while (listaCursos.firstChild) {
            listaCursos.removeChild(listaCursos.firstChild);
        }
        this.LS.eliminaTodo()
    }
    verificarCarro(course) {
        let popo = this.LS.verificaEnLocalStorage(course.querySelector('a').getAttribute('data-id'));
        console.log(popo);
        if (popo == true) {
            console.log("Entre a true");
            return true;

        } else {
            console.log("Entre a false");
            return false;
        }

    }


}