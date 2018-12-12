var precio = 0 ; //precio del cafe primero
var precio1 = 0 ; //precio del cafe segundo
var precio2 = 0 ; //precio del cafe tercero
var j = 0 ; // placeholder1
var l = 0 ; //placeholder2
var cantidad =""; 
var cantidad1 =""; 
var cantidad2 =""; 
var enter=0;
var precios_sucios=0;
var fprecio_sucio=0;
var fprecio_sucio1=0;
var fprecio_sucio2=0;

/*-- ----------------------------------------------- FUNCIONES DE CAFES ------------------------------------------------- --*/

/* PRODUCTO */

function fun_enter() {
    enter = enter + 1;
    //document.getElementById("enter").innerHTML=enter;
}

function seleccion_cafe(l, m) {
if ( enter == 1) {
document.getElementById("seleccion_final1").innerHTML = m + ": "+ l ;        

    precio1 = l;
    
} else if ( enter == 2) {
    document.getElementById("seleccion_final2").innerHTML = m + ": "+ l ;        

    precio2 = l;
} else {
    
    document.getElementById("seleccion_final").innerHTML = m + ": "+ l ;
    
    precio = l ; //guardar el valor pasado para usarlo poste
}
                            }

/* CANTIDADES */

function cantidad_enviar(j) { 
if (enter == 1) {
 j = cantidad1 + j;
 document.getElementById("seleccion_producto1").innerHTML="Cantidad " + j;
    cantidad1 = j;
    
} else if (enter == 2) {
 j = cantidad2 + j;
 document.getElementById("seleccion_producto2").innerHTML="Cantidad " + j;
    cantidad2 = j;

} else {
    j = cantidad + j; 
document.getElementById("seleccion_producto").innerHTML = "Cantidad: "+ j ;
    cantidad = j ; //guardar h para usar posteriormente
}
        }

// EL BOTON DE RESET "C"

function cantidad_reset(v) {
    if (enter == 0) {
        cantidad = "" ;
        document.getElementById("seleccion_producto").innerHTML = "Cantidad";
        
        } else if ( enter == 1) {
        cantidad1 = "" ;
        document.getElementById("seleccion_producto1").innerHTML = "Cantidad";
        
    } else if ( enter == 2) {
        cantidad2 = "" ;
        document.getElementById("seleccion_producto2").innerHTML = "Cantidad";
               }
}

/* CALCULAR PRECIOS DE COLUMNAS */
function calcular_precio_sucio() {
    
    if ( enter == 1) {
     fprecio_sucio = precio * cantidad ;

        document.getElementById("precio_sucio").innerHTML="Precio "+ fprecio_sucio ;      
        
} else if ( enter == 2) {
       fprecio_sucio1 = precio1 * cantidad1 ;
        document.getElementById("precio_sucio1").innerHTML="Precio "+ fprecio_sucio1 ;
        
        
        
} else if (enter == 3) {
    fprecio_sucio2 = precio2 * cantidad2 ;
         document.getElementById("precio_sucio2").innerHTML="Precio "+ fprecio_sucio2 ;
                
}
    
}

/* CALCULAR PRECIO FINAL */

function calcular_precio(r) {
    precios_sucios = fprecio_sucio + fprecio_sucio1 + fprecio_sucio2;
    // r = tipo * cantidad ; //calcular precio con valores guardados
    document.getElementById("precio_final").innerHTML = "Precio total: " + precios_sucios ; 
}

/*-- ----------------------------------------------- FUNCIONES DE MAIDBOT ------------------------------------------------- --*/

function emote_sacar() {
    document.getElementById("maid").src="images/cumpoweredmaidrobot.png"
}

function emote_volver() {
    document.getElementById("maid").src="images/cumpoweredmaidrobot1.png"
}

/*-- ----------------------------------------------- MAIDBOT PARAR MUSICA ------------------------------------------------- --*/

function musica_pausar() {
    document.getElementById('musica').pause()
    
}