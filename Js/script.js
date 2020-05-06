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

//compontenes



//Clasess



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
