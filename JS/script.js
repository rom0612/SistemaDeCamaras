<<<<<<< Updated upstream
function login() {
    let divMensaje = document.querySelector('#mensaje');
    let usuario = document.querySelectorAll('.entradaTexto')[0].value;
    let contra = document.querySelectorAll('.entradaTexto')[1].value;

    if (usuario === "equipo2" && contra === "123") {
        window.location.href = "pages/principal.html";
    } else {
        divMensaje.innerHTML = "Acceso Denegado. Usuario o contraseña incorrectos.";
        divMensaje.style.backgroundColor = "#f8d7da";
        divMensaje.style.border = "2px solid #f5c6cb";
        divMensaje.style.padding = "10px";
        divMensaje.style.borderRadius = "10px";
        divMensaje.style.color = "#721c24";;
=======
async function login() {
    let divMensaje = document.querySelector('#divMensaje'); 
    let correo = document.getElementById('correo').value;
    let contra = document.getElementById('contrasena').value;
    let rolSeleccionado = document.getElementById('rolUsuario').value; 

    if (!rolSeleccionado) {
        divMensaje.innerHTML = "Por favor, seleccione su rol.";
        divMensaje.className = "error-estilo";
        return;
    }

    // Buscamos al usuario por correo y contraseña
    const { data, error } = await db
        .from('usuarios')
        .select('*, roles(nombre)') 
        .eq('correo', correo)
        .eq('password', contra);

    if (error) {
        divMensaje.innerHTML = "Error de conexión: " + error.message;
        return;
    }

    if (data.length > 0) {
        const usuario = data[0];
        
        // Validamos si el rol en BD coincide con el rol seleccionado
        if (usuario.rol !== rolSeleccionado) {
            divMensaje.innerHTML = "Acceso denegado: Rol incorrecto para este usuario.";
            divMensaje.className = "error-estilo";
        } else {
            localStorage.setItem("usuario", usuario.nombre);
            localStorage.setItem("rol", usuario.rol);
            window.location.href = "pages/principal.html";
        }
    } else {
        divMensaje.innerHTML = "Acceso Denegado. Credenciales incorrectas.";
        divMensaje.className = "error-estilo";
>>>>>>> Stashed changes
    }
}

document.getElementById('btnIngresar').addEventListener("click", login);