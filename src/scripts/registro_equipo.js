// Selecciona los botones por su ID
const botonSiguiente = document.getElementById("mostrarFormEntrenador");
const botonRegistrar = document.getElementById("registrarEquipo");

// Selecciona los formularios por su ID
const formEquipo = document.getElementById("formEquipo");
const formEntrenador = document.getElementById("formEntrenador");

botonSiguiente.addEventListener("click", () => {
  mostrarFormEntrenador();
});

botonRegistrar.addEventListener("click", () => {
  RegistrarJugador();
});

function mostrarFormEntrenador() {
  if (formEquipo && formEntrenador) {
    formEquipo.classList.add("hidden");
    formEntrenador.classList.remove("hidden");
  }
}

function RegistrarJugador() {
  const nombreEntrenador = document.getElementById("nombreEntrenador").value;
  const telefonoEntrenador =
    document.getElementById("TelefonoEntrenador").value;
  const emailEntrenador = document.getElementById("telefonoEntrenador").value;

  if (nombreEntrenador && telefonoEntrenador && emailEntrenador) {
    alert("¡Registro completado correctamente!");
    setTimeout(() => {
    window.location.href = "/sesiones/sesion-directivo";
    }, 5000);
  } else {
    alert("Por favor, complete todos los campos requeridos.");
  }
}
