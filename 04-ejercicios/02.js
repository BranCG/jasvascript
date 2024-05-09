let ochoKA = 7680
let ochoKAl = 4320
let cuatroKA = 3840
let cuatroKAl = 2160
let WQHDA = 2560
let WQHDAl = 1440
let FHDA = 1920
let FHDAl = 1080
let HDA = 1280
let HDAl = 720

function nombreResolucion(ancho, alto) {
    if (ancho > ochoKA && alto < ochoKAl){
        return false; 
    }
    else if (ancho >= ochoKA && alto >= ochoKAl){
        return "8K";
    }
    else if (ancho >= cuatroKA && alto < cuatroKAl){
        return false;
    }
    else if (ancho >= cuatroKA && alto >= cuatroKAl){
        return "4K";
    }
    else if (ancho >= WQHDA && alto < WQHDAl){
        return false;
    }
    else if (ancho >= WQHDA && alto >= WQHDAl){
        return "WQHD";
    }
    else if (ancho >= FHDA && alto < FHDAl){
        return false;
    }
    else if (ancho >= FHDA && alto >= FHDAl){
        return "FHD";
    }
    else if (ancho >= HDA && alto < HDAl){
        return false;
    }
    else if (ancho >= HDA && alto >= HDAl){
        return "HD"
    }
}

let nombre = nombreResolucion(4000, 2300);

console.log(nombre)

//Solucion corta nico.
function nombreResolucion(ancho, alto) {
    if (ancho >= 7680 && alto >= 4320){
        return "8K"; 
    } 
    else if (ancho >= 3840 && alto >= 2160){
        return "4K";
    }
    else if (ancho >= 2560 && alto >= 1440){
        return "WQHD";
    }
    else if (ancho >= 1920 && alto >= 1080){
        return "FHD";
    }
    else if (ancho >= 1280 && alto >= 720){
        return "HD";
    }
    else {
        return false;
    }
}