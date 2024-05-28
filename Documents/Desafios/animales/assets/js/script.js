import { Animal, Mamifero, Reptil } from './clases.js';

// Función autoejecutable IIFE
(function() {
    console.log('Inicialización de la aplicación');
})();

// Función para obtener la imagen del animal
async function obtenerImagen(animal) {
    const imagenes = {
        'Leon': 'assets/img/leon.png',
        'Lobo': 'assets/img/lobo.jpg',
        'Oso': 'assets/img/oso.jpg',
        'Serpiente': 'assets/img/serpiente.jpg',
        'Aguila': 'assets/img/aguila.png'
    };
    return imagenes[animal];
}

// Función para obtener el sonido del animal
function obtenerSonido(animal) {
    const sonidos = {
        'Leon': 'assets/sonidos/Rugido.mp3',
        'Lobo': 'assets/sonidos/Aullido.mp3',
        'Oso': 'assets/sonidos/Grunido.mp3',
        'Serpiente': 'assets/sonidos/Siseo.mp3',
        'Aguila': 'assets/sonidos/Chillido.mp3'
    };
    return sonidos[animal];
}

// Event listener para el formulario de registro de animales
document.getElementById('btnRegistrar').addEventListener('click', async (event) => {
    event.preventDefault();

    const nombre = document.getElementById('animal').value;
    const edad = document.getElementById('edad').value;
    const comentarios = document.getElementById('comentarios').value;

    if (!nombre || !edad || !comentarios) {
        alert('Por favor, completa todos los campos del formulario.');
        return;
    }

    const imagen = await obtenerImagen(nombre);
    const sonido = obtenerSonido(nombre);

    let animal;
    if (['Leon', 'Lobo', 'Oso'].includes(nombre)) {
        animal = new Mamifero(nombre, edad, imagen, comentarios, sonido);
    } else if (['Serpiente', 'Aguila'].includes(nombre)) {
        animal = new Reptil(nombre, edad, imagen, comentarios, sonido);
    }

    mostrarAnimales(animal);

    // Resetear el formulario
    document.getElementById('animal').value = '';
    document.getElementById('edad').value = '';
    document.getElementById('comentarios').value = '';
});

// Función para mostrar animales en la tabla
function mostrarAnimales(animal) {
    const animalesDiv = document.getElementById('Animales');
    const animalDiv = document.createElement('div');
    animalDiv.classList.add('card', 'col-6', 'bg-light'); // Ajuste aquí

    animalDiv.innerHTML = `
        <img src="${animal.Imagen}" class="card-img-top" alt="${animal.Nombre}" style="max-height: 150px;"> <!-- Ajuste aquí -->
        <div class="card-body">
            <h5 class="card-title" style="font-size: 1rem;">${animal.Nombre}</h5> <!-- Ajuste aquí -->
            <p class="card-text" style="font-size: 0.8rem;">Edad: ${animal.Edad}</p> <!-- Ajuste aquí -->
            <p class="card-text" style="font-size: 0.8rem;">${animal.Comentarios}</p> <!-- Ajuste aquí -->
            <button class="btn btn-primary btn-sm" onclick="reproducirSonido('${animal.Sonido}')">
                <img src="assets/img/audio.svg" alt="Icono sonido" style="width: 20px; height: 20px;">
            </button> <!-- Ajuste aquí -->
            <button class="btn btn-info btn-sm" data-toggle="modal" data-target="#exampleModal" onclick='mostrarDetalles(${JSON.stringify(animal)})'>Ver Detalles</button> <!-- Ajuste aquí -->
        </div>
    `;

    animalesDiv.appendChild(animalDiv);
}





// Función para reproducir el sonido del animal
window.reproducirSonido = function(sonido) {
    const player = document.getElementById('player');
    player.src = sonido;
    player.play();
}

// Función para mostrar detalles del animal en una ventana modal
window.mostrarDetalles = function(animal) {
    const modalBody = document.querySelector('.modal-body');

    modalBody.innerHTML = `
        <h2 style="color: white;">${animal.nombre}</h2> <!-- Ajuste aquí -->
        <img src="${animal.imagen}" alt="${animal.nombre}" class="img-fluid">
        <p style="color: white;">Edad: ${animal.edad}</p> <!-- Ajuste aquí -->
        <p style="color: white;">Comentarios: ${animal.comentarios}</p> <!-- Ajuste aquí -->
    `;

    $('#exampleModal').modal('show');
}

// Event listener para el cambio en el campo de selección de animales
document.getElementById('animal').addEventListener('change', async (event) => {
    const animalSeleccionado = event.target.value;
    const imagenPrevia = document.getElementById('imagenPrevia');

    // Obtener la ruta de la imagen del animal seleccionado
    const imagenURL = await obtenerImagen(animalSeleccionado);
    
    // Actualizar la fuente de la imagen previa
    imagenPrevia.src = imagenURL;
});


