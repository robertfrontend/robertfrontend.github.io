//variables
const botonMenu = document.querySelector('.icoMenu');
let contentMenu = document.querySelector('.linkMenu')
let estadoM = false;

//event listener
botonMenu.addEventListener('click', abrirMenu);


//templates
const logo = `
    <p id="miLogo" >Robert <span>Developer </span></p>

`

const templateMenu = `
<div class="padre">
    ${logo}

</div>
<div>
<a href="#"><ion-icon name="home-outline"></ion-icon> Inicio</a>
</div>
<div>
<a href="#"><ion-icon name="trail-sign-outline"></ion-icon> Servicios</a>
</div>
<div>
<a href="#"><ion-icon name="people-outline"></ion-icon> Nosotros</a>
</div>
<br>
<div>
<a href="#" class="boton-1">Contactos</a>
</div>
`

//funciones
function abrirMenu() {
    switch(estadoM){
        case false:

            contentMenu.innerHTML = templateMenu;
            contentMenu.style.width = '400px';

            estadoM = true;

            break;

        case true:

            estadoM = false;
            contentMenu.style.transition = 'all .4s';
            contentMenu.innerHTML = "";
            contentMenu.style.width = '0%';

            break;
        // default:
        //     return false
    }
}


