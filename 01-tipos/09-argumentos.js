function suma(n1,n2) {  //Funcion mas flexible con argumentos y parametros.
    console.log(arguments) //variable especial para ver todos los argumentos que posee.
    return n1 + n2;   //n1 y n2 son parametros.
}

let resultado = suma(10,100, 1, 2, 3); //Asignamos un argumento 10 y 100 a los parametros.
console.log(resultado);

console.log(typeof suma) //Dice que es tipo funcion.