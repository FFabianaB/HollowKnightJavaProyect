// Obtén una referencia al botón por su ID
var boton = document.getElementById("miBoton");

// var btnH = document.getElementById("btnHollow");
// var btnS = document.getElementById("btnSilksong");

// Agrega un controlador de eventos onclick utilizando addEventListener
boton.addEventListener("click", function() {
    // El código que deseas ejecutar cuando se haga clic en el botón va aquí
    mostrarOcultarDiv()
   
});

// btnH.addEventListener("click", function() {
    
//     pantallaHollow() 
   
// });

// btnS.addEventListener("click", function() {
   
//     pantallaSilksong() 
    
   
// });

//   funciones para pantalla principal------------------------------------------------------
function mostrarOcultarDiv() {
    // Obtiene una referencia al div por su ID
    var div = document.getElementById("miDiv");

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
    var div = document.getElementById("pantallaDos");
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
    var div = document.getElementById("pantallaDos");
 // Si está visible, lo oculta
    div.style.display= "none";
    div.style.opacity= "0";
    div.style.transition= "4s";
}
//   funciones para pantalla secundaria------------------------------------------------------


// function pantallaHollow() {}

// function pantallaSilksong() {}