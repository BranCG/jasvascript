//Cuales son los numeros pares

/* let i = 0;

while (i < 2) {
    if (i % 2 == 0){
        console.log("Numero par", i)
    }
    i ++; 
} 
console.log("Fuera del while") */

//for (inicializacion;comparacion;expresionAlterminarIteracion)
for (let i = 2; i < 10; i++) {
    if (i % 2 == 0){
        console.log("Numero par", i)
    }
}