class LocalStorage {

    constructor() {}

    SaveCourseLocalStorage(curso) {

        let ArrayCourses = this.GetCoursesLocalStorage();
        ArrayCourses.push(curso);
        localStorage.setItem('courses', JSON.stringify(ArrayCourses));
    }

    GetCoursesLocalStorage() {

        let cursosLS;

        if (localStorage.getItem('courses') === null) {
            cursosLS = [];
        } else {
            cursosLS = JSON.parse(localStorage.getItem('courses'));
        }
        return cursosLS;
    }
    eliminarCursoLS(cursoID) {
        console.log(cursoID);
        let cursosLS;
        cursosLS = this.GetCoursesLocalStorage();
        console.log(cursosLS)
        cursosLS.forEach(function(cursoLS, index) {
            console.log("JAHGAGAH" + cursosLS.id);
            if (cursoLS.id === cursoID) {
                cursosLS.splice(index, 1);
                console.log("Entre3")
            }
        });
        localStorage.setItem('courses', JSON.stringify(cursosLS))
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
        })

        Toast.fire({
            type: 'success',
            title: 'Se ha borrado curso exitosamente'
        })
    }
    eliminaTodo() {
        localStorage.clear();
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
        })

        Toast.fire({
            type: 'success',
            title: 'Se ha borrado el carrito exitosamente'
        })
    }
    verificaEnLocalStorage(cursoID) {
        console.log(cursoID);
        console.log("Entre a local estorage")
        let cursosLS;
        let popo = false;
        cursosLS = this.GetCoursesLocalStorage();
        // console.log(cursosLS)
        cursosLS.forEach(function(cursoLS, index) {
            // console.log("JAHGAGAH" + cursosLS.id);
            if (cursoLS.id === cursoID) {
                console.log("Se supone que entro aca pero no");
                popo = true;
            }
        });
        return popo;
    }
}