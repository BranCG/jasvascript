/*los objetos son una agrupacion de datos que da sentido tenerlos
juntos. (es un dato de referencia)
*/

let nombre = "Goku"
let anime = "Dragon Ball"
let edad = 23;

let personaje = {    //OBJETO LITERAL, Estamos creando un objeto con esta sintaxis.
    nombre: "Goku",  //Propiedad o llave- valor.
    anime: "Dragon Ball",
    edad: 23,
}; 

console.log(personaje)
console.log(personaje.nombre); //para llamar una propiedad
console.log(personaje["anime"]); //para llamar una propiedad de otra manera

personaje.edad = 12; //Para cambiar el valor de una propiedad.

personaje["edad"] = 15 //Para cambiar el valor de una propiedad de otra manera.

delete personaje.anime; //Eliminamos una propiedad con delete.