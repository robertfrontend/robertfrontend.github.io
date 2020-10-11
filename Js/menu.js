// Variables
const botonMenu = document.querySelector('.icoMenu');
let contentMenu = document.querySelector('.linkMenu');
let iconoMenu = document.getElementById('icono');

let estadoM = false;

// Templates
const templateMenu = `
<div class="padre">
    <div>
        <a id="links" href="#">Inicio</a>
        <a id="links" href="#sobreMi">Sobre Mi</a>
        <a id="links" href="#habilidades">Habilidades</a>
        <a id="links" href="#portafolio">Portafolio</a>
    </div>
    <div>
        <a href="#contacto" class="boton-1">Contactos</a>
    </div>
</div>
`;

//Clases
class AbMenu{
    openMenu(tipo){
        if(tipo === 'open'){
            contentMenu.innerHTML = templateMenu
            contentMenu.className = 'openMenu';
            iconoMenu.name = 'close-outline';
            iconoMenu.style.color = 'white'; 
            iconoMenu.style.position = 'fixed'; 
            contentMenu.style.position = 'fixed'
        }
        if(tipo === 'close'){
            contentMenu.innerHTML = "";
            contentMenu.className = 'linkMenu'
            iconoMenu.name = 'menu-outline'
            iconoMenu.style.color = 'white';
            iconoMenu.style.position = 'relative'; 
        }
    };
};
// Event listener
botonMenu.addEventListener('click', abrirMenu);

// Funciones
function abrirMenu() {  

    const abMen = new AbMenu();
    switch(estadoM){
        case false:
            abMen.openMenu('open')
            estadoM = true;
            break;

        case true:
            estadoM = false;
            abMen.openMenu('close')
            break;
    }
}

