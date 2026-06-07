const campos = [
    {name: 'nombre', label: 'Nombre Completo', type:'text'},
    {name: 'correo', label: 'Correo', type:'email'},
    {name: 'password', label: 'Contraseña', type:'password'},
    {name: 'rol', label: 'Rol de Usuario', type:'select'} 
];

const contenedor = document.getElementById('contenedorInputs');

campos.forEach((campo) => {
    const label = document.createElement('label');
    label.textContent = campo.label;
    label.htmlFor = campo.name;

    const input = document.createElement('input');
    input.type = campo.type;
    input.name = campo.name;
    input.id = campo.name;
    input.placeholder = "Ingresa tu " + campo.name;
    input.classList.add('entradaTexto');

    contenedor.appendChild(label);
    contenedor.appendChild(input);
});

document.getElementById('btnRegistrar').addEventListener('click', async () => {

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const password = document.getElementById('password').value;
    

    const rol = document.getElementById('rolUsuario').value; 

   
    const { data, error } = await db
        .from('usuarios')
        .insert([{ 
            nombre: nombre, 
            correo: correo, 
            password: password, 
            rol: rol
        }]);
        
    if(error){
        alert('Ocurrió un error: ' + error.message);
    } else {
        alert('Personal registrado correctamente');
        window.location.href = "../index.html";
    }
});