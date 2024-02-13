class Libro {
    constructor(titulo, autor){
        this.titulo = titulo
        this.autor = autor
        this.disponibilidad = true
    }

    verEstado(){
        return this.disponibilidad
    }

    prestar(){
        this.disponibilidad = false
    }

    devolver(){
        return this.disponibilidad=true
    }

}

class Socio{
    constructor(nombre,identificacion){
        this.nombre = nombre
        this.identificacion = identificacion
        this.librosList = []
    }

    prestarLibro(libro){
        if (libro.verEstado()){
            this.librosList.push(libro)
            libro.prestar()
        }else{
            console.log('El libro no esta disponible')
        }
    }

    devolverLibro(libro){
        let libroDisponible=this.librosList.indexOf(libro)

        if(libroDisponible!=-1){
            libro.devolver()
            this.librosList.splice(libroDisponible,1)
            console.log("Se ha devuelto el libro")
        }else{
            console.log("No se ha encontrado el libro")
        }

    }

    mostrarLibros(){
        if (this.librosList.length > 0){
            this.librosList.forEach((e=>{
                console.log(e)
            }))
        }else{
            console.log('Ningun libro prestado aun')
        }
    }
}

const libro1 = new Libro('Matemáticas','Valdor')
const libro2 = new Libro('La teoria del todo','Stephen Hawking')

const socio1 = new Socio('Luis Enrrique',123456)
const socio2 = new Socio('Eliseo Guzman',654321)

socio1.prestarLibro(libro1)
socio1.prestarLibro(libro2)
socio1.devolverLibro(libro1)
socio1.mostrarLibros()