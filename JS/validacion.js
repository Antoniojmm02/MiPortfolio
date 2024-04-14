const formulario = document.querySelector("#formulario");



const datos = {
    name:'',
    telefono:'',
    correo:'',
    mensaje:'',
    
}
const name = document.querySelector('#name');
const telefono =document.querySelector('#telefono');
const correo = document.querySelector('#correo');
const mensaje = document.querySelector('#mensaje');


name.addEventListener('input',leerTexto)
telefono.addEventListener('input',leerTexto)
correo.addEventListener('input',leerTexto)
mensaje.addEventListener('input',leerTexto)

function leerTexto (e){
    datos[e.target.id] = e.target.value;
    console.log(e)
}

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log("Datos del formulario:", datos);
});

formulario.addEventListener('submit',function(e){
    e.preventDefault();

    const {name,
    correo,
    mensaje,
    telefono} = datos;

if(name === "" || correo === "" || mensaje === ""||telefono===""){

    mensajeEnviar("Todos los campos son obligatorios", 'error')
    return;
}
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
