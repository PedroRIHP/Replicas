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



/* $(document).on("click",function(ocultar) {
                    
    var menuPuntosOcultar = $("#menu_puntos_mostrar");
                       
       if (!menuPuntosOcultar.is(ocultar.target) && menuPuntosOcultar.has(ocultar.target).length === 0) { 
        document.getElementById("menu_puntos_mostrar").style.display = "none";
        click = 1;               
       }
}); */
