function login() {
    let divMensaje = document.querySelector('#mensaje');
    let usuario = document.querySelectorAll('.entradaTexto')[0].value;
    let contra = document.querySelectorAll('.entradaTexto')[1].value;

    if (usuario === "admin" && contra === "admin") {
        localStorage.setItem("usuario", usuario);
        window.location.href = "pages/principal.html";
    } else {
        divMensaje.innerHTML = "Acceso Denegado. Usuario o contraseña incorrectos.";
        divMensaje.style.backgroundColor = "#f8d7da";
        divMensaje.style.border = "2px solid #f5c6cb";
        divMensaje.style.padding = "10px";
        divMensaje.style.borderRadius = "10px";
        divMensaje.style.color = "#721c24";;
    }
}

const btnIngresar = document.getElementById('btnIngresar');
btnIngresar.addEventListener("click", login);