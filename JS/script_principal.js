let usuario = localStorage.getItem("usuario");
let rol = localStorage.getItem("rol");

document.getElementById("bienvenida").innerHTML = `Bienvenido ${usuario} (${rol})`;


if (rol !== 'ti') {
    document.getElementById("btnConfiguracion").style.display = 'none';
}