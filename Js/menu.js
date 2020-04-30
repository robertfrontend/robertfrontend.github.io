// Variables
const botonMenu = document.querySelector('.icoMenu');
let contentMenu = document.querySelector('.linkMenu');
let estadoM = false;
let iconoMenu = document.getElementById('icono');

// Templates

const logo = `
    <p id="miLogo" >Robert <span>Developer </span></p>

`

const templateMenu = `
<div class="padre">
    <div>
        <a id="links" href="#">Inicio</a>
        <a id="links" href="#sobreMi">Sobre Mi</a>
        <a id="links" href="#Skills">Skills</a>
        <a id="links" href="#portafolio">Portafolio</a>
    </div>
    <div>
        <a href="#contacto" class="boton-1">Contactos</a>
    </div>
</div>
`
// Event listener
botonMenu.addEventListener('click', abrirMenu);


// Funciones
function abrirMenu() {
    switch(estadoM){
        case false:
            contentMenu.innerHTML = templateMenu;
            contentMenu.className = 'openMenu';
            iconoMenu.name = 'close-outline';
            iconoMenu.style.color = 'white';
            estadoM = true;
            break;

        case true:
            estadoM = false;
            contentMenu.innerHTML = "";
            contentMenu.className = 'linkMenu'
            iconoMenu.name = 'menu-outline'
            iconoMenu.style.color = 'black';
            break;
        // default:
        //     return false
    }
}
