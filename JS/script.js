async function login() {
    let divMensaje = document.querySelector('#mensaje');
    let usuario = document.querySelectorAll('.entradaTexto')[0].value;
    let contra = document.querySelectorAll('.entradaTexto')[1].value;

    // Buscar usuario en Supabase
    const { data, error } = await db
        .from('usuarios')
        .select('*')
        .eq('correo', usuario)
        .eq('password', contra);

    if (error) {
        divMensaje.innerHTML = error.message;
        divMensaje.style.backgroundColor = "#f8d7da";
        divMensaje.style.color = "#721c24";
        return;
    }

    if (data.length > 0) {
        localStorage.setItem("usuario", data[0].nombre);
        divMensaje.innerHTML = "Acceso concedido";
        divMensaje.style.backgroundColor = "#d4edda";
        divMensaje.style.color = "#155724";
        window.location.href = "pages/principal.html";
    } else {
        divMensaje.innerHTML = "Acceso Denegado. Usuario o contraseña incorrectos.";
        divMensaje.style.backgroundColor = "#f8d7da";
        divMensaje.style.border = "2px solid #f5c6cb";
        divMensaje.style.padding = "10px";
        divMensaje.style.borderRadius = "10px";
        divMensaje.style.color = "#721c24";
    }
}

const btnIngresar = document.getElementById('btnIngresar');
btnIngresar.addEventListener("click", login);