//Arreglos

let animales = ["chanchito", "caballo"];      //Creacion de Arrays literal.


console.log(animales); //lo vemos en el explorador con numero de posiciones.
console.log(animales[0]); //Buscamos por posicion un elemento. (chanchito)
animales[2] = "Dragon"; //Agregamos un elemento instantaneamente
console.log(animales);
animales[10] = "Lobo";
console.log(animales[7]); //nos muestra el 7 indefinido.

console.log(typeof animales); //Devuelve que el array es un object, podemos acceder a las propiedades.

console.log(animales.length); //nos devuelve la cantidad de elementos. (11)
