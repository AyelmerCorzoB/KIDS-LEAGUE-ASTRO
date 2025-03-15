
// Variables globales
const paso1 = document.getElementById("paso1");
const paso2 = document.getElementById("paso2");
const continuar = document.getElementById("continuar");
const atras = document.getElementById("atras");
const guardar = document.getElementById("guardar");
const error = document.getElementById("error");
const tituloLocal = document.getElementById("tituloLocal");
const tituloVisitante = document.getElementById("tituloVisitante");
const listaJugadoresLocal = document.getElementById("listaJugadoresLocal");
const listaJugadoresVisitante = document.getElementById("listaJugadoresVisitante");
const agregarGol = document.getElementById("agregarGol");

let limite = {
    tarjetasAmarillas: 0,
    tarjetasRojas: 0,
    goles: 0,
};

// Event Listeners
continuar.addEventListener("click", avanzarAPaso2);
atras.addEventListener("click", retrocederAPaso1);
guardar.addEventListener("click", guardarDetalles);
agregarGol.addEventListener("click", agregarGolJugador);

// Delegación de eventos para botones de tarjetas
document.addEventListener("click", (event) => {
    if (event.target.dataset.tipo) {
        const equipo = event.target.dataset.equipo;
        const tipo = event.target.dataset.tipo;
        agregarJugador(equipo, tipo);
    }
});

// Función para avanzar al Paso 2
function avanzarAPaso2() {
    if (validarFormulario()) {
        paso1.classList.add("hidden");
        paso2.classList.remove("hidden");
        tituloLocal.textContent = `Equipo local: ${document.getElementById("equipoLocal").value}`;
        tituloVisitante.textContent = `Equipo Visitante: ${document.getElementById("equipoVisitante").value}`;
        limite.tarjetasAmarillas = parseInt(document.getElementById("tarjetasAmarillas").value);
        limite.tarjetasRojas = parseInt(document.getElementById("tarjetasRojas").value);
        limite.goles = 0; // Reiniciar el contador de goles
        actualizarBotones();
    }
}

// Función para retroceder al Paso 1
function retrocederAPaso1() {
    paso2.classList.add("hidden");
    paso1.classList.remove("hidden");
}

// Función para validar el formulario
function validarFormulario() {
    const formulario = document.getElementById("formularioPartido");
    if (formulario.checkValidity()) {
        error.textContent = "";
        return true;
    } else {
        error.textContent = "Por favor, complete todos los campos requeridos.";
        return false;
    }
}

// Función para agregar un jugador
function agregarJugador(equipo, tipo) {
    const tipoCapitalizado = tipo.charAt(0).toUpperCase() + tipo.slice(1) + "s";
    if (limite[`tarjetas${tipoCapitalizado}`] > 0) {
        const lista = equipo === "local" ? listaJugadoresLocal : listaJugadoresVisitante;
        const jugadorDiv = document.createElement("div");
        jugadorDiv.className = "flex items-center gap-2 mb-2";
        jugadorDiv.innerHTML = `
          <input type="text" placeholder="Nombre del jugador" class="p-2 border rounded-lg flex-grow" required>
          <span class="tarjeta ${tipo}"></span>
          <button class="eliminarBtn bg-red-500 text-white px-2 py-1 rounded-lg" type="button">Eliminar</button>
        `;
        lista.appendChild(jugadorDiv);
        lista.classList.remove("hidden");
        limite[`tarjetas${tipoCapitalizado}`]--;
        actualizarBotones();
    }
}

// Función para agregar un gol
function agregarGolJugador() {
    if (limite.goles < 5) {
        const golesDiv = document.createElement("div");
        golesDiv.className = "flex items-center gap-2 mb-2";
        golesDiv.innerHTML = `
          <input type="text" placeholder="Jugador que marcó el gol" class="p-2 border rounded-lg flex-grow" required>
          <select class="p-2 border rounded-lg" required>
            <option value="${document.getElementById("equipoLocal").value}">${document.getElementById("equipoLocal").value}</option>
            <option value="${document.getElementById("equipoVisitante").value}">${document.getElementById("equipoVisitante").value}</option>
          </select>
          <button class="eliminarBtn bg-red-500 text-white px-2 py-1 rounded-lg" type="button">Eliminar</button>
        `;
        document.getElementById("golesContainer").appendChild(golesDiv);
        limite.goles++;
        actualizarBotones();
    }
}

// Función para actualizar el estado de los botones
function actualizarBotones() {
    const botonesTarjetas = document.querySelectorAll("[data-tipo]");
    botonesTarjetas.forEach((btn) => {
        const tipo = btn.dataset.tipo;
        const tipoCapitalizado = tipo.charAt(0).toUpperCase() + tipo.slice(1) + "s";
        btn.disabled = limite[`tarjetas${tipoCapitalizado}`] <= 0;
        btn.classList.toggle("opacity-50", btn.disabled);
        btn.classList.toggle("cursor-not-allowed", btn.disabled);
    });

    agregarGol.disabled = limite.goles >= 5;
    agregarGol.classList.toggle("opacity-50", agregarGol.disabled);
    agregarGol.classList.toggle("cursor-not-allowed", agregarGol.disabled);
}

// Función para guardar los detalles del partido
function guardarDetalles() {
    const mensajeExito = document.createElement("div");
    mensajeExito.className = "fixed top-0 left-0 w-full bg-green-500 text-white text-center py-4 font-bold";
    mensajeExito.textContent = "Detalles guardados correctamente.";
    document.body.appendChild(mensajeExito);

    setTimeout(() => {
        location.href = "Registro.html";
    }, 3000);
}
