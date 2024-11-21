
const validUsername = "alumno";
const validPassword = "2024";


document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que la página se recargue

    // Obtener los valores ingresados
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validar credenciales
    if (username === validUsername && password === validPassword) {
        // Redirigir a la página de cursos
        window.location.href = "cursos.html";
    } else {
        // Mostrar mensaje de error
        const errorMsg = document.getElementById("errorMsg");
        errorMsg.textContent = "Usuario o contraseña incorrectos. Inténtalo de nuevo.";
    }
});

