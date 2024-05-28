// Clase Animal
class Animal {
    constructor(nombre, edad, imagen, comentarios, sonido) {
        this.nombre = nombre;
        this.edad = edad;
        this.imagen = imagen;
        this.comentarios = comentarios;
        this.sonido = sonido;
    }

    get Nombre() {
        return this.nombre;
    }

    get Edad() {
        return this.edad;
    }

    get Imagen() {
        return this.imagen;
    }

    get Comentarios() {
        return this.comentarios;
    }

    set Comentarios(nuevosComentarios) {
        this.comentarios = nuevosComentarios;
    }

    get Sonido() {
        return this.sonido;
    }
}

// Clase Mamifero
class Mamifero extends Animal {
    constructor(nombre, edad, imagen, comentarios, sonido) {
        super(nombre, edad, imagen, comentarios, sonido);
    }
}

// Clase Reptil
class Reptil extends Animal {
    constructor(nombre, edad, imagen, comentarios, sonido) {
        super(nombre, edad, imagen, comentarios, sonido);
    }
}

// Exportar las clases
export { Animal, Mamifero, Reptil };
