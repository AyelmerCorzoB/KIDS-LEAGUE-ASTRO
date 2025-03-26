const botonRegistrar = document.getElementById("registrarCampeonato");

botonRegistrar.addEventListener("click", () => {
  registrarCampeonato();
});

function registrarCampeonato() {
  const nombreCampeonato = document.getElementById("nombreCampeonato").value;
  const precioInscripcion = document.getElementById("precioInscripcion").value;
  const fechaInicio = document.getElementById("fechaInicio").value;
  const fechaFin = document.getElementById("fechaFin").value;

  if (nombreCampeonato && precioInscripcion && fechaInicio && fechaFin) {
    alert("¡Campeonato registrado correctamente!");
    setTimeout(() => {
      window.location.href = "/sesiones/sesion-directivo";
    }, 2000); 
  } else {
    alert("Por favor, complete todos los campos requeridos.");
  }
}