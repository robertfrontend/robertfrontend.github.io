document.write('<script src="./Js/menu.js"></script>')

// Variables

let abrirMen = document.querySelector('.mensajeBienvenida');
let btnCerrarC = document.getElementById('cerrarCon');
let botonContactame = document.getElementById('botContactame')

//Event Listeners

//event listeners del window cargando
window.onload = load;
btnCerrarC.addEventListener('click', cerrarMen)

botonContactame.addEventListener('click', abrirContacto )

//Funciones

// abrir contacto new
function abrirContacto() {
    abrirMen.style.top = '0px';
}

//funcion mostrar mensaje de contacto cuando la pagina cargue
function load(){
    if(window.onload = true) {
       setTimeout(function() {
            abrirMen.style.top = '0px';
       },2000)
    }

};
//funcion cerrar mensaje contacto
function cerrarMen() {
    abrirMen.style.top = '-1000px'
}

//cambiar color de la pagina
const botonColor = document.querySelector('.camb-color');
const body = document.querySelector('body');
const icoCam = document.getElementById('icoCol')
var estado = 'blanco';

botonColor.addEventListener('click', () => { 
    switch(estado) {
        case 'blanco':
            body.className = 'cambiar';
            icoCam.name = 'sunny';
            icoCam.style.transition = 'all .8s';
            estado = 'negro';
            break;
        case 'negro':
            estado = 'blanco';
            icoCam.name = 'moon';
            icoCam.style.transition = 'all .8s';
            body.style.transition = 'all .8s';
            body.className = '';
            break;
    }

});

// validar formulario

const nombre = document.querySelector('.nombre').value
const correo = document.querySelector('.email').value
const botonValidar = document.querySelector('#btnValidar')
const alerta = document.getElementById('alerta')

var mensajeHTML = `
    <div class="alert alert-danger" role="alert">
        Llena todoos los campos.
    </div>
`

// funcion validar formulario
botonValidar.addEventListener('click', () => {
    let valid = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(nombre === '' || correo === '' && correo === valid){
        alerta.innerHTML = mensajeHTML
    }
    else {
        alerta.innerHTML = ''
    }
})
