//variables
const botonMenu = document.querySelector('.icoMenu');
let contentMenu = document.querySelector('.linkMenu')
let estadoM = false;

let iconoMenu = document.getElementById('icono');

//event listener
botonMenu.addEventListener('click', abrirMenu);


//templates

const logo = `
    <p id="miLogo" >Robert <span>Developer </span></p>

`

const templateMenu = `
<div class="padre">
    <div>
        <a href="#">Inicio</a>
        <a href="#">Skills</a>
        <a href="#">Portafolio</a>
        <a href="#">Contacto</a>
    </div>
    <div>
        <a href="#" class="boton-1">Contactos</a>
    </div>
</div>
`

//funciones
function abrirMenu() {

    switch(estadoM){
        case false:
            contentMenu.innerHTML = templateMenu;
            contentMenu.style.width = '500px';
            contentMenu.style.height = '100vh';
            iconoMenu.name = 'close-outline'
            iconoMenu.style.color = 'white'
            iconoMenu.style.fontSize = '50px'
            estadoM = true;


            break;

        case true:
            estadoM = false;

            contentMenu.innerHTML = "";
            contentMenu.style.width = '0px';
            contentMenu.style.height = '0vh';
            iconoMenu.name = 'menu-outline'
            iconoMenu.style.color = '#00051de8'

            break;
        // default:
        //     return false
    }
}


