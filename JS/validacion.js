
const formulario = document.querySelector(".formulario");



const datos = {
    name:'',
    email:'',
    mensaje:''
}
const name = document.querySelector('#name');
const email = document.querySelector('#correo');
const mensaje = document.querySelector('#mensaje');



name.addEventListener('input',leerTexto)
email.addEventListener('input',leerTexto)
mensaje.addEventListener('input',leerTexto)

function leerTexto (e){
    datos[e.target.id] = e.target.value;
    console.log(e)
}

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    // Simulamos el envío del formulario mostrando los datos en la consola
    console.log("Datos del formulario:", datos);
});

formulario.addEventListener('submit',function(e){
    e.preventDefault();

    // Comprobar que no haya campos de datos vacios
    const {name,
    email,
    mensaje} = datos;



    // Si un campo esta vacio, mostrar error
if(name === "" || email === "" || mensaje === ""){
    // const hayError= true;
    // mostrarError("Todos los campos son obligatorios");
    mensajeEnviar("Todos los campos son obligatorios", 'error')
    return;
}
    // Si todo esta correcto enviar y mostrar mensaje de enviado
    // const hayError= false;
    // mostrarMensaje("Mensaje enviado correctamente")
    mensajeEnviar("Mensaje enviado correctamente", 'ok')
})

const mensajeEnviar = (mensaje, clase) =>{
    const mostrar = document.createElement('p')
    mostrar.textContent = mensaje;
    mostrar.classList.add(clase);
    formulario.appendChild(mostrar);
    setTimeout(()=>{
        mostrar.remove()
        },2000)
    }
