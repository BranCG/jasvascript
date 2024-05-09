// short-circuit o corto circuito


// todos estos evaluan en Falso
// false
// 0
// ''
// null
// undefined
// NaN 


let nombre = ''; //este es falso
let username = nombre || 'Anonimo' //falso o verdadero, muestra anonimo.
console.log(username);

nombre = 'Chanchito feliz'; //este es falso
username = nombre || 'Anonimo' //verdadero o verdadero, muestra chanchito feliz.
console.log(username);

//operador de AND
function fn1() {
    console.log("Soy funcion 1");
    return true;
}
function fn2() {
    console.log("Soy funcion 2");
    return true;
}

let x = fn1() && fn2(); //Se ejecutan las 2 porque son true.