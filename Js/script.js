document.write('<script src="./Js/menu.js"></script>')

// Variables

let abrirMen = document.querySelector('.mensajeBienvenida');
let btnCerrarC = document.getElementById('cerrarCon');


//Event Listeners

//event listeners del window cargando
window.onload = load;
btnCerrarC.addEventListener('click', cerrarMen)

//compontenes



//Clasess



//Funciones

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
;