function cualEsMayor(a,b){
    if (a > b){
        return a;
    }
    else{
        return b;
    }
}

let mayor = cualEsMayor(18, 5);

console.log(mayor);

//Solucion corta ternario , nico.

function cualEsMayor(a,b){
    return( a > b) ? a : b;
}