/* ------ Menu 3 puntos para links paginas ------ */

var menuPuntos = document.getElementById("menu_puntos")
    menuPuntos.addEventListener("click", mostar)
var click = 1; 

function mostar(){
if(click==1){
    document.getElementById("menu_puntos_mostrar").style.display = "block";
    click = click + 1;
} else{
    document.getElementById("menu_puntos_mostrar").style.display = "none";
    click = 1;
}
}

/* ------ Abre y cierra  el menu para ajustes ------ */

var abreAjustes = document.getElementById("abrir_ajustes")
    abreAjustes.addEventListener("click",abrirCerrarAjustes );

var cierraAjustes = document.getElementById("cerrar_ajustes")
    cierraAjustes.addEventListener("click", abrirCerrarAjustes)

function abrirCerrarAjustes(){
    if(click==1){
        document.getElementById("menu_ajustes").style.display = "block";
        click = click + 1;

    } else if(click>=2){
        document.getElementById("menu_ajustes").style.display = "none";
        click = 1;
    }
    else{ 
    }
    }
    /* ------ Desaparecer y aparecer seccion de links a paginas ------ */

var abreAjustes = document.getElementById("switch")
abreAjustes.addEventListener("click", esconderMostrarLinks);

var contLinks = 1;

function esconderMostrarLinks(){
    if(contLinks==1){
        document.getElementById("selector_filas").style.display = "none";
        document.getElementById("links_paginas_contenedor").style.display = "none";
        contLinks = contLinks + 1;

    }else{ 
        document.getElementById("selector_filas").style.display = "block";
        document.getElementById("links_paginas_contenedor").style.display = "flex";
        contLinks = 1;  
    }
    }

/* ------ Abrir y cerrar menu de puntos en las cards ------ */

    var menuPuntos = document.getElementById("menu_puntos_card")
    menuPuntos.addEventListener("click", abrirCerrarMenuCards)

    var contCards = 1; 

function abrirCerrarMenuCards(){
if(contCards==1){
    document.getElementById("abrir_menu_card").style.display = "block";
    contCards = contCards + 1;
} else{
    document.getElementById("abrir_menu_card").style.display = "none";
    contCards = 1;
}
}

 /* ------ Mostrar y ocultar la seccion actividad reciente ------ */

   var abreAjustes = document.getElementById("switch2")
   abreAjustes.addEventListener("click", esconderMostrarReciente);
   
   var contReciente = 1;
   
   function esconderMostrarReciente(){
       if(contReciente==1){
           document.getElementById("actividad_reciente").style.display = "flex";
           contReciente = contReciente + 1;
   
       }else{ 
           document.getElementById("actividad_reciente").style.display = "none";
           contReciente = 1;  
       }
       }

       /* ------ mostrar u ocultar filas ------ */

   function dosfilas(){
    let fila2 = document.getElementById("select");

    let filados = fila2.Value;
    
       document.getElementById("links_paginas_contenedor2").style.display = "flex";  

   }
 










