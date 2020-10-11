document.write('<script src="./Js/menu.js"></script>')

// Variables
let abrirMen = document.querySelector('.mensajeBienvenida');
let btnCerrarC = document.getElementById('cerrarCon');
let botonContactame = document.getElementById('botContactame')
let contentLogo = document.querySelector('#miLogo')

//event listeners del window cargando
window.onload = load;
//Funciones

contentLogo.innerHTML = `Robert<span>rm0</span>`;

// abrir badge de bienvenida
botonContactame.addEventListener('click', abrirContacto )

function abrirContacto() {
    abrirMen.style.top = '0px';
}
//funcion mostrar mensaje de contacto cuando la pagina cargue
function load(){
    if(window.onload = true) {
       setTimeout(function() {
       },30000)
    }
};

//funcion cerrar mensaje contacto
btnCerrarC.addEventListener('click', cerrarMen)

function cerrarMen() {
    abrirMen.style.top = '-1000px'
}

//cambiar color de la pagina
const botonColor = document.querySelector('.camb-color');
const body = document.querySelector('body');
const icoCam = document.getElementById('icoCol')
var estado = 'negro';

botonColor.addEventListener('click', () => { 
    switch(estado) {
        case 'blanco':
            body.className = 'dark';
            icoCam.name = 'sunny';
            icoCam.style.transition = 'all .8s';
            estado = 'negro';
            break;
        case 'negro':
            estado = 'blanco';
            icoCam.name = 'moon';
            icoCam.style.transition = 'all .8s';
            body.style.transition = 'all .8s';
            body.className = 'ligth';
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
`;

// funcion validar formulario
botonValidar.addEventListener('click', () => {

    if(nombre === '' || correo === ''){
        alerta.innerHTML = mensajeHTML;
    }else {
        alerta.innerHTML = '';
    }
})