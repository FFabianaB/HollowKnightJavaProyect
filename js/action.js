
//  ----------------------------------- Funciones Boton  principal------------------------------------------------------
var botonPrincipal = document.getElementById("miBoton");
// Boton principal- Agrega evento click al boton principal
botonPrincipal.addEventListener("click", function() {
// Al hacer clic en el botón se oculta seccion H y se muestra u oculta BotonesHyS
    mostrarOcultarDiv()
    ocultarSectionH()
    ocultarSectionS()
    ocultarBotonSecundario()
    ocultarBotonTerciario()
   
});


//  ----------------------------------- Funciones para Logo principal------------------------------------------------------
function ocultarLogoMostrarMenu(){
    ocultarlogo();
    mostrarMenuHyS();
}

function mostrarLogoOcultarMenu(){
    mostrarlogo()
    ocultarMenuHyS()
}


function mostrarlogo(){
    var div = document.getElementById("logoHollow");
    div.style.opacity= "1";
    div.style.transition= "2s";
}
function ocultarlogo(){
    var div = document.getElementById("logoHollow");
    div.style.opacity= "0";
    div.style.transition= "1s";
}




//  ----------------------------------- Funciones para Menu HyS------------------------------------------------------

function mostrarMenuHyS() {
    var div = document.getElementById("menuHyS");
    setTimeout(function () {
        div.style.display = "none";
        div.style.opacity = "0";
    }, 500); // 1000 milisegundos = 1 segundos
    setTimeout(function () {
        div.style.display = "flex";
        div.style.opacity = "1";
        div.style.transition = "opacity 3s";
    }, 1000);
    
}


function ocultarMenuHyS() {
    var div = document.getElementById("menuHyS");
 // Si está visible, lo oculta
    div.style.display= "none";
    div.style.opacity= "0";
    div.style.transition= "4s";
}
// -------------------------------------  funciones para pantalla hollow------------------------------------------------------

// defino boton H
var btn = document.getElementById("btnHollow");

//evento que declara click al boton hollow y se oculta a si mismo
btn.addEventListener("click", function() {
        ocultarMenuHyS();
        revelarSectionH();
});

function revelarSectionH(){
    var div = document.getElementById("sectionH");
    div.style.display= "flex";
    revelarBotonSecundario();
    mostrarlogo();
    
}

function ocultarSectionH(){
    var div = document.getElementById("sectionH");
    div.style.display= "none";
    
}

//........................................Botón cerrar sección.........................

var botonSecundario = document.getElementById("miBotonDos");

function revelarBotonSecundario(){
    var div = document.getElementById("miBotonDos");
    div.style.display= "flex";
};
function ocultarBotonSecundario(){
    var div = document.getElementById("miBotonDos");
    div.style.display= "none";
   
};

botonSecundario.addEventListener("click", function() {
    ocultarSectionH();
    ocultarBotonSecundario();
    mostrarlogo();
});

// -------------------------------------  funciones para pantalla Silksong------------------------------------------------------
// Defino botonS
var btnS = document.getElementById("btnSilksong");

//evento que declara click al boton Silksong y se oculta a si mismo
btnS.addEventListener("click", function() {
    ocultarMenuHyS();
    revelarSectionS();
    revelarBotonTerciario();
});

function revelarSectionS(){
var div = document.getElementById("sectionS");
div.style.display= "flex";
mostrarlogo();
}

function ocultarSectionS(){
var div = document.getElementById("sectionS");
div.style.display= "none";

}
//........................................Botón tres cerrar sección.........................

var botonTerciario = document.getElementById("miBotonTres");

function revelarBotonTerciario(){
    var div = document.getElementById("miBotonTres");
    div.style.display= "flex";
};
function ocultarBotonTerciario(){
    var div = document.getElementById("miBotonTres");
    div.style.display= "none";
};

botonTerciario.addEventListener("click", function() {
    ocultarSectionS();
    ocultarBotonTerciario();
    mostrarlogo()
});




