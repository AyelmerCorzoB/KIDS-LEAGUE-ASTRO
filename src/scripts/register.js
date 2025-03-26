document
  .querySelector("#registerForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = e.target;
    const usuario = document.getElementById("nuevoUsuario").value.trim();
    const contrasena = document.getElementById("nuevaContrasena").value;
    const confirmarContrasena = document.getElementById(
      "confirmarContrasena"
    ).value;

    const errorElement = document.getElementById("registerError");
    const successElement = document.getElementById("registerSuccess");

    errorElement.textContent = "";
    successElement.textContent = "";

    if (!usuario || !contrasena || !confirmarContrasena) {
      errorElement.textContent = "Todos los campos son obligatorios";
      return;
    }

    if (contrasena !== confirmarContrasena) {
      errorElement.textContent = "Las contraseñas no coinciden";
      document.getElementById("nuevaContrasena").value = "";
      document.getElementById("confirmarContrasena").value = "";
      document.getElementById("nuevaContrasena").focus();
      return;
    }

    if (contrasena.length < 6) {
      errorElement.textContent =
        "La contraseña debe tener al menos 6 caracteres";
      return;
    }

    const submitButton = form.querySelector("button[type='submit']");
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = "Registrando...";
    submitButton.disabled = true;

    try {
      const checkUserResponse = await fetch(
        "https://67353d355995834c8a92402b.mockapi.io/Iniciilo"
      );
      const existingUsers = await checkUserResponse.json();


      const newUser = {
        usuario,
        contrasena,
        fechaRegistro: new Date().toISOString(),
      };

      const response = await fetch(
        "https://67353d355995834c8a92402b.mockapi.io/Iniciilo",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        }
      );

      if (!response.ok) {
        throw new Error("Error al registrar usuario");
      }

      successElement.textContent = "¡Registro exitoso! Redirigiendo...";

      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (error) {
      console.error("Error en el registro:", error);
      errorElement.textContent =
        "Error al registrar. Por favor intenta nuevamente.";
    } finally {
      submitButton.textContent = originalButtonText;
      submitButton.disabled = false;
    }
  });
