document.querySelector("#loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    
    // Elementos del DOM
    const form = e.target;
    const usuarioInput = document.getElementById("usuario");
    const contrasenaInput = document.getElementById("contrasena");
    const mensajeError = document.getElementById("mensaje");
    
    // Limpiar mensajes anteriores
    mensajeError.textContent = "";
    
    // Validación básica del cliente
    if (!usuarioInput.value.trim() || !contrasenaInput.value.trim()) {
        mensajeError.textContent = "Por favor completa todos los campos";
        return;
    }
    
    // Mostrar estado de carga
    const submitButton = form.querySelector("button[type='submit']");
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = "Cargando...";
    submitButton.disabled = true;
    
    try {
        // Obtener usuarios de la API
        const response = await fetch('https://67353d355995834c8a92402b.mockapi.io/Iniciilo');
        
        if (!response.ok) {
            throw new Error(`Error en la respuesta: ${response.status}`);
        }
        
        const users = await response.json();
        const user = users.find(u => 
            u.usuario === usuarioInput.value.trim() && 
            u.contrasena === contrasenaInput.value.trim()
        );
        
        if (user) {
            // Guardar estado de sesión (puedes usar localStorage, cookies, etc.)
            localStorage.setItem('userLoggedIn', 'true');
            localStorage.setItem('username', user.usuario);
            
            // Redireccionar después de un breve retraso para mejor UX
            setTimeout(() => {
                window.location.href = "/ingreso";
            }, 500);
        } else {
            mensajeError.textContent = "Usuario o contraseña incorrectos";
            contrasenaInput.value = ""; // Limpiar campo de contraseña
            contrasenaInput.focus(); // Poner foco en el campo de contraseña
        }
    } catch (error) {
        console.error("Error en el inicio de sesión:", error);
        mensajeError.textContent = "Error al conectar con el servidor. Intente nuevamente.";
    } finally {
        // Restaurar el botón a su estado original
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
    }
});