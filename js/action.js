// Obtén una referencia al botón por su ID DEFINE AL BOTON lo vincula con id
var botonPrincipal = document.getElementById("miBoton");
var btn = document.getElementById("btnHollow");
var btnS = document.getElementById("btnSilksong");

// Boton principal- Agrega evento click al boton principal
botonPrincipal.addEventListener("click", function() {
// Al hacer clic en el botón se oculta seccion H y se muestra u oculta BotonesHyS
    mostrarOcultarDiv()
    ocultarSectionH()
    ocultarSectionS()
   
});


//  ----------------------------------- Funciones para pantalla principal------------------------------------------------------
function mostrarOcultarDiv() {
    // Obtiene una referencia al div por su ID
    var div = document.getElementById("logoHollow");

    if (div.style.opacity === "0" ) {
        // Si está oculto lo muestra
                
         div.style.opacity= "1";
         div.style.transition= "2s";
         ocultaPantallaDos()
    } else {
        // Si está visible, lo oculta
        exponePantallaDos() 
        div.style.opacity= "0";
        div.style.transition= "1s";
    }
};

function exponePantallaDos() {
    var div = document.getElementById("botonesHyS");
    setTimeout(function () {
        div.style.display = "flex";
        div.style.opacity = "0";
    }, 500); // 1000 milisegundos = 1 segundos
    setTimeout(function () {
        
        div.style.opacity = "1";
        div.style.transition = "opacity 3s";
    }, 1000);
    
}


function ocultaPantallaDos() {
    var div = document.getElementById("botonesHyS");
 // Si está visible, lo oculta
    div.style.display= "none";
    div.style.opacity= "0";
    div.style.transition= "4s";
}
// -------------------------------------  funciones para pantalla hollow------------------------------------------------------

//evento que declara click al boton hollow y se oculta a si mismo
btn.addEventListener("click", function() {
        ocultaPantallaDos();
        revelarSectionH();
});

function revelarSectionH(){
    var div = document.getElementById("sectionH");
    div.style.display= "flex";
}

function ocultarSectionH(){
    var div = document.getElementById("sectionH");
    div.style.display= "none";
}

function ocultarSectionS(){
    var div = document.getElementById("sectionS");
    div.style.display= "none";
}

// -------------------------------------  funciones para pantalla Silksong------------------------------------------------------

//evento que declara click al boton hollow y se oculta a si mismo
btnS.addEventListener("click", function() {
    ocultaPantallaDos();
    revelarSectionS();
});

function revelarSectionS(){
var div = document.getElementById("sectionS");
div.style.display= "flex";
}

function ocultarSectionS(){
var div = document.getElementById("sectionS");
div.style.display= "none";
}



