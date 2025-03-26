

// Selecciona el botón por su ID
const botonSiguiente = document.getElementById('mostrarFormJugador');
const botonRegistrar = document.getElementById('mostrarFormAcudiante')
if (botonSiguiente) {
    botonSiguiente.addEventListener('click', () => {
        mostrarFormAcudiente()
    });
} else {
    console.error('El botón con id "mostrarFormJugador" no fue encontrado.');
}
if (botonRegistrar) {
    botonRegistrar.addEventListener('click', () => {
        RegistrarJugador()
        setTimeout(() => {
            window.location.href = '/ingreso';
        }, 3000);
    });
} else {
    console.error('El botón con id "mostrarFormJugador" no fue encontrado.');
}

function mostrarFormAcudiente() {
    const formAcudiente = document.getElementById('formAcudiente');
    if (formJugador && formAcudiente) {
        formJugador.classList.add('hidden');
        formAcudiente.classList.remove('hidden');
    }
}

function RegistrarJugador() {
    if (formAcudiente) {
        alert('¡Registro completado correctamente!');
    }
}